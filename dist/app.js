"use strict";

require("module-alias/register");

var _koa = _interopRequireDefault(require("koa"));

var _koaSwig = _interopRequireDefault(require("koa-swig"));

var _co = require("co");

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _config = _interopRequireDefault(require("@config"));

var _controllers = _interopRequireDefault(require("@controllers"));

var _errorHandler = _interopRequireDefault(require("./middlewares/errorHandler"));

var _log4js = require("log4js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  viewsDir,
  staticDir,
  port
} = _config.default;
const {
  error
} = _errorHandler.default;
const app = new _koa.default();
(0, _log4js.configure)({
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
const logger = (0, _log4js.getLogger)('nodejs');
app.context.logger = logger;
app.context.render = (0, _co.wrap)((0, _koaSwig.default)({
  root: viewsDir,
  autoescape: true,
  cache: false,
  // 正事环境'memory'，开发环境 false
  ext: 'html',
  writeBody: false
}));
app.use((0, _koaStatic.default)(staticDir)); // 错误处理

error(app); // 路由注册中心

(0, _controllers.default)(app);
app.listen(port, () => {
  console.log("server start 🍎");
});