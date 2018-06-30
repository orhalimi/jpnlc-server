'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _availableForms = require('./availableForms');

var _availableForms2 = _interopRequireDefault(_availableForms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const apiRoutes = (0, _express.Router)();

apiRoutes.use('/available_forms', _availableForms2.default);

exports.default = apiRoutes;