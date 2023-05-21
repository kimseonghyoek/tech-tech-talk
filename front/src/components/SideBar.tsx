import React from 'react';
import {Button} from "antd";
import styled from "styled-components";
import palette from "../palette";
import {Link} from "react-router-dom";
import PostCard from "./PostCard";

const WrapSideBar = styled.div`

  .wrap-login {
    width: 100%;
    padding: 1rem;
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
`;

function SideBar(): JSX.Element {
    return (
        <WrapSideBar>
            <div className="wrap-login">
                <p>아무나, 누구나 tech-tech-Talk</p>
                <Link to={"/login"}>
                    <Button>텍텍톡 로그인</Button>
                </Link>
                <p style={{ textAlign: "right", fontSize: "1.1rem", margin: "1rem 0.5rem"}}>
                <span>
                    <Link to="/signup">회원가입</Link>
                </span>
                </p>
            </div>

        </WrapSideBar>
    )
}

export default SideBar;