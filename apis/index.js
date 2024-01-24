const axios = require("axios");
module.exports.tsByYoudao = (params) => {
  return axios.get(`http://aidemo.youdao.com/trans?${params}`);
};
module.exports.tsByDeepL = (data) => {
  return   axios
  .post('http://47.95.239.198:9521/translate', data)
};
