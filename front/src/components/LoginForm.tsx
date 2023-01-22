import React from "react";
import styled from "styled-components";
import palette from "../palette";
import Input from "./Input";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  flex-direction: column;

  .logo-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3.5rem;

    img {
      border-radius: 25%;
      width: 66px;
      height: 71px;
    }

    h1 {
      padding-left: 20px;
      font-size: 2.8rem;
    }
  }

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .inputs {
      margin: 20px;
      p {
        font-size: 1.4rem;
        margin: 1rem 0rem;
      }

      input {
        width: 38rem;
        height: 4.2rem;
      }
    }

    #login-btn {
      margin-top: 2rem;
      width: 38.5rem;
      height: 6rem;
      background-color: ${palette.main_color3};
      color: ${palette.white};
    }
  }

  .login-info {
    width: 87%;
    display: flex;
    justify-content: flex-end;
    margin: 0rem 4rem;
    text-align: right;
    a {
      text-decoration: none;
      p {
        font-weight: lighter;
        color: ${palette.black};
        margin: 0;
        font-size: 13px;
      }
    }
  }

  hr {
    margin: 3rem;
    width: 34.5rem;
  }

  .social-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      margin-top: 0;
    }

    .social-btn {
      padding: 0;
      li {
        list-style: none;
      }

      button {
        width: 38.5rem;
        height: 4.5rem;
      }
      #naver-btn {
        background-color: ${palette.naver_color};
        color: ${palette.white};
      }
      #kakao-btn {
        background-color: ${palette.kakao_color};
        color: ${palette.black};
      }
      #google-btn {
        background-color: ${palette.main_color1};
        color: ${palette.black};
      }
    }
  }
`;

const public_url = process.env.PUBLIC_URL;

function LoginForm() {

  return (
    <Container>
      <div className="logo-layout">
        <img src={`${public_url}/imgs/Tech-Tech-Talk.png`} alt="logo" />
        <h1>Tech-Tech-Talk</h1>
      </div>
      <form>
        <div className="inputs">
          <p>아이디 (영문과 숫자)</p>
          <Input placeholder="" onChange={""} />
        </div>
        <div className="inputs">
          <p>비밀번호 (특수문자 포함 8자 이상)</p>
          <Input placeholder="" onChange={""} />
        </div>
        <Button id="login-btn" text="로그인" />
      </form>
      <div className="login-info">
        <a href="#">
          <p>회원가입</p>
        </a>
      </div>
      <hr />
      <div className="social-login">
        <h2>소셜 로그인(Developing...)</h2>
        <ul className="social-btn">
          <li>
            <Button id="naver-btn" text="네이버 로그인" />
          </li>
          <li>
            <Button id="kakao-btn" text="카카오 로그인" />
          </li>
          <li>
            <Button id="google-btn" text="구글 로그인" />
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default LoginForm;
