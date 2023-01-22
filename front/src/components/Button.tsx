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

function Button({ text, id }: { text: string, id: string }): JSX.Element {
  return (
    <>
      <StyeldButton id={id}>{text}</StyeldButton>
    </>
  );
}
export default Button;
