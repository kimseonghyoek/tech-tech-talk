import React from 'react';
import LoginForm from '../components/loginform/LoginForm';
import styled from 'styled-components';
import SignupForm from '../components/signupform/SignupForm';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    flex: 1;
    margin: auto;
    height: 100vh;
`;

function Signup(): JSX.Element {
  return (
    <Container>
      <SignupForm/>
    </Container>
  )
}

export default Signup;