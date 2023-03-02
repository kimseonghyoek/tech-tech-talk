import axios from "axios";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
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
      <p>User Page</p>
    </Container>
  );
}

export default User;
