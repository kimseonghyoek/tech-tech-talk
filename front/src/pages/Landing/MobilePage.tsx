import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import palette from "../../palette";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;

  .introd-site {
    .wrap-introd {
      display: flex;
      flex-direction: column;
      justify-content:center;
      width: fit-content;
      height: fit-content;
      align-items: center;

      img {
        padding: 3rem;
        width: 45rem;
      }

      span {
        display: inline-block;
        margin: 3rem;

        h3 {
          font-size: 2.5rem;
          margin: 1rem 1.5rem;
          color: ${palette.main_color4};
        }

        h1 {
          margin: 0.5rem 1.5rem;
          font-size: 3rem;
        }
      }

      .buttons {
        display: flex;
        width: 100%;
        flex-direction: row;

        button {
          border-radius: 0.5rem;
          color: ${palette.white};
          background-color: ${palette.main_color3};
          font-size: 1.5rem;
          width: 100%;
          height: 5rem;
        }
      }
    }
  }
`;

function MobilePage(): JSX.Element {
  const public_url = process.env.PUBLIC_URL;
  return (
    <Container>
      <div className="introd-site">
        <div className="wrap-introd">
          <span>
            <h3>
              IT 기술과 <br /> 장비가 궁금해?
            </h3>
            <h1>Tech-Tech-Talk 으로 들어와!</h1>
          </span>
          <img src={`${public_url}/imgs/tech-tech-talk.png`} alt="logo" />
          <div className="buttons">
            <Button text="커뮤니티" />
            <Button text="중고거래" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default MobilePage;
