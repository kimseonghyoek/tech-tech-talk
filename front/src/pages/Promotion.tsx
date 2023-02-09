import React from "react";
import styled from "styled-components";
import palette from "../palette";

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

      #main {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        img {
          border-radius: 2rem;
          width: 10rem;
          height: 10rem;
        }
        
        h1 {
          margin: 2rem;
          font-size: 7rem;
          color: ${palette.main_color4};
        }
      }
    }
  }
`;

function Promotion(): JSX.Element {
  const public_url = process.env.PUBLIC_URL;
  return (
    <Container>
      <div className="first-page">
        <span>
          <h2>IT 기술이나 전자장비가 궁금해?</h2>
          <h1>여기에 모든게 다 IT다!</h1>
          <div id="main">
            <img src={`${public_url}/imgs/Tech-Tech-Talk.png`} alt="" />
            <h1>Tech-Tech-Talk</h1>
          </div>
        </span>
      </div>
    </Container>
  );
}

export default Promotion;
