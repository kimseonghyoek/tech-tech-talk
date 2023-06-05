import React from 'react';
import {Divider, List, Typography} from "antd";
import styled from "styled-components";
import palette from "../../palette";
import {Link} from "react-router-dom";

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
  width: 100%;
  
  .ant-list {
    border: none;
    border-radius: 0;
    border-top: 1px solid ${palette.main_color2};
  }
  
  li:hover {
    background-color: ${palette.main_color1};
  }

  p {
    margin: 0%;
  }

  a {
    color: ${palette.black}
  }
`;

type PostCardProps = { title: string, datas: any, link: any }

function PostCard(props: PostCardProps): JSX.Element {
    return (
        <WrapCard>
            <Divider orientation="left"><p>{props.title}</p></Divider>
            <List dataSource={props.datas}
                  bordered
                  renderItem={(item: React.ReactNode) => (
                      <List.Item><span><Link to={props.link}>{item}</Link></span>
                      </List.Item>
                  )}
            />
        </WrapCard>
    )
}

PostCard.defaultProps = {
    title: "기본",
    datas: data,
    link: "#"
}

export default  PostCard;