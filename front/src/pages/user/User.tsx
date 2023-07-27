import axios, { Axios, AxiosResponse } from "axios";
import styled from "styled-components";
import { getCookie } from "../../util/cookie";
import LocalStorage from "../../util/localstorage";
import { Link, useNavigate } from "react-router-dom";
import palette from "../../palette";
import { Avatar, Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { isLoggedOut } from "../../actions";
import { isLogout } from "../../reducer/user";
import { useCookies } from "react-cookie";

const UserCard = styled(Card)`
  border: 0.07rem solid ${palette.main_color3};
  border-radius: 5px;

  button {
    margin-top: 1.5rem;
  }

  .ant-card-meta-detail {
    display: flex;
    align-items: center;
    font-size: 18px;
  }
`;

function User(): JSX.Element {
  const movePage = useNavigate();
  const user = useSelector((state: any) => { return state.user});
  const dispatch = useDispatch();

  // 후에 하드코딩 깨고 쿠키값 상수화 예정
  const [,, removeCookie] = useCookies(['Cookie!']);

  const getUserNickName = () => {
    const userName = sessionStorage.getItem("nickname");
    return userName;
  };

  const user_name = getUserNickName();

  const logout = () => {
    dispatch(isLogout);
    axios.get("/login/logout").then((res: AxiosResponse) => {
      console.log(res);
    })
  }

  return (
    <UserCard
      actions={[
        <SettingOutlined key="setting" rev={undefined} onClick={() => {movePage("/userinfo")}} />,
        <EditOutlined key="edit" rev={undefined} onClick={() => {movePage("/write")}} />,
      ]}
    >
      <Meta
        avatar={<Avatar src={"/imgs/admin.png"} size={64} />}
        title={`${user_name} 님`}
      />
      <Button onClick={() => {logout()}}>로그아웃</Button>
    </UserCard>
  );
}

export default User;
