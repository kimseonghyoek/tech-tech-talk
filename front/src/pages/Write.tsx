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
import useInput from "../hooks/useInput";
import axios from "axios";
import Tags from "../components/[Tags]";

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

  #hashtag {
    display: flex;
    flex-direction: row;
    align-items: end;
  }

  #hashtag > form > input {
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
  };

  .ql-editor * {
    font-size: 1.4rem;
  }

  #title-input {
    font-weight: bold;
  }
`;

function Write(): JSX.Element {
  const [cate, setCate] = useState('카테고리');
  const [title, setTitle] = useInput('');
  const [value, setValue] = useState<string>('');

  const postWrite = (): any => {
    axios.post("/write/post", {
      data: {
        cate,
        title,
        value
      },
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  };

  const allRemove = () => {
    setValue('');
  };

  return (
    <Container>
      <Form onFinish={postWrite}>
        <span>
          <p>카테고리</p>
          <Select defaultValue={cate} onChange={setCate} options={[
          {
            value: 1,
            label: 'software'
          },
          {
            value: 2,
            label: 'keyboard'
            },
            {
              value: 3,
              label: 'mouse'
            },
            {
              value: 4,
              label: 'pc',
            },
            {
              value: 5,
              label: 'other'
            }
        ]}/>
        </span>
        <span>
          <p>제목 입력란</p>
          <Input id="title-input" placeholder="제목을 입력하세요." value={title} onChange={setTitle}/>
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
        <span id="hashtag">
          <Form>
          <p>해시태그</p>
          <Input placeholder="해시태그"/>
          </Form>
          <div className="tags">
            <Tags text="콕스"/>
          </div>
        </span>
        <div id="submits">
          <Button htmlType="submit">등록하기</Button>
          <Button style={{ backgroundColor: palette.main_color4}} onClick={allRemove}>삭제하기</Button>
        </div>
      </Form>
    </Container>
  );
}

export default Write;
