import styled from "styled-components";
import palette from "../../palette";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  flex-direction: column;
  
  .logo-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3.5rem;

    img {
      border-radius: 25%;
      width: 66px;
      height: 71px;
    }

    h1 {
      padding-left: 20px;
      font-size: 2.8rem;
    }
  }

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .ant-row {
      justify-content: center;
      width: 100%;
    }

    .inputs {
      width: 90%;
      margin: 1rem;
      p {
        font-size: 1.4rem;
        margin: 1rem 0rem;
      }

      input {
        height: 4.2rem;
      }
    }

    #login-btn {
      margin: 2rem;
      width: 38.5rem;
      height: 6rem;
      background-color: ${palette.main_color3};
      color: ${palette.white};
    }
  }

  .login-info {
    width: 87%;
    display: flex;
    justify-content: flex-end;
    margin: 0rem 4rem;
    text-align: right;
    a {
      text-decoration: none;
      p {
        font-weight: lighter;
        color: ${palette.black};
        margin: 0;
        font-size: 1.3rem;
      }
    }
  }

  hr {
    margin: 3rem;
    width: 34.5rem;
  }

  .social-login {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .check-sign {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    input {
    width: 1.7rem;
      height: 1.7rem;
    }

    p {
      padding: 0rem 0.9rem;
      font-size: 1.3rem;
    }
  }
`;

export const WrapMyInfo = styled.div`
  border: 0.07rem solid ${palette.main_color3};
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  width: 100%;

  h1 {
    font-size: large;
  }
`;