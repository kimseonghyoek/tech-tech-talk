import { Divider } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../palette';
import axios, { AxiosResponse } from 'axios';

const WrapContent = styled(Content)`
  display: flex;
  border: 0.07rem solid ${palette.main_color3};
  border-radius: 5px;
`;

const Weather = (): JSX.Element => {

  const WEATHER_API: string | undefined = process.env.REACT_APP_WEATHER;

  const [weather, setWeather] = useState({});

    // axios.get(WEATHER_API).then((response: AxiosResponse) => {
    //   console.log(response.data)
    //   setWeather(response.data);
    //   console.log(`---${weather}---`)
    // })

  return (
    <WrapContent>
      <Divider orientation='left'>날씨</Divider>
    </WrapContent>
  )
}

export default Weather;