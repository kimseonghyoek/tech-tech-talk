<<<<<<< HEAD
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";
=======
import React, { MouseEventHandler } from "react";
>>>>>>> f74709585be53bd66799742fa0907e7cc9e46f4a
import styled from "styled-components";

const StyeldButton = styled.button`
  width: 5.5rem;
  height: 4vh;
  font-size: 18px;
  font-weight: bold;
  border: none;
  margin: 1rem;
`;

interface btnProps {
  text: string;
  id: string;
  disabled: boolean;
  onClick: () => MouseEventHandler<HTMLButtonElement>;
}

<<<<<<< HEAD
function Button(props: ButtonProps): JSX.Element {
  const checkClick = () => {
    props.onClicks;
    console.log(props.onClicks);
  };
=======
function Button(props: btnProps): JSX.Element {

  const clicks = () => {
    props.onClick();
  }
>>>>>>> f74709585be53bd66799742fa0907e7cc9e46f4a

  return (
    <>
      <StyeldButton
        disabled={props.disabled}
        onClick={clicks}
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
  onClick: {},
};

export default Button;
