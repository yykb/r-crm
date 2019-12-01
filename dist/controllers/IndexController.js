"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Controller = _interopRequireDefault(require("./Controller"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _serverEntry = _interopRequireDefault(require("@assets/server-entry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const serverEntry = _serverEntry.default;

class IndexController extends _Controller.default {
  constructor() {
    super();
  }

  async actionIndex(ctx, next) {
    let appString = _server.default.renderToString(serverEntry('/'));

    console.log(serverEntry);
    const result = await ctx.render('index', {
      title: '🏠home'
    });
    ctx.body = result;
  }

}

var _default = IndexController;
exports.default = _default;