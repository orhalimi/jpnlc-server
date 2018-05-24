const path = require('path');
const csvFilePath = path.resolve("./src/resources/Core2k6k10k.csv");
const CSVCovertor = require('./CSVCovertor');
const jishoApi = new require('unofficial-jisho-api');
const jisho = new jishoApi();
let vocab10k, vocab10kVerbs;

const initVocal =  async function (){
  vocab10k = await CSVCovertor.convert(csvFilePath);
  vocab10kVerbs = vocab10k.filter(word => word.partOfSpeech === "verb")
  console.log(`vocab has been loaded with ${vocab10k.length} words and ${vocab10kVerbs.length} verbs`)
}

const jishoSearch = async function(verbObj)  {
  return await jisho.searchForPhrase(verbObj.vocabJapan);
}

const getVocab = () => vocab10k;
const getVerbsVocab = () => vocab10kVerbs;

module.exports = {
  initVocal,
  getVocab,
  getVerbsVocab,
  jishoSearch
}