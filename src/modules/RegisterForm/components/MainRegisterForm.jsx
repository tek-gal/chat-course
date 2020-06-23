import React from 'react';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Button } from 'components';


export default class MainRegisterForm extends React.Component {
    render() {
        return (
            <>
                <div className="auth__top">
                    <h2>Регистрация</h2>
                    <p>Для входа в чат вам нужно зарегистрироваться</p>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        name="email"
                        validateStatus="success"
                        hasFeedback
                        rules={[ 
                        {
                            required: true,
                            message: 'Please input your E-Mail!',
                        },
                        ]}
                    >
                        <Input
                            prefix={<MailOutlined className="site-form-item-icon" />}
                            placeholder="E-Mail"
                            type="email"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item
                        name="name"
                        validateStatus="success"
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            type="text"
                            placeholder="Ваше имя"
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
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Пароль"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item
                        name="passwordRepeat"
                        validateStatus="success"
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: 'Please repeat your password!',
                        },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Повторите пароль"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" size="large" htmlType="submit" className="login-form-button">
                            Зарегистрироваться
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Link className="auth__register-link" to="/login">Войти в аккаунт</Link>
                    </Form.Item>
                </Form>
            </>
       );
    }
}
