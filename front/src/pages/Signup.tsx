import React from 'react';
import LoginForm from '../components/loginform/LoginForm';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
`;

function Signup(): JSX.Element {
  return (
    <Container>
      <LoginForm/>
    </Container>
  )
}

export default Signup;