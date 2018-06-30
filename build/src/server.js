'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _apiRoutes = require('./routes/apiRoutes');

var _apiRoutes2 = _interopRequireDefault(_apiRoutes);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = (0, _express2.default)();
server.set('port', process.env.PORT || 8080);

var corsOptions = {
  origin: `http://localhost:3000`,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

server.use((0, _cors2.default)(corsOptions));

server.use(_bodyParser2.default.json());
//server.use(bodyParser.urlencoded({ extended: false })); 

server.use('/api', _apiRoutes2.default);

const staticFiles = _express2.default.static(_path2.default.join(__dirname, '../../jpnlc-client/build'));
server.use(staticFiles);
server.use('/*', staticFiles);

server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  if (err) {
    console.error(err.message);
    console.error(err.stack);
    res.status(500).send(err);
  }
});

server.listen(server.get('port'), () => {
  console.log(`Listening on ${server.get('port')}`);
});

//const init = require('./util/init')

// import * as vocal from './util/vocabilaries';
// import conjuct, {isIchidan} from './features/conjuction';


// vocal.initVocal()
//   .then(() =>{
//     const Verblist = vocal.getVerbsVocab();
//     const ichidan = Verblist.filter(v => isIchidan(v));
//     console.log(conjuct(Verblist[1]));
//   })


/*
good links features idea
https://www.npmjs.com/package/unofficial-jisho-api
https://github.com/orhalimi/WanaKana
https://github.com/orhalimi/node-jp-conjugations

*/