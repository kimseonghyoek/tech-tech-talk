import React, { MouseEventHandler } from "react";
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

function Button(props: btnProps): JSX.Element {

  const clicks = () => {
    props.onClick();
  }

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
