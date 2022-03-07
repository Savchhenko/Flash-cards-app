import React, { Component } from "react";
import { Layout } from 'antd';
import s from "./login.module.css";

const { Content } = Layout;

class LoginPage extends Component {
    render() {
        return (
            <Layout>
                <Content>
                    <div className={s.root}>

                    </div>
                </Content>
            </Layout>
        );
    }
}

export default LoginPage;