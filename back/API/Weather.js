const express = require("express");
const router = express.Router();
const axios = require("axios");
require('dotenv').config();

const WEATHER_API = process.env.WEATHER;

router.get("/weather/get", async() => {
  try {
    await axios.get(WEATHER_API).then((res) => {
      console.log(res.data);
      return res.data;
    })
  } catch(err) {
    console.log(err);
    throw err;
  }
});

module.exports = router;