import React, { Component } from "react";
import { Layout, Form, Input, Button } from 'antd';
import s from "./login.module.css";

const { Content } = Layout;

class LoginPage extends Component {
    onFinish = (values) => {
        console.log("values finish ", values);
    };

    onFinishFailed = (errorMsg) => {
        console.log("error ", errorMsg);
    };

    renderForm = () => {
        return (
            <Form
                name="basic"
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 18,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Никнейм"
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, введите никнейм!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, введите пароль!',
                    },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 6,
                        span: 18,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Отправить
                    </Button>
                </Form.Item>
            </Form>
        )
    };

    render() {
        return (
            <Layout>
                <Content>
                    <div className={s.root}>
                        <div className={s.form_wrap}>
                            { this.renderForm() }
                        </div>
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default LoginPage;