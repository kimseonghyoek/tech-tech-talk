const axios = require('axios');
const cheerio = require('cheerio');
const iconv = require('iconv-lite')

const headers = { 'Content-Type': 'text/html;charset=EUC-KR' }

const getDocument = () => {
  try {
    return axios.get("https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=105", {responseType: 'text/html;charset=EUC-KR    ', responseEncoding: 'binary' } );
  } catch (err) {
    return console.log(err);
  };
}

getDocument().then(html => {
  let newsList = [];
  const $ = cheerio.load(html.data);
  for (r=1; r <= 10; r++) {
    const $bodyList = $(`#main_content > div > div._persist > div.section_headline > ul > li:nth-child(${r}) > div.sh_text > a`);
    $bodyList.each(function(i, elem) {
      text = iconv.decode($(elem).text(), 'EUC-KR');
      newsList[r] = {
        title: text,
        link: $(elem).attr().href
      };
    });
  }
  const data = newsList.filter(n => n.title);
  return data;
}).then(res => {
  console.log(res);
})