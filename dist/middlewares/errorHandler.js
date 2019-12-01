"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const errorHandler = {
  error(app) {
    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (err) {
        ctx.logger.error(err);
        ctx.status = err.status || 500;
      }
    });
    app.use(async (ctx, next) => {
      await next();

      if (ctx.status === 404) {
        ctx.body = "error";
      }
    });
  }

};
var _default = errorHandler;
exports.default = _default;