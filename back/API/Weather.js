const axios = require("axios");
require('dotenv').config();

module.exports.getWeatherAPI = async () => {
  const WEATHER_API = process.env.WEATHER;
  console.log("weather")
  try {
    await axios.get(WEATHER_API).then((res) => {
      console.log(res.data);
      return res.data;
    })
  } catch(err) {
    console.log(err);
    throw err;
  }
};