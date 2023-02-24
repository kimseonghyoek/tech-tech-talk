import React from "react";
import styled from "styled-components";
import palette from "../../palette";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;

  .introd-site {
    padding: 5rem;
    display: flex;
    justify-content: center;
    width: 55%;
    height: 100%;

    .wrap-introd {
      width: fit-content;
      height: fit-content;
      display: flex;
      align-items: center;

      img {
        border-radius: 5%;
        width: 25rem;
        height: 25rem;
      }

      span {
        display: inline-block;
        margin: 3rem;
        h3 {
          margin: 1rem 1.5rem;
          font-size: 2.5rem;
          color: ${palette.main_color4};
          font-weight: bold;
        }

        h1 {
          margin: 0.5rem 1.5rem;
          font-size: 3.5rem;
        }

        p {
          color: ${palette.gray};
          font-size: 1.5rem;
          margin: 1.5rem;
        }

        .buttons {
          width: 100%;
          button {
            font-size: 1.5rem;
            color: ${palette.white};
            background-color: ${palette.main_color3};
            width: 18rem;
            height: 4.5rem;
            border-radius: 0.5rem;
          }
        }
      }
    }
  }
`;

function DesktopPage(): JSX.Element {
  const public_url = process.env.PUBLIC_URL;
  return (
    <Container>
      <div className="introd-site">
        <div className="wrap-introd">
          <img src={`${public_url}/imgs/tech-tech-talk.png`} alt="logo" />
          <span>
            <h3>IT 기술과 장비가 궁금해?</h3>
            <h1>Tech-Tech-Talk 으로 들어와!</h1>
            <p>
              컴퓨터, 노트북, 키보드, 마우스 등등 하드웨어와 <br />
              프로그래밍, 소프트웨어 관련 글을 올릴 수 있는 커뮤니티 시스템{" "}
              <br />
              본인이 사용했던 IT기기가 팔고 <br /> 가격이 부담스러워 중고를
              원하는 분은 중고거래로.
            </p>
            <div className="buttons">
              <Link to="/comm">
                <Button text="커뮤니티" />
              </Link>
              <Link to="/used">
                <Button text="중고거래" />
              </Link>
            </div>
          </span>
        </div>
      </div>
    </Container>
  );
}

export default DesktopPage;
