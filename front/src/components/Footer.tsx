import React from "react";
import styled from "styled-components";
import palette from "../palette";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14rem;
  background-color: ${palette.main_color2};

  h1 {
    text-align: center;
  }

  p {
    text-align: right;
  }
`;

function Footer(): JSX.Element {
  return (
    <Container>
      <div>
        <h1>Tech-Tech-Talk _ Dev 2023 ~ </h1>
        <p>Develop by Overloper</p>
      </div>
    </Container>
  );
}

export default Footer;
