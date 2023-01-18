import React from 'react';
import styled from 'styled-components';

type InputComponentsProps = { placeholder: string, onChange: any }

const StyledInput = styled.input`
  font-size: 14px;
`;

function Input(props: InputComponentsProps) {
  return (
    <>
      <StyledInput placeholder={props.placeholder}/>
    </>
  )
}

export default Input;