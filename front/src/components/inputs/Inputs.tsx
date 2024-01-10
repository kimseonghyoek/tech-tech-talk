import React, { ReactNode } from 'react';
import { Container } from './style';

type inputsPropsType = {
  children: ReactNode
}

function Inputs({children}: inputsPropsType): JSX.Element {
  return (
    <Container>
      {children}
    </Container>  
  );
};

export default Inputs; 