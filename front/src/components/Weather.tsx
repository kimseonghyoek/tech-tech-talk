import { Divider } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import styled from 'styled-components';

const WrapContent = styled(Content)`
  display: flex;
  border: 1px solid black;
`;

const Weather = (): JSX.Element => {
  return (
    <WrapContent>
      <Divider orientation='left' orientationMargin={0}>날씨</Divider>
    </WrapContent>
  )
}

export default Weather;