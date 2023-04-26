import axios from "axios";
import styled from "styled-components";
import { getCookie } from "../../util/cookie";
import LocalStorage from "../../util/localstorage";

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const UserInfo = styled.div`
  h1 {
    font-weight: bold;
  }
`;

function User(): JSX.Element {
  const getUser = {
    getUserInfo: () => {
      axios.get("/").then((res) => {
        console.log(res);
      })
    }
  }

  getUser.getUserInfo();

  return (
    <Container>
      <UserInfo>
        User 입니다.
      </UserInfo>
    </Container>
  );
} 

export default User;
