import axios from "axios";
import styled from "styled-components";
import { getCookie } from "../../util/cookie";

const Container = styled.div`
  display: flex;
  flex: 1;

  h1 {
    font-size: 3rem;
  }
`;

function User(): JSX.Element {
  const getUser = () => {
    axios
      .get("/user/get")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getUser();

  return (
    <Container>
      <h1>User Page</h1>
    </Container>
  );
}

export default User;
