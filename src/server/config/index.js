import { extend } from "lodash";
import { join } from "path";

let config = {
    viewsDir: join(__dirname, "..", "views"),
    staticDir: join(__dirname, "..", "assets")
}

if (process.env.NODE_ENV == 'development') {
    const localConfig = {
        port: 3000,
        baseUrl: 'http://server.com/basic/web/index.php?r='
    }
    config = extend(config, localConfig);
}
if (process.env.NODE_ENV == 'production') {
    const prodConfig = {
        port: 8080
    }
    config = extend(config, prodConfig);
}

export default config;
