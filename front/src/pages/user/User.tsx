import axios from "axios";
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

  const getUserNickName = () => {
    const userName = sessionStorage.getItem("nickname");
    return userName;
  };

  const user_name = getUserNickName();

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
      <Button>로그아웃</Button>
    </UserCard>
  );
}

export default User;
