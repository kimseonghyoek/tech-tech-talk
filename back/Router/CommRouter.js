const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");
const { getWeatherAPI } = require("../API/Weather");

router.get("/news/get", async (req, res) => {
  const getDocument = () => {
    try {
      return axios.get(
        "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=105",
        {
          responseType: "text/html;charset=EUC-KR",
          responseEncoding: "binary",
        }
      );
    } catch (err) {
      return console.log(err);
    }
  };

  let data = await getDocument()
    .then((html) => {
      let newsList = [];
      const $ = cheerio.load(html.data);
      for (r = 1; r <= 13; r++) {
        const $bodyList = $(
          `#main_content > div > div._persist > div.section_headline > ul > li:nth-child(${r}) > div.sh_text > a`
        );
        $bodyList.each(function (i, elem) {
          text = iconv.decode($(elem).text(), "EUC-KR");
          newsList[r] = {
            title: text,
            link: $(elem).attr().href,
          };  
        });
      }
      const data = newsList.filter((n) => n.title);
      return data;
    }).catch((err) => {
      console.log(err);
    });

    res.send(data);
});

router.get("/weather/get", async (req, res) => {
  const data = await getWeatherAPI();
  console.log(data);
  res.send(data);
  res.end();
});

module.exports = router;
