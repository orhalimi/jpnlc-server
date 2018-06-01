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

//some with the same title need to change it
export const supportedForms = 
  [
    {
      title:'plain',
      name:'plain'
    },
    {
      title:'plain polite',
      name:'polite affirmative'
    }, 
    {
      title:'plain negative',
      name:'plain negative'
    },   
    {
      title:'plain polite negative',
      name:'polite negative'
    },
    {
      title:'past',
      name:'past tense'
    },
    {
      title:'past polite',
      name:'past polite affirmative'
    },
    {
      title:'past negative',
      name:'past plain negative'
    },
    {
      title:'past polite negative',
      name:'past polite negative'
    },
    {
      title:'て (te)',
      name:'te form'
    },
    {
      title:'ている (te iru)',
      name:'te iru'
    },
    {
      title:'ば (hypothetical)',
      name:'hypothetical'
    },
    {
      title:'negetive ば (hypothetical)',
      name:'negetive hypothetical'
    },
    {
      title:'たら (Conditional)',
      name:'tara'
    },
    {
      title:'negetive たら (Conditional)',
      name:'negetive tara'
    },
    {
      title:'たい form (desire)',
      name:'desire'
    },
    {
      title:'passive',
      name:'passive'
    },
    {
      title:'potential',
      name:'potential'
    },
    {
      title:'causative (させる)',
      name:'causative'
    },
    {
      title:'causative (させる)　passive',
      name:'causative passive'
    },
    {
      title:'volitional (しよう)',
      name:'volitional'
    },
    {
      title:'さい form　(authoritative)',
      name:'sai commanding'
    },
    {
      title:'commanding',
      name:'commanding'
    },
    {
      title:'na commanding',
      name:'na commanding'
    },
    {
      title:'negetive na commanding',
      name:'negetive na commanding'
    },
    {
      title:'requesting (ください)',
      name:'requesting'
    },
    {
      title:'negative request (でください)',
      name:'negative request'
    },
  ];