import csv from 'csvtojson/v2';

const convert =  async function (path){
  return await csv().fromFile(path);
}

export default convert;