import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
`;

function User(): JSX.Element {
  return (
    <Container>
      <p>User Page</p>
    </Container>
  )
}

export default User;