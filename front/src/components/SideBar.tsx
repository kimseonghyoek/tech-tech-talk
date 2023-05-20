import React from 'react';
import {Button} from "antd";
import styled from "styled-components";
import palette from "../palette";

const WrapSideBar = styled.div`
  button {
    width: 100%;
    height: 4.5rem;
    background-color: ${palette.main_color3};
    color: ${palette.white};
  }
  
  button:hover {
    color: ${palette.white} !important;
  }
`;

function SideBar(): JSX.Element {
    return (
        <WrapSideBar>
            <>
                <p>아무나, 누구나 tech-tech-Talk</p>
                <Button>텍텍톡 로그인</Button>
                <p style={{ textAlign: "right", fontSize: "1.1rem", margin: "1rem 0.5rem"}}>
                <span>
                    <a>회원가입</a>
                </span>
                </p>
            </>
            <div>
                <Button>출석하기</Button>
            </div>
        </WrapSideBar>
    )
}

export default SideBar;