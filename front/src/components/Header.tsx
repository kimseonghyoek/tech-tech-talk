import React from "react";
import styled from "styled-components";
import palette from "../palette";
import { Desktop, Mobile, Tablet } from "../responsive";
import { Link } from "react-router-dom";
import Button from "./Button";

const CustomHeader = styled.div`
  padding-top: 1rem;
  position: sticky;
  top: -1rem;
  display: flex;
  width: 100%;
  height: 10.5rem;
  flex-direction: column;
  background-color: ${palette.white};
  .top-item {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 100%;
    height: 35%;
    background-color: ${palette.white};
    border-bottom: 0.1rem solid ${palette.main_color2};
    p {
      font-size: 1.2rem;
      padding: 0rem 2rem;
    }
  }

  .main {
    display: flex;
    width: 100%;
    height: 65%;
    align-items: center;
    justify-content: center;
    border-bottom: 0.1rem solid ${palette.main_color2};

    a {
      display: center;
      justify-center: center;
      align-items: center;
      color: ${palette.black};
      text-decoration: none;

      img {
        width: 9rem;
      }

      #header-login {
        background-color: ${palette.main_color4};
        border-radius: 0.5rem;
        font-size: 1.3rem;
        width: 7rem;
        color: ${palette.white}
      }
    }

    ul {
      display: flex;
      flex-direction: row;

      li {
        list-style: none;
        padding: 0rem 3.5rem;

        p {
          font-size: 1.3rem;
        }
      }
    }
  }
`;

function Header() {
  return (
    <CustomHeader>
      <div className="top-item">
        <p>커뮤니티</p>
        <p>중고거래</p>
      </div>
      <div className="main">
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/imgs/ttt.png`}/>
          {/* <h1>Tech-Tech-Talk</h1> */}
        </Link>
        <Desktop>
          <>
            <ul>
              <li>
                <p>소프트웨어</p>
              </li>
              <li>
                <p>키보드</p>
              </li>
              <li>
                <p>마우스</p>
              </li>
              <li>
                <p>PC 부품</p>
              </li>
              <li>
                <p>그 외 제품</p>
              </li>
            </ul>

            <Link to="/login">
              <Button disabled={false} id="header-login" text="로그인"/>
            </Link>
          </>
        </Desktop>
      </div>
    </CustomHeader>
  );
}

export default Header;
