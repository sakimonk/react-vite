import React from 'react';
import {Breadcrumb, Layout, theme} from 'antd';
import NavigationBar from "@/components/NavigationBar/NavigationBar.tsx";

const {Header, Content, Footer} = Layout;

const Main: React.FC = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();


    return (
        <Layout className="layout">
            <NavigationBar/>
            <Content style={{padding: '0 50px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content" style={{background: colorBgContainer}}>
                    Content
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    );
};

export default Main;