import React, { useState } from "react";
import styled from "styled-components";
import palette from "../../palette";
import { Desktop, Tablet } from "../../responsive";
import { Link } from "react-router-dom";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import HeaderItem from "./HeaderItem";
import { showItem } from "../../recoil/store";

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
        color: ${palette.white};
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

  .tablet-main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* img {
      margin: 0rem 7rem;
    } */

    button {
      border-radius: 0.5rem;
      width: 100%;
      background-color: ${palette.main_color4};
      margin: 0%;
      font-size: 1.3rem;
      color: ${palette.white};
    }

    .side-box {
      margin: 2rem;
      width: 7.5rem;
    }
  }

  .header-items {
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: ${palette.white};

    ul {
      padding: 0%;
    }
  }
`;

function Header() {
  const public_url = process.env.PUBLIC_URL;

  // state
  const [show_item, setShow] = useRecoilState<boolean>(showItem);

  const changeShowItem = () => {
    setShow(!show_item);
    console.log(show_item);
  };

  return (
    <CustomHeader>
      <div className="top-item">
        <p>커뮤니티</p>
        <p>중고거래</p>
      </div>
      <div className="main">
        <Desktop>
          <>
            <Link to="/">
              <img src={`${public_url}/imgs/ttt.png`} alt="logo" />
              {/* <h1>Tech-Tech-Talk</h1> */}
            </Link>
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
              <Button disabled={false} id="header-login" text="로그인" />
            </Link>
          </>
        </Desktop>

        <Tablet>
          <>
            <div className="tablet-main">
              <div className="side-box">
                <FontAwesomeIcon
                  icon={faBars}
                  size="2x"
                  onClick={changeShowItem}
                />
              </div>
              <Link to="/">
                <img src={`${public_url}/imgs/ttt.png`} alt="logo" />
                {/* <h1>Tech-Tech-Talk</h1> */}
              </Link>
              <div className="side-box">
                <Link to="/login">
                  <Button disabled={false} id="m-header-login" text="로그인" />
                </Link>
              </div>
            </div>
          </>
        </Tablet>
      </div>
      {show_item ? (
        <div className="header-items">
          <ul>
            <HeaderItem url="#" item="소프트웨어"/>
            <HeaderItem url="#" item="키보드"/>
            <HeaderItem url="#" item="마우스"/>
            <HeaderItem url="#" item="PC 부품"/>
            <HeaderItem url="#" item="그 외 제품"/>
          </ul>
        </div>
      ) : null}
    </CustomHeader>
  );
}

export default Header;
