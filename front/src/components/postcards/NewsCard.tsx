import React from "react";
import styled from "styled-components";
import palette from "../../palette";
import { Divider, List } from "antd";

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
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

  p {
    margin: 0%;
  }
`;

type NewsPostCardProps = { title: string; datas: any; link: any };

function NewsCard(props: NewsPostCardProps): JSX.Element {
  return (
    <WrapCard>
      <Divider orientation="left"><p>{props.title}</p></Divider>
      <List
        dataSource={props.datas}
        bordered
        renderItem={(item: React.ReactNode) => (
          <List.Item>
            <span
              onClick={() => {
                window.open(props.link);
              }}
            >
              <p>{item}</p>
            </span>
          </List.Item>
        )}
      />
    </WrapCard>
  );
};

NewsCard.defaultProps = {
  title: "기본",
  datas: data,
  link: "#"
}

export default NewsCard;