
//const init = require('./util/init')

import * as vocal from './util/vocabilaries';
import conjuct, {isIchidan} from './util/conjuction';


vocal.initVocal()
  .then(() =>{
    const Verblist = vocal.getVerbsVocab();
    const ichidan = Verblist.filter(v => isIchidan(v));
    console.log(conjuct(Verblist[0]));
  })



/*
good links 
https://www.npmjs.com/package/unofficial-jisho-api
https://github.com/orhalimi/WanaKana
https://github.com/orhalimi/node-jp-conjugations

*/ 


