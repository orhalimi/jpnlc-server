'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVerbsVocab = exports.getVocab = exports.jishoSearch = exports.initVocal = undefined;

var _path = require('path');

var _CSVCovertor = require('./CSVCovertor');

var _CSVCovertor2 = _interopRequireDefault(_CSVCovertor);

var _unofficialJishoApi = require('unofficial-jisho-api');

var _unofficialJishoApi2 = _interopRequireDefault(_unofficialJishoApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const csvFilePath = (0, _path.resolve)("./src/resources/Core2k6k10kWithType.csv");
const jisho = new _unofficialJishoApi2.default();
let vocab10k, vocab10kVerbs;

const initVocal = exports.initVocal = (() => {
  var _ref = _asyncToGenerator(function* () {
    vocab10k = yield (0, _CSVCovertor2.default)(csvFilePath);
    vocab10kVerbs = vocab10k.filter(function (word) {
      return word.partOfSpeech === "verb";
    });
    console.log(`vocab has been loaded with ${vocab10k.length} words and ${vocab10kVerbs.length} verbs`);
  });

  return function initVocal() {
    return _ref.apply(this, arguments);
  };
})();

const jishoSearch = exports.jishoSearch = (() => {
  var _ref2 = _asyncToGenerator(function* (verbObj) {
    return yield jisho.searchForPhrase(verbObj.vocabJapan);
  });

  return function jishoSearch(_x) {
    return _ref2.apply(this, arguments);
  };
})();

const getVocab = exports.getVocab = () => vocab10k;
const getVerbsVocab = exports.getVerbsVocab = () => vocab10kVerbs;