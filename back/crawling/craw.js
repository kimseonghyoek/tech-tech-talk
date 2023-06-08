const axios = require('axios');
const cheerio = require('cheerio');
const { decode } = require('punycode');
const iconv = require('iconv-lite')

const headers = {
  'Content-type': 'text/html;charset=EUC-KR',
  'Accept': '*/*'
}

const getDocument = () => {
  try {
    return axios.get("https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=105", { headers });
  } catch (err) {
    return console.log(err);
  };
}

getDocument().then(html => {
  let newsList = [];
  const $ = cheerio.load(html.data);
  const $bodyList = $("#main_content > div > div._persist > div.section_headline > ul > li:nth-child(1) > div.sh_text > a");
  $bodyList.each(function(i, elem) {
    newsList[i] = {
      title: iconv.decode($(elem).text(), 'EUC-KR'),
      link: $(elem).attr().href
    };
  });
  const data = newsList.filter(n => n.title);
  return data;
}).then(res => {
  console.log(res);
})