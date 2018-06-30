import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import apiRoutes from './routes/apiRoutes'
import path from 'path'


const server = express();
server.set('port', (process.env.PORT || 8080))

server.use(cors())

server.use(bodyParser.json());
//server.use(bodyParser.urlencoded({ extended: false })); 

server.use('/api', apiRoutes);


server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  if (err) {
    console.error(err.message);
    console.error(err.stack)
    res.status(500).send(err);
  }
});

server.listen(server.get('port'), () => { 
  console.log(`Listening on ${server.get('port')}`)
})


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


