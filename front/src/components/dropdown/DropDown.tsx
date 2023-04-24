import react, { useState } from "react";
import styled from "styled-components";
import palette from "../../palette";

export type DropProps = {
  title: string | null;
};

const Container = styled.article`
  background-color: ${palette.main_color3};
  width: fit-content;
  padding: 0rem 2.2rem;
  border-radius: 5px;

  h3 {
    color: ${palette.white};
  }

  ul {
    z-index: 1;
    padding: 0%;
    list-style: none;
  }

  li {
    padding: 0%;
  }
`;

const DropDown = (props: DropProps) => {
  const [visibleItem, setVisible] = useState(false);

  const ChangeVisible = () => {
    setVisible(!visibleItem);
  };

  return (
    <Container onMouseEnter={ChangeVisible} onMouseLeave={ChangeVisible}>
      <h3> {props.title}</h3>
      {
        visibleItem ? (<p>asdfasdf</p>) : (null)
      }
    </Container>
  );
};

export default DropDown;
