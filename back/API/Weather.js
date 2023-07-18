const axios = require("axios");
require('dotenv').config();

module.exports.getWeatherAPI = () => {
  const WEATHER_API = process.env.WEATHER;
  try {
    return axios.get(WEATHER_API).then((res) => {
      return res.data;
    })
  } catch(err) {
    console.log(err);
    throw err;
  }
};