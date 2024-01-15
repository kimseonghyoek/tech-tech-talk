import { Button, DatePicker, Form, Input } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { Container } from "./style";
import InputMsg from "../input/InputMsg";
import { ValidateCommon } from "../../util/common/Validate";
import useInput from "../../hooks/useInput";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { CHECK_DUP_EMAIL_REQUEST, SIGN_UP_REQUEST, state } from "../../redux/modules/user";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import Inputs from "../inputs/Inputs";

const public_url = process.env.PUBLIC_URL;

const dataFormat = "YYYY/MM/DD";
const now = dayjs();

const SignupForm = () => {
  let post = true;
  const [userName, setNames] = useInput("");
  const [userNumber, setNumber] = useInput("");
  const [userNickName, setNickName] = useInput("");
  const [userEmail, setEmail] = useInput("");
  const [userPw, setPw] = useInput("");
  const [check, setCheck] = useState(false);
  const [rePw, setRePw] = useState("");
  const user: state = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();
  const movePage = useNavigate();

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

  const submitSignup = useCallback(() => {
    if (post === true) {
      dispatch({
        type: SIGN_UP_REQUEST,
        data: { userName, userEmail, userPw, userNickName, userNumber },
      });
    };
  }, [userName, userEmail, userPw, userNickName, userNumber]);

  useEffect(() => {
    if (user.signupDone) {
      movePage("/login");
  };
  }, [user.signupDone]);

  const checkDuplicationEmail = (() => {
    console.log("Check duplication email");
    dispatch({
      type: CHECK_DUP_EMAIL_REQUEST,
      data: userEmail
    });
  });

  return (
    <Container>
      <div className="logo-layout">
        <img src={`${public_url}/imgs/Tech-Tech-Talk.png`} alt="logo" />
        <h1>Tech-Tech-Talk</h1>
      </div>
      <Form onFinish={submitSignup} layout="vertical">
        <h1>User Infomation</h1>
        <Inputs label="이름">
          <Input placeholder="" onChange={setNames} />
        </Inputs>
        <Inputs label="전화번호">
          <Input placeholder="" onChange={setNumber} />
        </Inputs>
        <Inputs label="생년월일">
          <DatePicker
            style={{ width: "100%" }}
            defaultValue={dayjs(`${now.format()}`, dataFormat)}
            format={dataFormat}
          />
        </Inputs>

        <h1>Service Infomation</h1>
        <Inputs label="닉네임 (특수문자 제외 20자)">
          <Input placeholder="" onChange={setNickName} />
        </Inputs>
        <Inputs label="이메일">
          <Input placeholder="" onChange={setEmail} />
          <InputMsg msg={ValidateCommon.emailValidate(userEmail, post)} />
          <div style={{ textAlign: "right"}}>
          <Button onClick={checkDuplicationEmail}>이메일 중복 확인</Button>
          </div>
        </Inputs>
        <Inputs label="비밀번호 (영 소문자, 특수문자 포함 8자 이상)">
          <Input placeholder="" onChange={setPw} type="password" />
        </Inputs>
        <Inputs label="비밀번호 재확인">
          <Input placeholder="" onChange={changeRePw} type="password" />
        </Inputs>
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
};

export default SignupForm;
