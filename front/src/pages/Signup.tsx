import React from 'react';
import LoginForm from '../components/loginform/LoginForm';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

function Signup(): JSX.Element {
  return (
    <Container>
      <LoginForm/>
    </Container>
  )
}

export default Signup;