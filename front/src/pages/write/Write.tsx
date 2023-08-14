import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputRef, Select, Tag, Upload } from "antd";
import { useEffect, useRef, useState } from "react";
import palette from "../../palette";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { Container } from "./WriteStyled";

function Write(): JSX.Element {
  const [cate, setCate] = useState("카테고리");
  const [title, setTitle] = useInput("");
  const [value, setValue] = useState<string>("");
  const [tags, setTags] = useState<any[]>([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [tagValue, setTagValue, setText] = useInput("");
  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible === true) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  const closeTag = (remove: string) => {
    const newTag = tags.filter((tag) => tag !== remove);
    setTags(newTag);
  };

  const allRemove = () => {
    setValue("");
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const submitTag = () => {
    if(tagValue && tags.indexOf(tagValue) === -1) {
      setTags([...tags, tagValue]);
    }
    setText("");
    setInputVisible(false)
  };  

  const postWrite = (): any => {
    axios
      .post("/post", {
        data: {
          cate,
          title,
          value,
          tags,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <span id="hashtag">
        <p>해시태그</p>
        <div id="tag-list">
          {inputVisible ? (
            <Input
              ref={inputRef}
              value={tagValue}
              onChange={setTagValue}
              onPressEnter={submitTag}
              size="small"
            />
          ) : (
            <Tag onClick={showInput}>태그 추가</Tag>
          )}
          {
            tags.map((tag, key) => {
              return (
                <Tag onClick={() => closeTag(tag)} key={key}>{tag}</Tag>
              )
            })
          }
        </div>
      </span>
      <Form onFinish={postWrite}>
        <span>
          <p>카테고리</p>
          <Select
            defaultValue={cate}
            onChange={setCate}
            options={[
              {
                value: "SW",
                label: "software",
              },
              {
                value: "KB",
                label: "keyboard",
              },
              {
                value: "MO",
                label: "mouse",
              },
              {
                value: "PC",
                label: "pc",
              },
              {
                value: "OT",
                label: "other",
              },
            ]}
          />
        </span>
        <span>
          <p>제목 입력란</p>
          <Input
            id="title-input"
            placeholder="제목을 입력하세요."
            value={title}
            onChange={setTitle}
          />
        </span>
        <span>
          <p>사진</p>
          <Upload>
            <Button icon={<UploadOutlined rev={null} />}>Upload</Button>
          </Upload>
        </span>
        <span>
          <p>내용</p>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </span>
        <div id="submits">
          <Button htmlType="submit">등록하기</Button>
          <Button
            style={{ backgroundColor: palette.main_color4 }}
            onClick={allRemove}
          >
            삭제하기
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Write;
