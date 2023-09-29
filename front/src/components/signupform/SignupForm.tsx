import { Form, Layout } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Container = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

const SignupForm = () => {
  return (
    <Container>
      <Form onFinish={() => {}}>

      </Form>
    </Container>
  )
};

export default SignupForm;