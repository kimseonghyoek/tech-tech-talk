import React from "react";
import styled from "styled-components";
import palette from "../../palette";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .introd-site {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;

    span {
      p {
        margin: 1rem 0rem;
        font-size: 2.5rem;
        color: ${palette.main_color4};
        font-weight: bold;
      }

      h1 {
        margin: 0.5rem 0rem;
        font-size: 3.5rem;
      }
    }
  }
`;

function DesktopPage(): JSX.Element {
  const public_url = process.env.PUBLIC_URL;
  return (
    <Container>
      <div className="introd-site">
        <span>
          <p>IT 기술과 장비가 궁금해?</p>
          <h1>Tech-Tech-Talk 으로 들어와!</h1>
        </span>
      </div>
    </Container>
  );
}

export default DesktopPage;
