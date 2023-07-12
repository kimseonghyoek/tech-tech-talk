/* eslint-disable no-useless-escape */
import React, { useState } from "react";
// import Input from "../input/Input";
import { Button, DatePicker, Divider, Form, Input, Row } from "antd";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Container } from "./style";
import InputMsg from "../input/InputMsg";
import axios from "axios";
import { useRecoilState } from "recoil";
import { ValidateCommon } from "../../util/common/Validate";
import useInput from "../../hooks/useInput";
import dayjs from "dayjs";
import KakaoBtn from "../SocialBtn/KakaoBtn";
import NaverBtn from "../SocialBtn/NaverBtn";
import FacebookBtn from "../SocialBtn/FaceBookBtn";
import GoogleBtn from "../SocialBtn/GoogleBtn";

const public_url = process.env.PUBLIC_URL;

const dataFormat = "YYYY/MM/DD";
const now = dayjs();

function LoginForm(): JSX.Element {
  const location = useLocation();
  const movePage = useNavigate();

  let post = true;

  const [userName, setNames] = useInput("");
  const [userNumber, setNumber] = useInput("");
  const [userNickName, setNickName] = useInput("");
  const [userEmail, setEmail] = useInput("");
  const [userPw, setPw] = useInput("");
  const [check, setCheck] = useState(false);

  const [rePw, setRePw] = useState("");

  const checkSignd = (): any => {
    if (!check) {
      setCheck(true);
    }
    if (check) {
      setCheck(false);
    }
  };

  const changeRePw = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setRePw(e.target.value);
  };

  const submitSignup = (): any => {
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

  const submitLogin = (): any => {
    if (post === true) {
      axios
        .post("/login/post", {
          email: userEmail,
          pw: userPw,
        })
        .then((res) => {
          const user = res.data;
          console.log(user);
          sessionStorage.setItem("email", user.email);
          sessionStorage.setItem("nickname", user.nickname);
          movePage("/comm");
        })
        .catch((err) => {
          const err_msg = err.response.data;
          console.log(err_msg);
          if (err_msg === "not_match_pw") {
            alert("비밀번호가 다릅니다");
          } else if (err_msg === "no_user") {
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
        <Form onFinish={submitLogin}>
          <div className="inputs">
            <p>이메일 (이메일 주소)</p>
            <Input placeholder="" onChange={setEmail} />
            <InputMsg msg={ValidateCommon.emailValidate(userEmail, post)} />
          </div>
          <div className="inputs">
            <p>비밀번호 (영 소문자, 특수문자 포함 8자 이상)</p>
            <Input type="password" placeholder="" onChange={setPw} />
            <InputMsg msg={ValidateCommon.passwordValidate(userPw, post)} />
          </div>
          <Button disabled={false} id="login-btn" htmlType="submit">
            로그인
          </Button>
        </Form>
        <div className="login-info">
          <Link to="/signup">
            <p>회원가입</p>
          </Link>
        </div>
        <Divider>
          <p>소셜 로그인</p>
        </Divider>
        <div className="social-login">
          <KakaoBtn/>
          <NaverBtn/>
          <FacebookBtn/>
          <GoogleBtn/>
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
        <Form onFinish={submitSignup}>
          <h1>User Infomation</h1>
            <div className="inputs">
              <p>이름</p>
              <Input placeholder="" onChange={setNames} />
              <InputMsg msg={ValidateCommon.nameValidate(userName, post)} />
            </div>
            <div className="inputs">
              <p>전화번호</p>
              <Input placeholder="" onChange={setNumber} />
              <InputMsg
                msg={ValidateCommon.phonenumValidate(userNumber, post)}
              />
            </div>
            <div className="inputs">
              <p>생년월일</p>
              <DatePicker
                style={{ width: "100%", height: "4.2rem" }}
                defaultValue={dayjs(`${now.format()}`, dataFormat)}
                format={dataFormat}
              />
            </div>

            <h1>Service Infomation</h1>
            <div className="inputs">
              <p>닉네임 (특수문자 제외 20자)</p>
              <Input placeholder="" onChange={setNickName} />
              <InputMsg
                msg={ValidateCommon.nicknameValidate(userNickName, post)}
              />
            </div>
            <div className="inputs">
              <p>이메일 (이메일 주소)</p>
              <Input placeholder="" onChange={setEmail} />
              <InputMsg msg={ValidateCommon.emailValidate(userEmail, post)} />
            </div>
            <div className="inputs">
              <p>비밀번호 (영 소문자, 특수문자 포함 8자 이상)</p>
              <Input placeholder="" onChange={setPw} type="password" />
              <InputMsg msg={ValidateCommon.passwordValidate(userPw, post)} />
            </div>
            <div className="inputs">
              <p>비밀번호 재확인</p>
              <Input placeholder="" onChange={changeRePw} type="password" />
              <InputMsg
                msg={ValidateCommon.reCheckPwValidate(userPw, rePw, post)}
              />
            </div>
          <div className="check-sign">
            <input type="checkbox" checked={check} onChange={checkSignd} />
            <p> Tech-Tech-Talk(이하 텍텍톡) 회원가입에 동의하십니까?</p>
          </div>
          <Button disabled={!check} id="login-btn" htmlType="submit">
            회원가입
          </Button>
        </Form>
      </Container>
    );
  }
}

export default LoginForm;
