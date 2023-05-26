import React from "react";
import Container from "../Styled";
import ContentsLayout from "../../components/contents/ContentsLayout";
import PostCard from "../../components/PostCard";
import {Layout, Menu, Slider} from "antd";
import {Content} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {hover} from "@testing-library/user-event/dist/hover";
import palette from "../../palette";
import SideBar from "../../components/SideBar";

function Comm(): JSX.Element {
  return (
    <Layout style={{ padding: "0rem 17rem", minWidth: "1200px/*display: flex;justify-content: center*/;"}}>
        <Content style={{ backgroundColor: `${palette.white}`, padding: "1rem" }}>
            <div style={{ display: "flex", flexDirection: "row"}}>
                <PostCard title="실시간 핫 글"/>
                <PostCard title="광고"/>
            </div>
                <PostCard title="이 주의 핫 글" />
                <PostCard title="소프트웨어"/>
                <PostCard title="하드웨어"/>
        </Content>
        <Sider width="350" style={{ backgroundColor: "white", width: "fit-content" }}>
            <>
                <SideBar/>
                <PostCard title="이슈된 IT 기사"/>
            </>
        </Sider>
    </Layout>
  );
}

export default Comm;
