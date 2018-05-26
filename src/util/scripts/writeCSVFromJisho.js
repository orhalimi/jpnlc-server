import * as vocal from './util/vocabilaries';
import * as jsonexport from 'jsonexport';
import * as fs from 'fs';

async function getInfoFromJisho() {
  await vocal.initVocal();
  const verbsList = vocal.getVocab();
  for (let word of verbsList){
    try {
      if(!word.jishoPartOfSpeech ){
        const result = await vocal.jishoSearch(word)
        console.log(`${word.vocabJapan} ${wordresult.data[0].senses[0]["parts_of_speech"]}` );
        word.jishoPartOfSpeech = result.data[0].senses[0]["parts_of_speech"];}
    } catch (error) {
      console.error(`${word.vocabJapan} ${error}`);
    }
  }
  console.log("done");
  return verbsList; 
  };

  const opt = {arrayPathString: " "}

export const run = () =>{
  getInfoFromJisho().then(verbsList => {
    jsonexport(verbsList,opt,function(err, csv){
      if(err) return console.log(err);
      fs.writeFile('Core2k6k10kWithType.csv', csv, (err) => {  
        if (err) throw err;
        console.log('wrote ');
      });
    });
  })
}

