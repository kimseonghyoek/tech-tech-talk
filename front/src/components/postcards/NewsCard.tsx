import React from "react";
import styled from "styled-components";
import palette from "../../palette";
import { Divider, List } from "antd";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const WrapCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.07rem solid ${palette.main_color3};
  background-color: ${palette.white};
  margin: 0.5rem 0rem;
  border-radius: 5px;
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

  p {
    margin: 0%;
  }
`;

type NewsPostCardProps = { datas: any; link: any };

function NewsCard(props: NewsPostCardProps): JSX.Element {
  return (
    <WrapCard>
      <Divider orientation="left">
        <p>네이버 IT 뉴스</p>
      </Divider>
      <List bordered>
        {props.datas.map((element: any) => {
          return (
            <List.Item>
              <p
                style={{ textAlign: 'left'}}
                onClick={() => {
                  window.open(element.link);
                }}
              >
                {element.title}
              </p>
            </List.Item>
          );
        })}
      </List>
    </WrapCard>
  );
}

NewsCard.defaultProps = {
  datas: data,
  link: "#",
};

export default NewsCard;
