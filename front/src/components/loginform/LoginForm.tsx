/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import styled from "styled-components";
import palette from "../../palette";
import Input from "../Input";
import Button from "../Button";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { error } from "console";
import { Container } from "./style";

const public_url = process.env.PUBLIC_URL;

function LoginForm(): JSX.Element {
  const location = useLocation();

  const [userName, setName] = useState<string>("");
  const [userEmail, setEmail] = useState<string>("");
  const [userPw, setPw] = useState<string>("");
  const [rePw, setRepw] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);

  const checkSignd = (): any => {
    if (!check) {
      setCheck(true);
    }
    if (check) {
      setCheck(false);
    }
  };

  const changeName = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setName(e.target.value);
  };
  const checkName = () => {
    const name_regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    if (userName.match(name_regExp) || userName.length >= 21) {
      alert("닉네임 형식에 맞지 않습니다.");
    } else if (userName === "") {
      alert("닉네임이 공백입니다.");
    }
  }

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setEmail(e.target.value);
  };
  const checkEmail = () => {
    const email_regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if(userEmail.match(email_regExp) || userEmail.length >= 51) {
      alert("이메일 형식에 맞지 않습니다.");
    } else if (userEmail === "") {
      alert("이메일이 공백입니다.");
    }
  }

  const changePw = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setPw(e.target.value);
  };
  const checkPw = () => {
    const pw_regExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    if(!userPw.match(pw_regExp) || userPw.length >= 30) {
      alert("비밀번호 형식에 맞지 않습니다.");
    } else if (userPw === "") {
      alert("비밀번호가 공백입니다.");
    } else if (userPw !== rePw) {
      alert("비밀번호 재확인에 실패하셨습니다.");
    }
  }

  const changeRePw = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setRepw(e.target.value);
  };

  const submitSignup = (e: React.ChangeEvent<HTMLFormElement>): any => {
    e.preventDefault();
    checkName();
    checkEmail();
    checkPw()
  };

  const submitLogin = (e: React.ChangeEvent<HTMLFormElement>): any => {
    e.preventDefault();
  };

  if (location.pathname === "/login") {
    return (
      <Container>
        <div className="logo-layout">
          <img src={`${public_url}/imgs/Tech-Tech-Talk.png`} alt="logo" />
          <h1>Tech-Tech-Talk</h1>
        </div>
        <form>
          <div className="inputs">
            <p>이메일 (이메일 주소)</p>
            <Input placeholder="" onChange={""} />
          </div>
          <div className="inputs">
            <p>비밀번호 (특수문자 포함 8자 이상)</p>
            <Input placeholder="" onChange={""} />
          </div>
          <Button disabled={false} id="login-btn" text="로그인" />
        </form>
        <div className="login-info">
          <Link to="/signup">
            <p>회원가입</p>
          </Link>
        </div>
        <hr />
        <div className="social-login">
          <h2>소셜 로그인(Developing...)</h2>
          <ul className="social-btn">
            <li>
              <Button disabled={false} id="naver-btn" text="네이버 로그인" />
            </li>
            <li>
              <Button disabled={false} id="kakao-btn" text="카카오 로그인" />
            </li>
            <li>
              <Button disabled={false} id="google-btn" text="구글 로그인" />
            </li>
          </ul>
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <div className="logo-layout">
          <img src={`${public_url}/imgs/Tech-Tech-Talk.png`} alt="logo" />
          <h1>Tech-Tech-Talk</h1>
        </div>
        <form onSubmit={submitSignup}>
          <div className="inputs">
            <p>닉네임 (특수문자 제외 20자)</p>
            <Input placeholder="" onChange={changeName} />
          </div>
          <div className="inputs">
            <p>이메일 (이메일 주소)</p>
            <Input placeholder="" onChange={changeEmail} />
          </div>
          <div className="inputs">
            <p>비밀번호 (특수문자 포함 8자 이상)</p>
            <Input placeholder="" onChange={changePw} />
          </div>
          <div className="inputs">
            <p>비밀번호 재확인</p>
            <Input placeholder="" onChange={changeRePw} />
          </div>
          <div className="check-sign">
            <input type="checkbox" checked={check} onChange={checkSignd} />
            <p> Tech-Tech-Talk(이하 텍텍톡) 회원가입에 동의하십니까?</p>
          </div>
          <Button disabled={!check} id="login-btn" text="회원가입" />
        </form>
      </Container>
    );
  }
}

export default LoginForm;
