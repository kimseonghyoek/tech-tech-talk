import { Content } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../palette";
import axios, { AxiosResponse } from "axios";
import { Common } from "../util/Common";

const WrapContent = styled(Content)`
  display: flex;
  flex-direction: column;
  border: 0.07rem solid ${palette.main_color3};
  border-radius: 5px;

  #main-content {
    display: flex;
    flex-direction: row;
    padding: 2rem;

    h2 {
      font-size: 3rem;
    }

    #temp-info {
      flex: 1;
      text-align: center;
      justify-content: center;
    }

    #wea-icon {
      flex: 1;
      display: flex;
      justify-content: center;
    }
  }
`;

const Weather = (): JSX.Element => {
  interface weatherType {
    city_name: string;
    temp: number;
    icon: string;
  };

  const [weather, setWeather] = useState<weatherType>({
    city_name: "",
    temp: 0,
    icon: "",
  });
  const [day, setDay] = useState<string>("");

  const getWeatherAPI = () => {
    axios.get("/comm/weather/get").then((response: AxiosResponse) => {
      const result = response.data;
      console.log(result);
      setWeather({
        city_name: result.name,
        temp: result.main.temp,
        icon: result.weather[0].icon
      });
    });
  };

  console.log(weather.icon);

  useEffect(() => {
    getWeatherAPI();
  }, []);

  return (
    <WrapContent>
      <div id="main-content">
        <div id="temp-info">
        <p>{Common.checkWeather.checkLocation(weather.city_name)}</p>
        <h2>{Common.checkWeather.transKelvin(weather.temp)}°C</h2>
        </div> 
        <div id="wea-icon">
          <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" />
        </div>
      </div>
    </WrapContent>
  );
};

export default Weather;
