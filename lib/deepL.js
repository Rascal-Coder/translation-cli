const axios = require('axios')
const { tsByDeepL } = require("../apis");
// DeepL 翻译
module.exports.deepl = async(queryStr) => {
  const targetLang = escape(queryStr).indexOf('%u') < 0 ? 'ZH' : 'EN'
  const data= {
    text: queryStr,
    source_lang: 'auto',
    target_lang: targetLang,
  }
 try {
  const res= await tsByDeepL(data)
  console.log(`\n${'🚀🚀🚀 翻译: '.green.bold}${res.data.data} \n`)
} catch (error) {
  // 处理异常
  console.error("Error during deepL translation:", error.message);
}
}
