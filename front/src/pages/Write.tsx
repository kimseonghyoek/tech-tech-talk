import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Content } from "antd/es/layout/layout";
import { Option } from "antd/es/mentions";
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import palette from "../palette";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const Container = styled(Content)`
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
`;

function Write(): JSX.Element {
  const [value, setValue] = useState<string>('');

  return (
    
    <Container>
      <Form>
        <Select defaultValue={"카테고리"}>
          <Option value="소프트웨어">소프트웨어</Option>
          <Option value="키보드">키보드</Option>
          <Option value="마우스">마우스</Option>
          <Option value="PC 부품">PC 부품</Option>
          <Option value="그 외">그 외 제품</Option>
        </Select>
        <span>
          <p>제목 입력란</p>
          <Input placeholder="제목을 입력하세요." />
        </span>
        <span>
          <p>사진</p>
          <Upload>
          <Button icon={<UploadOutlined rev={null}/>}>Upload</Button>
          </Upload>
        </span>
        <span>
          <p>내용</p>
          <ReactQuill theme="snow" value={value} onChange={setValue}/>
        </span>
        <div id="submits">
          <Button>등록하기</Button>
          <Button style={{ backgroundColor: palette.main_color4}}>삭재하기</Button>
        </div>
      </Form>
    </Container>
  );
}

export default Write;
