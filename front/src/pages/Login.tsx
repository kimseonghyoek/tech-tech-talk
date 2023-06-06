import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/loginform/LoginForm';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    flex: 1;
    margin: auto;
    height: 100vh;
`;

function Login() {
  return (
    <Container>
      <LoginForm/>
    </Container>
  )
}

export default Login;