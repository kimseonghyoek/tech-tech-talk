import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`

function MobilePage(): JSX.Element {
  return (
    <Container>
      <p>Mobile landing page</p>
    </Container>
  );
};

export default MobilePage;