import jpConjuction from 'jp-conjugation';

const ichidan = 'v1';

const suruConjuctTable = {};
const kuruConjuctTable = {}

export const isIchidan = verbObj => {
  const partOfSpeech = verbObj.jishoPartOfSpeech;
  return partOfSpeech.includes('Ichidan');
};

export const isSuru = verbObj => {
  const word = verbObj.vocabJapan
  return word === 'する'
;}

export const isKuru = verbObj => {
  const word = verbObj.vocabJapan
  return (word === 'くる' || word === '来る')
;}

const conjuct = (verbObj, forceIchidan=false) => {
  const word = verbObj.vocabJapan;
  if (isKuru(verbObj))
    return kuruConjuctTable;
  if (isSuru(verbObj))
    return suruConjuctTable;  
  if (isIchidan(verbObj) || forceIchidan)
    return jpConjuction.conjugate(word, ichidan);
  return jpConjuction.conjugate(word);
};

export default conjuct;