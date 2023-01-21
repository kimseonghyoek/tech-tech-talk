import React from 'react';
import styled from 'styled-components';
import palette from '../palette';

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${palette.white};
  width: 35%;
  height: 70%;
  border-radius: 15px;
`;

function LoginForm() {
  return (
    <Container>
      <h1>Login</h1>
    </Container>
  )
}

export default LoginForm;