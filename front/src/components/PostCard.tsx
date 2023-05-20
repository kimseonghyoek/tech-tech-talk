import React from 'react';
import {Divider, List, Typography} from "antd";

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

function PostCard(): JSX.Element {
    return (
        <>
            <Divider orientation="left">따끈따끈한 새 글</Divider>
            <List dataSource={data}
                  bordered
                  renderItem={(item) => (
                      <List.Item>{item}
                      </List.Item>
                  )}
            />
        </>
    )
}

export default  PostCard;