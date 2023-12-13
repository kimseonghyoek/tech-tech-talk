import { Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import palette from "../../palette";
import { Button, Menu, MenuProps } from "antd";
import { HeaderData } from "./HeaderItem";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Desktop, Tablet } from "../../util/responsive";
import { MenuFoldOutlined } from "@ant-design/icons";

const item: MenuProps["items"] = HeaderData.map((element, key) => ({
  key,
  label: (
    <>
      <Link to={element.link}>{element.name}</Link>
    </>
  ),
}));

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  padding: 0rem 3.5rem;
  background-color: ${palette.main_color2};
  justify-content: space-between;
  top: 0;
  position: sticky;
  z-index: 5;
  height: fit-content;

  img {
    width: 9rem;
  }

  ul {
    background-color: ${palette.main_color2};

    li {
      span {
        color: ${palette.black};
      }
    }
  }

  .menu-items {
    display: flex;
    align-items: center;

    button {
      width: 10rem;
      height: 4.5rem;
      margin: 0rem 1rem;
    }
  }


  #m-menu-bar {
    font-size: 4.5rem;
  }
`;

function HeaderNav(): JSX.Element {
  const navi = useNavigate();

  const naviToComm = () => {
    navi("/comm");
  };

  return (
    <StyledHeader>
      <img src={"/imgs/ttt.png"} alt="logo" onClick={naviToComm} />
      <div className="menu-items">
        <Desktop>
        <Menu mode="horizontal" items={item} />
        </Desktop>
        <Tablet>
          <MenuFoldOutlined onClick={(): any => {
            return console.log("test")
          }} rev id="m-menu-bar"/>
        </Tablet>
      </div>
    </StyledHeader>
  );
}

export default HeaderNav;
