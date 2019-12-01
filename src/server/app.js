import 'module-alias/register';
import Koa from "koa";
import render from 'koa-swig';
import { wrap } from 'co';
import serve from 'koa-static';
import config from "@config";
const { viewsDir, staticDir, port } = config;
import controllersInit from "@controllers";
import errorHandler from "./middlewares/errorHandler";
const { error } = errorHandler;

import { configure, getLogger } from 'log4js';
const app = new Koa;

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
app.use(serve(staticDir));
// 错误处理
error(app);
// 路由注册中心
controllersInit(app);

app.listen(port, () => {
    console.log("server start 🍎");

})