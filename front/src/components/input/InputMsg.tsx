import React from 'react';
import styled from 'styled-components';
import palette from '../../palette';

const Container = styled.p`
  color: ${palette.main_color4};
  font-size: 1.1rem !important;
  margin: 0.2rem !important;
`;

function InputMsg({ msg }: { msg: string | undefined}): JSX.Element {
  return (
    <Container>
      {msg}
    </Container>
  )
};

export default React.memo(InputMsg);