import axios from "axios";
import styled from "styled-components";
import { getCookie } from "../../util/cookie";
import LocalStorage from "../../util/localstorage";
import {Link} from "react-router-dom";
import MyPostCard from "../../components/MyPostCard";

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

function User(): JSX.Element {

  const getUserNickName = () => {
      const userName = sessionStorage.getItem('nickname');
      return userName
  }

  const user_name = getUserNickName();

  return (
    <Container>
        <p>
            <span>어서오세요, </span>
            <Link to="/user">{user_name} 님</Link>
        </p>
    </Container>
  );
} 

export default User;
