import React from "react";
import PostCard from "../../components/postcards/PostCard";
import { Col, Layout, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import palette from "../../palette";
import SideBar from "../../components/SideBar";
import styled from "styled-components";
import { Desktop } from "../../util/responsive";
import { useMediaQuery } from "react-responsive";

const CalcWidth = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  if (isDesktop) {
    return "75vw"
  } else {
    return "100vw"
  }
}

const MainLayout = styled(Layout)`
  margin: auto;
  width: ${CalcWidth}
`;


function Comm(): JSX.Element {
  return (
    <MainLayout>
      <Content style={{ backgroundColor: `${palette.white}`, padding: "0.5rem 0rem" }}>
        <Row>
          <Col xs={24} md={12}>
            <PostCard title="실시간 핫 글" />
          </Col>
          <Col xs={24} md={12}> 
            <PostCard title="광고" />
          </Col>
        </Row>
        <PostCard title="이 주의 핫 글" />
        <PostCard title="소프트웨어" />
        <PostCard title="하드웨어" />
      </Content>
      <Desktop>
      <Sider
        width="330"
        style={{ backgroundColor: "white", width: "fit-content", padding: "1rem" }}
      >
        <>
          <SideBar />
        </>
      </Sider>
      </Desktop>
    </MainLayout>
  );
}

export default Comm;
