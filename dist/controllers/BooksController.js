"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Controller = _interopRequireDefault(require("./Controller"));

var _books = _interopRequireDefault(require("@models/books.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BooksController extends _Controller.default {
  constructor() {
    super();
  }

  async actionIndex(ctx, next) {
    const model = new _books.default();
    const result = await model.getList(); // console.log("index",result);

    ctx.body = await ctx.render('books/pages/list', {
      result
    });
  }

  async actionCreate(ctx, next) {
    ctx.body = await ctx.render('books/pages/create');
  }

  async actionList(ctx, next) {}

}

var _default = BooksController;
exports.default = _default;