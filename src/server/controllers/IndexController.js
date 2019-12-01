import Controller from "./Controller"
import ReactDomServer from "react-dom/server"

import ServerEntry from "@assets/server-entry.js"
const serverEntry = ServerEntry

class IndexController extends Controller {
    constructor() {
        super();
    }
    async actionIndex(ctx, next) {
        let appString = ReactDomServer.renderToString(serverEntry('/'))
        console.log(serverEntry)
        const result = await ctx.render('index', { title: '🏠home' })
        ctx.body = result
    }
}
export default IndexController;