"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SafeRequest = _interopRequireDefault(require("@utils/SafeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileoverview Books数据模型
 * @author fan
 */
class Books {
  /**
   * Books类 实现获取后台关于图书相关内容
   * @class
   */

  /**
   * @constructor
   * @param {object} app KOA2执行的上下文 
   */
  constructor(app) {}
  /**
   * 
   * 📚获取后台图书全部列表
   * @param {*} params  设置访问数据的参数
   * @return new Promise
   * @example
   * getList(params) 
   */


  getList(params) {
    const safeRequest = new _SafeRequest.default("books/getbooklist");
    return safeRequest.get(params);
  }

}

var _default = Books;
exports.default = _default;