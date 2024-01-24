// const axios = require("axios");
const { tsByYoudao } = require("../apis");
const querystring = require("querystring");
// youdao 翻译
module.exports.youdao = async (queryStr) => {
  // 用于请求的选项
  let params = querystring.stringify({
    q: queryStr,
    from: "Auto",
    to: "Auto",
  });
  try {
    const { data } = await tsByYoudao(params);
    format(data);
  } catch (error) {
    // 处理异常
    console.error("Error during Youdao translation:", error.message);
  }
};

//格式化
function format(data) {
  // 发音
  let pronounce = data.basic ? data.basic.phonetic : "无";
  // 翻译
  let mainTrans = "";
  // 网络释义
  let webTrans = "";
  // 机器翻译
  let machineTrans = data.translation || "";

  let basic = data.basic;
  let web = data.web;

  if (basic) {
    mainTrans = "\n" + basic.explains.join("\n");
  }
  if (web) {
    for (let i = 0; i < web.length; i++) {
      webTrans +=
        "\n" +
        (i + 1) +
        ": " +
        web[i].key.red.bold +
        "\n" +
        web[i].value.join(",");
    }
  }
  console.log(`
${"发音: ".red.bold}${pronounce}
${"翻译: ".green.bold}${mainTrans}
${"网络释义: ".blue.bold}${webTrans}
${"机器翻译: ".yellow.bold}${machineTrans}
---------------- by Rascal-Coder ----------------
`);
}
