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

type ButtonProps = { text: string, id: string, disabled: boolean, onPress: any };

function Button(props: ButtonProps): JSX.Element {
  return (
    <>
      <StyeldButton disabled={props.disabled} onClick={() => props.onPress} id={props.id}>
        {props.text}
      </StyeldButton>
    </>
  );
}

Button.defaultProps = {
  disabled: false,
  id: null,
  onPress: {},
};

export default Button;
