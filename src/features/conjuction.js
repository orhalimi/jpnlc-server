import jpConjuction from 'jp-conjugation';

const ichidan = 'v1';

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

//some with the same name need to change it
export const supportedForms = 
  [
    {
      name:'plain',
      id:'plain'
    },
    {
      name:'plain polite',
      id:'polite affirmative'
    }, 
    {
      name:'plain negative',
      id:'plain negative'
    },   
    {
      name:'plain polite negative',
      id:'polite negative'
    },
    {
      name:'past',
      id:'past tense'
    },
    {
      name:'past polite',
      id:'past polite affirmative'
    },
    {
      name:'past negative',
      id:'past plain negative'
    },
    {
      name:'past polite negative',
      id:'past polite negative'
    },
    {
      name:'て (te)',
      id:'te form'
    },
    {
      name:'ている (te iru)',
      id:'te iru'
    },
    {
      name:'ば (hypothetical)',
      id:'hypothetical'
    },
    {
      name:'negetive ば (hypothetical)',
      id:'negetive hypothetical'
    },
    {
      name:'たら (Conditional)',
      id:'tara'
    },
    {
      name:'negetive たら (Conditional)',
      id:'negetive tara'
    },
    {
      name:'たい form (desire)',
      id:'desire'
    },
    {
      name:'passive',
      id:'passive'
    },
    {
      name:'potential',
      id:'potential'
    },
    {
      name:'causative (させる)',
      id:'causative'
    },
    {
      name:'causative (させる)　passive',
      id:'causative passive'
    },
    {
      name:'volitional (しよう)',
      id:'volitional'
    },
    {
      name:'さい form　(authoritative)',
      id:'sai commanding'
    },
    {
      name:'commanding',
      id:'commanding'
    },
    {
      name:'na commanding',
      id:'na commanding'
    },
    {
      name:'negetive na commanding',
      id:'negetive na commanding'
    },
    {
      name:'requesting (ください)',
      id:'requesting'
    },
    {
      name:'negative request (でください)',
      id:'negative request'
    },
  ];