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

function Button({ text, id, disabled }: { text: string, id: string, disabled: boolean }): JSX.Element {
  return (
    <>
      <StyeldButton disabled={disabled} id={id}>{text}</StyeldButton>
    </>
  );
}

Button.defaultProps = {
  disabled: false,
  id: null
}

export default Button;
