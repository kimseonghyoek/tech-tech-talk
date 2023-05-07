import styled from "styled-components";
import palette from "../../palette";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  flex-direction: column;
  height: 100%;

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

    .inputs {
      margin: 20px;
      p {
        font-size: 1.4rem;
        margin: 1rem 0rem;
      }

      input {
        width: 38rem;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      margin: 0;  
    }

    .social-btn {
      padding: 0;
      li {
        list-style: none;
        padding: 0.5rem;
      }

      button {
        width: 38.5rem;
        height: 4.5rem;
      }
      #naver-btn {
        background-color: ${palette.naver_color};
        color: ${palette.white};
      }
      #kakao-btn {
        background-color: ${palette.kakao_color};
        color: ${palette.black};
      }
      #google-btn {
        background-color: ${palette.main_color1};
        color: ${palette.black};
      }
    }
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