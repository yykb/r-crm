"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _koaSimpleRouter = _interopRequireDefault(require("koa-simple-router"));

var _IndexController = _interopRequireDefault(require("./IndexController"));

var _BooksController = _interopRequireDefault(require("./BooksController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const indexController = new _IndexController.default();
const booksController = new _BooksController.default();

const controllersInit = app => {
  app.use((0, _koaSimpleRouter.default)(_ => {
    _.get('/', indexController.actionIndex);

    _.get('/books/list', booksController.actionIndex);

    _.get('/books/create', booksController.actionCreate);
  }));
};

var _default = controllersInit;
exports.default = _default;