import axios from "axios";
import styled from "styled-components";
import { getCookie } from "../../util/cookie";
import LocalStorage from "../../util/localstorage";

const Container = styled.div`
  display: flex;
  flex: 1;

  h1 {
    font-size: 3rem;
  }
`;

function User(): JSX.Element {
  const getUser = () => {
    console.log(localStorage.getItem("login"));
  };

  getUser();

  return (
    <Container>
      <h1>User Page</h1>
    </Container>
  );
}

export default User;
