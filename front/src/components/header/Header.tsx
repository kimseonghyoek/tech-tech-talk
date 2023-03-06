import React, { useState } from "react";
import { Desktop, Tablet } from "../../util/responsive";
import { Link } from "react-router-dom";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import HeaderItem from "./HeaderItem";
import { checkLogin, showItem } from "../../recoil/store";
import PreUser from "../user/PreUser";
import CustomHeader from "./style";

function Header() {
  const public_url = process.env.PUBLIC_URL;

  // state
  const [show_item, setShow] = useRecoilState<boolean>(showItem);
  const [check_login] = useRecoilState<boolean>(checkLogin);

  const changeShowItem = () => {
    setShow(!show_item);
    console.log(show_item);
  };

  return (
    <CustomHeader>
      <div className="top-item">
        <Link to="/comm">
          <p>커뮤니티</p>
        </Link>
        <Link to="/used">
          <p>중고거래</p>
        </Link>
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
            {/* User info 페이지 개발 완료시 url 교체 */}
            <Link to="/login">
              {check_login ? (
                <Button disabled={false} id="header-logout" text="로그아웃" />
              ) : (
                <Button disabled={false} id="header-login" text="로그인" />
              )}
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
                {check_login ? (
                  <Button disabled={false} id="header-logout" text="로그아웃" />
                ) : (
                  <Link to="/login">
                    <Button
                      disabled={false}
                      id="m-header-login"
                      text="로그인"
                    />
                  </Link>
                )}
              </div>
            </div>
          </>
        </Tablet>
      </div>
      {show_item ? (
        <div className="header-items">
          <ul>
            <HeaderItem url="#" item="소프트웨어" />
            <HeaderItem url="#" item="키보드" />
            <HeaderItem url="#" item="마우스" />
            <HeaderItem url="#" item="PC 부품" />
            <HeaderItem url="#" item="그 외 제품" />
          </ul>
        </div>
      ) : null}
    </CustomHeader>
  );
}

Header.defaultProps = {
  login: false,
};

export default Header;
