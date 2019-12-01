"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _path = require("path");

let config = {
  viewsDir: (0, _path.join)(__dirname, "..", "views"),
  staticDir: (0, _path.join)(__dirname, "..", "assets")
};

if (process.env.NODE_ENV == 'development') {
  const localConfig = {
    port: 3000,
    baseUrl: 'http://49.235.162.192/basic/web/index.php?r='
  };
  config = (0, _lodash.extend)(config, localConfig);
}

if (process.env.NODE_ENV == 'production') {
  const prodConfig = {
    port: 8080
  };
  config = (0, _lodash.extend)(config, prodConfig);
}

var _default = config;
exports.default = _default;