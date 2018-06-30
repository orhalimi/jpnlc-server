'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _conjuction = require('../features/conjuction');

const routes = (0, _express.Router)();

routes.get('/', (req, res) => {
  res.status(200);
  res.json(_conjuction.supportedForms);
});

exports.default = routes;