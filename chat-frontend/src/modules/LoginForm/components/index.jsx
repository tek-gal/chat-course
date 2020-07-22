import React from 'react';
import { Form, Input } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { Button } from 'components';
import { validateField } from 'utils/helpers';


const LoginForm = (props) => {
    const {
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    
    
    return (
        <Form
            onSubmit={handleSubmit}
            className="login-form"
            initialValues={{
                remember: true,
            }}
        >
            <Form.Item
                name="email"
                validateStatus={validateField('email', touched, errors)}
                help={!touched.email ? null : errors.email}
                hasFeedback
            >
                <Input
                    placeholder="E-Mail"
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    size="large"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </Form.Item>
            <Form.Item
                name="password"
                validateStatus={validateField('password', touched, errors)}
                help={!touched.password ? null : errors.password}
                hasFeedback
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    size="large"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />  
            </Form.Item>
            <Form.Item>
                <Button onClick={handleSubmit} type="primary" size="large" htmlType="submit" className="login-form-button">
                    Войти в аккаунт
                </Button>
            </Form.Item>
            <Form.Item>
                <Link className="auth__register-link" to="/register">Зарегистрироваться</Link>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;