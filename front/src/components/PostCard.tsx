import React from 'react';
import {Divider, List, Typography} from "antd";
import styled from "styled-components";

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

const WrapCard = styled.div`
  border-radius: 10px;
  border: 0.07rem solid gray;
`;

const onClickEvent = (): any => {
    return console.log('test');
}

function PostCard(): JSX.Element {
    return (
        <WrapCard>
            <Divider orientation="left">따끈따끈한 새 글</Divider>
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

export default  PostCard;