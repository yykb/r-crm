"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const _ = function (obj) {
  if (obj instanceof _) return obj;
  if (!(this instanceof _)) return new _(obj);
  this._wrapped = obj;
};

const ArrayProto = Array.prototype;
const push = ArrayProto.push;
_.VERSION = '1.0.0';

_.isFunction = function (obj) {
  return typeof obj == 'function' || false;
};

_.functions = _.methods = function (obj) {
  var names = [];

  for (var key in obj) {
    if (_.isFunction(obj[key])) names.push(key);
  }

  return names.sort();
};

_.each = function (obj, iteratee) {
  if (Array.isArray(obj)) {
    for (let i of obj) {
      iteratee && iteratee.call(_, item);
    }
  }
};

_.mixin = function (obj) {
  _.each(_.functions(obj), function (name) {
    var func = _[name] = obj[name];

    _.prototype[name] = function () {
      var args = [this._wrapped];
      push.apply(args, arguments);
      func.apply(_, args);
    };
  });

  return _;
};

_.mixin(_);

_.throttle = function (fn, wait = 500) {
  let timer;
  return function (...args) {
    if (timer == null) {
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      return fn.apply(this, args);
    }
  };
};

var _default = _;
exports.default = _default;