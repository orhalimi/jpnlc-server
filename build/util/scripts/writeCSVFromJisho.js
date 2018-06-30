'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = undefined;

let getInfoFromJisho = (() => {
  var _ref = _asyncToGenerator(function* () {
    yield vocal.initVocal();
    const verbsList = vocal.getVocab();
    for (let word of verbsList) {
      try {
        if (!word.jishoPartOfSpeech) {
          const result = yield vocal.jishoSearch(word);
          console.log(`${word.vocabJapan} ${wordresult.data[0].senses[0]["parts_of_speech"]}`);
          word.jishoPartOfSpeech = result.data[0].senses[0]["parts_of_speech"];
        }
      } catch (error) {
        console.error(`${word.vocabJapan} ${error}`);
      }
    }
    console.log("done");
    return verbsList;
  });

  return function getInfoFromJisho() {
    return _ref.apply(this, arguments);
  };
})();

var _vocabilaries = require('./util/vocabilaries');

var vocal = _interopRequireWildcard(_vocabilaries);

var _jsonexport = require('jsonexport');

var jsonexport = _interopRequireWildcard(_jsonexport);

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

;

const opt = { arrayPathString: " " };

const run = exports.run = () => {
  getInfoFromJisho().then(verbsList => {
    jsonexport(verbsList, opt, function (err, csv) {
      if (err) return console.log(err);
      fs.writeFile('Core2k6k10kWithType.csv', csv, err => {
        if (err) throw err;
        console.log('wrote ');
      });
    });
  });
};