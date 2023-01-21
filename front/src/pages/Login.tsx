import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';

const public_url = process.env.PUBLIC_URL;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url(${public_url}/imgs/login_background.jpg);
    background-size: cover; 
`;

function Login() {
  return (
    <Container>
      <LoginForm/>
    </Container>
  )
}

export default Login;