import { Content } from 'antd/es/layout/layout';
import React from 'react';
import styled from 'styled-components';
import palette from '../palette';
import User from './user/User';

const Container = styled(Content)`
  border: 0.07rem solid ${palette.main_color3};
`;

function UserInfo(): JSX.Element {
  return (
    <Container>
      <User/>
    </Container>
  )
};

export default UserInfo;