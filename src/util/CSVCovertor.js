const csv = require('csvtojson/v2');

const convert =  async function (path){
  return await csv().fromFile(path);
}

module.exports = {
convert
}