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

  const my_github_link = "https://github.com/kimseonghyoek/";

  return (
    <Container>
      <div>
        <h1>Tech-Tech-Talk _ Dev 2023 ~ </h1>
        <a href={my_github_link}><p>- Develop & Design by Overloper</p></a>
      </div>
    </Container>
  );
}

export default Footer;
