import {Image, Layout, Menu, MenuProps} from "antd";
import React from "react";
import {MailOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import logo from "@/assets/logo.jpg"
import * as url from "url";
// import "antd/dist/antd.min.css";
import "@/components/NavigationBar/NavigationBar.css"
const { Header, Content, Footer } = Layout;

const NavigationBar: React.FC = () => {
    const screenWidth = document.documentElement.clientWidth;
    console.log(screenWidth)
    const items= [];
    for (let i = 0; i < 10; i += 1) {
        items.push({
            label: `Item ${i}`,
            key: i,
            icon: <MailOutlined />
        });
    }

    const loginItems: MenuProps['items'] = []
    loginItems.push({
        key: "msg",
        icon: <MailOutlined />
    })
    loginItems.push({
        label: "登录",
        key: "login",
        icon: <UserOutlined />,
    })
    loginItems.push({
        key: "moreMenu",
        icon: <MenuOutlined />,
        className: "moreMenu",
        // style: {display:"none"},
    })
    return(
        <Header style={{ display: 'flex', alignItems: 'center'}}>
            {/*<div className="demo-logo" />*/}
            <a href={''}>
                <Image src={logo} preview={false} style={{maxWidth:"3rem"}}/>
            </a>
            <Menu
                theme="dark"
                mode="horizontal"
                // defaultSelectedKeys={['5']}
                items={items}
                style={{width:"100%"}}
            />
            <Menu
                theme="dark"
                mode="horizontal"
                // defaultSelectedKeys={['5']}
                items={loginItems}
                selectable={false}
                style={{width:"100%", display: "flex", justifyContent:"flex-end"}}
            />
        </Header>
    )
}
export default NavigationBar;
