import React, { useState } from "react";
import styled from "styled-components";
import palette from "../palette";
import Input from "./Input";
import Button from "./Button";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

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

  .check-sign {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    input {
      width: 1.7rem;
      height: 1.7rem;
    }

    p {
      padding: 0rem 0.9rem;
      font-size: 1.3rem;
    }
  }
`;

const public_url = process.env.PUBLIC_URL;

function LoginForm(): JSX.Element {
  const location = useLocation();

  const [userName, setName] = useState<string>('');
  const [userEmail, setEmail] = useState<string>('');
  const [userPw, setPw] = useState<string>('');
  const [rePw, setRepw] = useState<string>('');
  const [check, setCheck] = useState<boolean>(false);

  const checkSignd = (): any => {
    if(!check) {
      setCheck(true);
    }
    if(check) {
      setCheck(false);
    }
  }

  const changeName = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setName(e.target.value);
  }

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setEmail(e.target.value);
  }

  const changePw = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setPw(e.target.value);
  }

  const changeRePw = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setRepw(e.target.value);
  }

  // submit
  const submit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (userName === "") {
      alert("닉네임이 빈 칸 입니다.");
    };
    if (userEmail === "") {
      alert("이메일이 빈 칸 입니다.");
    }
    if (userPw === "") {
      alert("비밀번호가 빈 칸 입니다.");
    }
    if (userPw !== rePw) {
      alert("비밀번호가 서로 다릅니다.");
    }
  }

  if (location.pathname === "/login") {
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
        <form onSubmit={submit}>
          <div className="inputs">
            <p>닉네임 (특수문자 제외 20자)</p>
            <Input placeholder="" onChange={changeName} />
          </div>
          <div className="inputs">
            <p>아이디 (영문과 숫자)</p>
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
            <input type="checkbox" checked={check} onChange={checkSignd}/>
            <p> Tech-Tech-Talk(이하 텍텍톡) 회원가입에 동의하십니까?</p>
          </div>
          <Button disabled={!check} id="login-btn" text="회원가입" />
        </form>
      </Container>
    );
  }
}

export default LoginForm;
