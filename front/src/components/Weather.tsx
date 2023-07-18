import { Divider } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../palette';
import axios, { AxiosResponse } from 'axios';

const WrapContent = styled(Content)`
  display: flex;
  flex-direction: column;
  border: 0.07rem solid ${palette.main_color3};
  border-radius: 5px;

  #main-content {
    padding: 1.2rem;
  }
`;

const Weather = (): JSX.Element => {
  const [weather, setWeather] = useState(Object);

  const getWeatherAPI = () => {
    axios.get("/comm/weather/get").then((response: AxiosResponse) => {
      setWeather(response.data);
      console.log(`---${weather}---`)
    });
  }

  useEffect(() => {
    getWeatherAPI();
  }, []);

  return (
    <WrapContent>
      <Divider orientation='left'>날씨</Divider>
      <div id='main-content'>
        {
          weather.name
        }
      </div>
    </WrapContent>
  )
}

export default Weather;