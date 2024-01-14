import React, { ReactNode } from 'react';
import { Container } from './style';

type inputsPropsType = {
  children: ReactNode,
  label: string
}

function Inputs({children, label}: inputsPropsType) {
  return (
    <Container label={label}>
      {children}
    </Container>  
  );
};

export default Inputs; 