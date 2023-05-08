import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/loginform/LoginForm';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 1;
    /* height: 100vh; */
`;

function Login() {
  return (
    <Container>
      <LoginForm/>
    </Container>
  )
}

export default Login;