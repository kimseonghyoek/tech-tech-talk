import React, { useEffect } from "react";
import styled from "styled-components";
import palette from "../../palette";
import { Link } from "react-router-dom";
import axios from "axios";
import { getCookie } from "../../util/cookie";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;

  .info {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    p {
      font-weight: bold;
      color: ${palette.main_color3};
      width: 50vm;
      font-size: 1.3rem;
    }
  }
`;

// 유저 이미지는 고려중.
type UserInfoProps = { img: string; name: string|null };

function PreUser(props: UserInfoProps): JSX.Element {

  return (
    <Container>
      <Link to="/user">
        <div className="info">
          <p>{props.name} 님</p>
        </div>
      </Link>
    </Container>
  );
}

PreUser.defaultProps = {
  name: "USER_NAME",
  img: "/",
};

export default PreUser;
