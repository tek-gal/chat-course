import React from 'react';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { Button } from 'components';
import { validateField } from 'utils/helpers';


const MainRegisterForm = (props) => {
    const {
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    
    return (
        <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item
                name="email"
                validateStatus={validateField('email', touched, errors)}
                help={!touched.email ? null : errors.email}
                hasFeedback
            >
                <Input
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    placeholder="E-Mail"
                    type="email"
                    size="large"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </Form.Item>
            <Form.Item
                name="name"
                validateStatus={validateField('name', touched, errors)}
                help={!touched.name ? null : errors.name}
                hasFeedback
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    type="text"
                    placeholder="Ваше имя"
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
                    placeholder="Пароль"
                    size="large"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </Form.Item>
            <Form.Item
                name="passwordRepeat"
                validateStatus={validateField('passwordRepeat', touched, errors)}
                help={!touched.passwordRepeat ? null : errors.passwordRepeat}
                hasFeedback
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Повторите пароль"
                    size="large"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </Form.Item>
            <Form.Item>
                <Button onClick={handleSubmit} type="primary" size="large" htmlType="submit" className="login-form-button">
                    Зарегистрироваться
                </Button>
            </Form.Item>
            <Form.Item>
                <Link className="auth__register-link" to="/login">Войти в аккаунт</Link>
            </Form.Item>
        </Form>
    );
};

export default MainRegisterForm;