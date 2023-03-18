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

type ButtonProps = {
  text: string;
  id: string;
  disabled: boolean;
  onClicks: () => void;
};

function Button(props: ButtonProps): JSX.Element {
  const checkClick = () => {
    props.onClicks();
    console.log(props.onClicks);
  };

  return (
    <>
      <StyeldButton
        disabled={props.disabled}
        onClick={checkClick}
        id={props.id}
      > 
        {props.text}
      </StyeldButton>
    </>
  );
}

Button.defaultProps = {
  disabled: false,
  id: null,
  onClicks: {},
};

export default Button;
