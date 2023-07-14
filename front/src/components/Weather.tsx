import { Divider } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import styled from 'styled-components';
import palette from '../palette';

const WrapContent = styled(Content)`
  display: flex;
  border: 0.07rem solid ${palette.main_color3};
  border-radius: 5px;
`;

const Weather = (): JSX.Element => {
  return (
    <WrapContent>
      <Divider orientation='left'>날씨</Divider>
    </WrapContent>
  )
}

export default Weather;