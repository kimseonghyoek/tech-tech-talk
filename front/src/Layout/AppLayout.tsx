import React, {ReactElement, useState} from 'react';
import {Button, Layout, Menu, Slider} from "antd";
import Header from "../components/header/Header";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";

type appTypeProps = {
    children: ReactElement
}
const AppLayout = ({children}: appTypeProps) => {
    return (
        <Layout>
            <Header/>
            <Layout>
                <Sider width={220} style={{ borderRight: '0.8px solid #D6E4E5' }}>
                    <div>
                        <Button>Click</Button>
                    </div>
                    <Menu style={{height: '100vh'}}>
                        <Menu.Item>
                            <a>User</a>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{ margin: '1rem'}}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default AppLayout;