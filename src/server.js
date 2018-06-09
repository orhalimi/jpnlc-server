import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import apiRoutes from './routes/apiRoutes'

const port = 8080; //TODO: add config file
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const server = express();
server.use(cors(corsOptions))


server.use(bodyParser.json());
//server.use(bodyParser.urlencoded({ extended: false }));

server.use('/', apiRoutes);

server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  if (err) {
    console.error(err.message);
    console.error(err.stack)
    res.status(500).send(err);
  }
});

console.log(`listening on ${port}`);
server.listen(port);


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


