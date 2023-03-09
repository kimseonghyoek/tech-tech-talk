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

function Button({ text, id, disabled, onClick }: { text: string, id: string, disabled: boolean, onClick: any }): JSX.Element {
  return (
    <>
      <StyeldButton disabled={disabled} onClick={onClick} id={id}>{text}</StyeldButton>
    </>
  );
}

Button.defaultProps = {
  disabled: false,
  id: null,
  onClick: {}
}

export default Button;
