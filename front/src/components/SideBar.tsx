import React, { useEffect, useState } from "react";
import { Button } from "antd";
import axios from "axios";
import styled from "styled-components";
import palette from "../palette";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import User from "../pages/user/User";
import NewsCard from "./postcards/NewsCard";

const WrapSideBar = styled.div`
  .wrap-login {
    border: 0.07px solid ${palette.main_color3};
    border-radius: 5px;
    width: 100%;
    padding: 1.3rem 1rem;
  }

  button {
    width: 100%;
    height: 4.5rem;
    background-color: ${palette.main_color3};
    color: ${palette.white};
  }

  button:hover {
    color: ${palette.white} !important;
  }

  p {
    text-align: center;
  }

  a {
    font-size: 1rem;
  }
`;

function SideBar(): JSX.Element {
  const [news, updateNews] = useState();

  useEffect(()=> {
    axios
    .get("/comm/news/get")
    .then((res) => {
      setTimeout(() => {
        updateNews(res.data);
      }, 300);
    })
    .catch((err: Error) => {
      console.log(err);
    });
  }, []);

  console.log(news)

  return (
    <WrapSideBar>
      {true ? (
        <User />
      ) : (
        <div className="wrap-login">
          <p>아무나, 누구나 tech-tech-Talk</p>
          <Link to={"/login"}>
            <Button>텍텍톡 로그인</Button>
          </Link>
          <p
            style={{
              textAlign: "right",
              fontSize: "1.1rem",
              margin: "1rem 0.5rem",
            }}
          >
            <span>
              <Link to="/signup">회원가입</Link>
            </span>
          </p>
        </div>
      )}
      <NewsCard datas={news}/>
    </WrapSideBar>
  );
}

export default SideBar;
