
//const init = require('./util/init')
const conjuction = require('jp-conjugation');
const vocal = require('./util/vocabilaries');

async function conjuct() {
  await vocal.initVocal();
  const verbsList = vocal.getVerbsVocab();
  const verb = verbsList[0];  
  const jishoResults = await vocal.jishoSearch(verb);
  console.log(jishoResults.data[0].senses[0].parts_of_speech);
}

conjuct();

/*
good links 
https://www.npmjs.com/package/unofficial-jisho-api
https://github.com/orhalimi/WanaKana
https://github.com/orhalimi/node-jp-conjugations

*/ 


