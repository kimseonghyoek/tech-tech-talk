import React from "react";
import styled from "styled-components";
import palette from "../../palette";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-family: "Jua", sans-serif;

  .first-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${palette.pro_back};
    width: 100%;
    height: 95vh;

    span {
      h2 {
        margin: 1rem;
        text-align: center;
        font-size: 4.5rem;
        color: ${palette.white};
        font-weight: lighter;
      }
      h1 {
        margin: 1rem;
        text-align: center;
        font-size: 5.5rem;
        color: ${palette.white};
        font-weight: lighter;
      }
    }

    img {
      margin: 5rem;
    }
  }

  .second-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${palette.pro_back2};
    width: 100%;
    height: 95vh;
  }
`;

function DesktopPage(): JSX.Element {
  const public_url = process.env.PUBLIC_URL;
  return (
    <Container>
      <div className="first-page">
        <span>
          <h2>IT 기술이나 전자장비가 궁금해?</h2>
          <h1>여기에 모든게 다 IT다!</h1>
        </span>
        <img src={`${public_url}/imgs/ttt.png`} alt="" />
      </div>
      <div className="second-page">
        <h1>Test</h1>
      </div>
    </Container>
  );
}

export default DesktopPage;
