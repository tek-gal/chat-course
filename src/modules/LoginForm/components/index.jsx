import React from 'react';
import { Form, Input } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Button } from 'components';


export default class LoginForm extends React.Component {
    render() {
        const onFinish = values => {
            console.log('Received values of form: ', values);
        };

        
        return (
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    validateStatus="success"
                    hasFeedback
                    rules={[ 
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                    ]}
                >
                    <Input
                        prefix={<MailOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                        size="large"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    validateStatus="success"
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                    ]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    size="large"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" size="large" htmlType="submit" className="login-form-button">
                        Войти в аккаунт
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Link className="auth__register-link" to="/register">Зарегистрироваться</Link>
                </Form.Item>
            </Form>
       );
    }
}