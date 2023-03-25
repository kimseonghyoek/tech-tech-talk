/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import Input from "../input/Input";
import Button from "../Button";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Container } from "./style";
import err_msg from "../../err_msg/error_msg";
import InputMsg from "../input/InputMsg";
import axios from "axios";
import { useRecoilState } from "recoil";
import { checkLogin } from "../../recoil/store";
import { ValidateCommon } from "../../util/common/Validate";

const public_url = process.env.PUBLIC_URL;

function LoginForm(): JSX.Element {
  const location = useLocation();
  const movePage = useNavigate();

  let post = true;

  const [userName, setName] = useState<string>("");
  const [userNumber, setNumber] = useState<string>("");
  const [userNickName, setNickName] = useState<string>("");
  const [userEmail, setEmail] = useState<string>(" ");
  const [userPw, setPw] = useState<string>(" ");
  const [rePw, setRepw] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);

  const [check_login, setLogin] = useRecoilState<boolean>(checkLogin);

  const changeLoginState = () => {
    setLogin(!check_login);
  }

  const checkSignd = (): any => {
    if (!check) {
      setCheck(true);
    }
    if (check) {
      setCheck(false);
    }
  };

  const changeNickName = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setNickName(e.target.value);
  };
  const checkNickName = (): string => {
    const name_regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    if (userNickName.match(name_regExp) || userNickName.length >= 51) {
      post = false;
      return err_msg.WRONG_NAME_FORMAT;
    } else if (userNickName === "") {
      return err_msg.EMPTY_NAME_SPACE;
    }
    return "";
  };

  const changeNumber = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setNumber(e.target.value);
  };
  const checkNumber = (): string => {
    const number_regExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (!userNumber.match(number_regExp) || userNumber.length >= 12) {
      post = false;
      return err_msg.WRONG_NUMBER_FORMAT;
    } else if (userNumber === "") {
      return err_msg.EMPTY_NUMBER_SPACE;
    }
    return "";
  };

  const changeName = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setName(e.target.value);
  };
  const checkName = (): string => {
    const name_regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    if (userName.match(name_regExp) || userName.length >= 21) {
      post = false;
      return err_msg.WRONG_NICK_FORMAT;
    } else if (userName === "") {
      post = false;
      return err_msg.EMPTY_NICK_SPACE;
    }
    return "";
  };

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setEmail(e.target.value);
  };
  const checkEmail = (): string => {
    const email_regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!userEmail.match(email_regExp) || userEmail.length >= 51) {
      post = false;
      return err_msg.WRONG_EMAIL_FORMAT;
    } else if (userEmail === "") {
      post = false;
      return err_msg.EMPTY_EMAIL_SPACE;
    }
    return "";
  };

  const changePw = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setPw(e.target.value);
  };
  const checkPw = (): string => {
    const pw_regExp =
      /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    if (!userPw.match(pw_regExp) || userPw.length >= 30) {
      post = false;
      return err_msg.WRONG_PW_FORMAT;
    } else if (userPw === "") {
      post = false;
      return err_msg.EMPTY_PW_SPACE;
    }
    return "";
  };
  const reCheckPw = (): string => {
    if (userPw !== rePw) {
      post = false;
      return err_msg.FAIL_MATCH_PW;
    }
    return "";
  };

  const changeRePw = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setRepw(e.target.value);
  };

  const submitSignup = (e: React.ChangeEvent<HTMLFormElement>): any => {
    e.preventDefault();
    checkName();
    checkEmail();
    checkPw();

    if (post === true) {
      axios
        .post("/signup/post", {
          data: {
            userName,
            userEmail,
            userPw,
            userNickName,
            userNumber,
          },
        })
        .then((res) => {
          console.log(res);
          alert("회원가입이 정상적으로 처리 되었습니다.");
          movePage("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const submitLogin = (e: React.ChangeEvent<HTMLFormElement>): any => {
    e.preventDefault();
    checkEmail();
    checkPw();

    if (post === true) {
      axios
        .post("/login/post", {
          email: userEmail,
          pw: userPw,
        })
        .then((res) => {
          changeLoginState();
          // 로그인 유지 기능 개발전까지 redirect는 user로
          movePage("/user");
        })
        .catch((err) => {
          const err_msg = err.response.data;
          console.log(err_msg);
          if (err_msg === 'not_match_pw') {
            alert("비밀번호가 다릅니다");
          } else if (err_msg === 'no_user') {
            alert("이메일이 존재하지 않습니다.");
          } else if (err_msg === "is_loggedin") {
            // 일단 중복일 경우 alret
            alert("로그인이 이미 되어있습니다.");
          }
        });
    }
  };

  if (location.pathname === "/login") {
    return (
      <Container>
        <div className="logo-layout">
          <img src={`${public_url}/imgs/Tech-Tech-Talk.png`} alt="logo" />
          <h1>Tech-Tech-Talk</h1>
        </div>
        <form onSubmit={submitLogin}>
          <div className="inputs">
            <p>이메일 (이메일 주소)</p>
            <Input placeholder="" onChange={changeEmail} />
            <InputMsg msg={checkEmail()} />
          </div>
          <div className="inputs">
            <p>비밀번호 (영 대문자,소문자, 특수문자 포함 8자 이상)</p>
            <Input type="password" placeholder="" onChange={changePw} />
            <InputMsg msg={checkPw()} />
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
            <p>이름</p>
            <Input placeholder="" onChange={changeName} />
            <InputMsg msg={ValidateCommon.nameValidate(userName, post)} />
          </div>
          <div className="inputs">
            <p>전화번호</p>
            <Input placeholder="" onChange={changeNumber} />
            <InputMsg msg={checkNumber()} />
          </div>
          <div className="inputs">
            <p>닉네임 (특수문자 제외 20자)</p>
            <Input placeholder="" onChange={changeNickName} />
            <InputMsg msg={ValidateCommon.emailValidate(userEmail, post)} />
          </div>
          <div className="inputs">
            <p>이메일 (이메일 주소)</p>
            <Input placeholder="" onChange={changeEmail} />
            <InputMsg msg={checkEmail()} />
          </div>
          <div className="inputs">
            <p>비밀번호 (영 대문자,소문자, 특수문자 포함 8자 이상)</p>
            <Input placeholder="" onChange={changePw} type="password" />
            <InputMsg msg={checkPw()} />
          </div>
          <div className="inputs">
            <p>비밀번호 재확인</p>
            <Input placeholder="" onChange={changeRePw} type="password" />
            <InputMsg msg={reCheckPw()} />
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
