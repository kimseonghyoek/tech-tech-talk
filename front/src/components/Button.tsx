/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";
import styled from "styled-components";

const StyeldButton = styled.button`
  width: 5.5rem;
  height: 4vh;
  font-size: 18px;
  font-weight: bold;
  border: none;
  margin: 1rem;
`;

export type C_ButtonProps = {
  text: string;
  id: string;
  disabled: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
};

function Button({ text, onClick, disabled, id}: C_ButtonProps): JSX.Element {
  
  return (
    <>
      <StyeldButton
        disabled={disabled}
        onClick={onClick}
        id={id}
      > 
        {text}
      </StyeldButton>
    </>
  );
}

Button.defaultProps = {
  disabled: false,
  id: null,
  onClick: () => null
};

export default Button;
