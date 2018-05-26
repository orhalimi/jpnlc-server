import {resolve as parthResolve} from 'path';
import CSVCovertor from './CSVCovertor';
import jishoApi from 'unofficial-jisho-api';

const csvFilePath = parthResolve("./src/resources/Core2k6k10kWithType.csv");
const jisho = new jishoApi();
let vocab10k, vocab10kVerbs;

export const initVocal =  async function (){
  vocab10k = await CSVCovertor(csvFilePath);
  vocab10kVerbs = vocab10k.filter(word => word.partOfSpeech === "verb")
  console.log(`vocab has been loaded with ${vocab10k.length} words and ${vocab10kVerbs.length} verbs`)
}

export const jishoSearch = async function(verbObj)  {
  return await jisho.searchForPhrase(verbObj.vocabJapan);
}

export const getVocab = () => vocab10k;
export const getVerbsVocab = () => vocab10kVerbs;

