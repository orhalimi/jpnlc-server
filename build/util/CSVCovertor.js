'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = require('csvtojson/v2');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const convert = (() => {
  var _ref = _asyncToGenerator(function* (path) {
    return yield (0, _v2.default)().fromFile(path);
  });

  return function convert(_x) {
    return _ref.apply(this, arguments);
  };
})();

exports.default = convert;