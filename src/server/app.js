import 'module-alias/register';
import Koa from "koa";
import render from 'koa-swig';
import { wrap } from 'co';
import serve from 'koa-static';
import { join } from 'path';
import config from "@config";
const { viewsDir, staticDir, port } = config;
import controllersInit from "@controllers";
import router from 'koa-simple-router';
import errorHandler from "./middlewares/errorHandler";
const { error } = errorHandler;

import { configure, getLogger } from 'log4js';
const app = new Koa;

import memeye from 'memeye';
import { Router } from 'react-router';
import ReactDomServer from 'react-dom/server'


import serverEntry from "@assets/server-entry.js"
import {
    Readable
} from 'stream';


if (process.env.NODE_ENV == 'development') {
    memeye();
}

configure({
    appenders: {
        nodejs: {
            type: 'file',
            filename: __dirname + '/log/library.log'
        }
    },
    categories: {
        default: {
            appenders: ['nodejs'],
            level: 'error'
        }
    }
});
const logger = getLogger('nodejs');
app.context.logger = logger;

app.context.render = wrap(render({
    root: viewsDir,
    autoescape: true,
    cache: false, // 正事环境'memory'，开发环境 false
    ext: 'html',
    writeBody: false
}));
// app.use(serve(staticDir));
app.use(serve(join(__dirname, '.')));

// 错误处理
error(app);
// 路由注册中心
// controllersInit(app);
app.use(router(_ => {
    _.get("/:controller?/:action?", async (ctx, next) => {        
        const _controller = ctx.params.controller || '/';
        let appString = ReactDomServer.renderToString(serverEntry(_controller))
        let result = await ctx.render('index')

        result = result.replace('<App />', appString)
        ctx.status = 200
        ctx.type = 'html'

        function createSsrStreamPromise() {
            return new Promise((res, rej) => {
                const stream = new Readable()
                stream.push(result)
                stream.push(null)
                stream.on('error', err => (rej(err))).pipe(ctx.res)
            })
        }
        await createSsrStreamPromise()
    })
}))

app.listen(port, () => {
    console.log("server start 🍎");

})