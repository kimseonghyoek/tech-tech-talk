import styled from "styled-components";
import palette from "../../palette";

const style = styled.div`
  padding-top: 1rem;
  position: sticky;
  top: -1rem;
  display: flex;
  width: 100%;
  height: 10.5rem;
  flex-direction: column;
  background-color: ${palette.white};

  .top-item {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 100%;
    height: 35%;
    background-color: ${palette.white};
    border-bottom: 0.1rem solid ${palette.main_color2};

    a {
      color: ${palette.black};
      text-decoration: none;
      p {
        font-size: 1.2rem;
        padding: 0rem 2rem;
      }
    }
  }

  .main {
    display: flex;
    width: 100%;
    height: 65%;
    align-items: center;
    justify-content: center;
    border-bottom: 0.1rem solid ${palette.main_color2};

    #header-logout {
      background-color: ${palette.main_color3};
      border-radius: 0.5rem;
      font-size: 1.3rem;
      width: 7rem;
      height: 4rem;
      color: ${palette.white};
    }

    a {
      display: center;
      justify-center: center;
      align-items: center;
      color: ${palette.black};
      text-decoration: none;

      img {
        width: 9rem;
      }

      #header-login {
        background-color: ${palette.main_color4};
        border-radius: 0.5rem;
        font-size: 1.3rem;
        width: 7rem;
        height: 4rem;
        color: ${palette.white};
      }
    }

    ul {
      display: flex;
      flex-direction: row;

      li {
        list-style: none;
        padding: 0rem 3.5rem;

        p {
          font-size: 1.3rem;
        }
      }
    }
  }

  .tablet-main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* img {
    margin: 0rem 7rem;
  } */

    button {
      border-radius: 0.5rem;
      width: 100%;
      background-color: ${palette.main_color4};
      margin: 0%;
      font-size: 1.3rem;
      color: ${palette.white};
    }

    .side-box {
      margin: 2rem;
      width: 7.5rem;
    }
  }

  .header-items {
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: ${palette.white};

    ul {
      padding: 0%;
    }
  }
`;

export default style;