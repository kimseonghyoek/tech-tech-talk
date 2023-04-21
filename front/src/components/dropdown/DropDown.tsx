import react, { useState } from "react";
import styled from "styled-components";

export type DropProps = {
  title: string | null;
};

const Container = styled.article`
  ul {
    list-style: none;
  }
`;

const DropDown = (props: DropProps) => {
  const [visibleItem, setVisible] = useState(false);

  const ChangeVisible = () => {
    setVisible(!visibleItem);
  };

  return (
    <Container>
      <button onClick={ChangeVisible}>{props.title}</button>
      {visibleItem ? (
        <ul>
          <li>test</li>
        </ul>
      ) : null}
    </Container>
  );
};

export default DropDown;
