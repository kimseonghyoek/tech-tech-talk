import { Content } from "antd/es/layout/layout";
import styled from "styled-components";
import palette from "../../palette";

export const Container = styled(Content)`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 3rem;

  p {
    font-size: 1.4rem;
  }

  .ant-select {
    width: 15rem;
  }

  input {
    font-size: 1.8rem;
  }

  #tag-list > input {
    width: 6rem;
    height: 2.5rem;
    font-size: 1.2rem;
    margin-right: 1rem;;
  }

  #hashtag {
    display: flex;
    flex-direction: column;
  }

  .tags {
    display: flex;
    align-items: center;
  }

  .tags > form > input {
    width: 8.5rem;
    font-size: 1.5rem;
    text-align: center;
  }

  #submits {
    text-align: right;
    padding: 1.8rem;
  }

  #submits button {
    width: 14rem;
    background-color: ${palette.main_color3};
    color: ${palette.white};
    margin: 0rem 1rem;
  }

  .ql-editor {
    min-height: 70vh;
  }

  .ql-editor p {
    font-size: 1.3rem;
  }

  .ql-editor h1 {
    font-size: 2rem;
  }

  .ql-editor h2 {
    font-size: 1.7rem;
  }

  .ql-editor h3 {
    font-size: 1.5rem;
  }

  #title-input {
    font-weight: bold;
  }
`;
