import React from 'react';
import {Divider, List, Typography} from "antd";
import styled from "styled-components";
import palette from "../palette";

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

const WrapCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.07rem solid ${palette.main_color3};
  background-color: ${palette.white};
  margin: 0.5rem;
  box-sizing: border-box;
  flex: 1;
  
  .ant-list {
    border: none;
    border-radius: 0;
    border-top: 1px solid ${palette.main_color2};
  }
  
  li:hover {
    background-color: ${palette.main_color1};
  }
`;

const onClickEvent = (): any => {
    return console.log('test');
}

type PostCardProps = { title: string }

function PostCard(props: PostCardProps): JSX.Element {
    return (
        <WrapCard>
            <Divider orientation="left">{props.title}</Divider>
            <List dataSource={data}
                  bordered
                  renderItem={(item) => (
                      <List.Item onClick={onClickEvent}>{item}
                      </List.Item>
                  )}
            />
        </WrapCard>
    )
}

PostCard.defaultProps = {
    title: "기본"
}

export default  PostCard;