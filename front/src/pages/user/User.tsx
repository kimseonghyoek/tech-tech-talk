import axios from "axios";
import styled from "styled-components";
import { getCookie } from "../../util/cookie";
import LocalStorage from "../../util/localstorage";

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  #user-info {
    
  }
`;

function User(): JSX.Element {
  // const getUser = {
  //   getUserInfo: () => {
  //     axios("info", )
  //   }
  // }

  return (
    <Container>
      <div id="user-info">
        user
      </div>
    </Container>
  );
} 

export default User;
