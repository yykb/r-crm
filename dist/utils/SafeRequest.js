"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("@config"));

var _axios = require("axios");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  baseUrl
} = _config.default;

class SafeRequest {
  constructor(url) {
    this.url = url;
    this.baseUrl = baseUrl;
  }

  get(params = {}) {
    let result = {
      code: 0,
      msg: '',
      data: []
    };
    return new Promise((res, rej) => {
      (0, _axios.get)(this.baseUrl + this.url, {
        params
      }).then(response => {
        console.log(response.data);

        if (response.status == 200) {
          result.data = response.data.data;
          result.msg = '请求成功';
          res(result);
        } else {
          result.code = -1;
          result.msg = '🍎请求失败';
          rej(result);
        }
      }).catch(err => {
        result.code = -1;
        result.msg = '🍎接口报错';
        result.error = err;
        rej(result);
      });
    });
  }

}

var _default = SafeRequest;
exports.default = _default;