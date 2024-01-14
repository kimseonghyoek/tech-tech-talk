import { Form } from "antd";
import styled from "styled-components";

export const Container = styled(Form.Item)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem;
  
  p {
    font-size: 1.4rem;
    margin: 1rem 0rem;
  }

  input {
    height: 4.2rem;
  }
`;
