import React from 'react';
import { Block } from 'components';
import MainRegisterForm from './MainRegisterForm';
import SuccessBlock from './SuccessBlock';


const RegisterForm = (props) => {
    const success = false;
    
    return (
        <>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат вам нужно зарегистрироваться</p>
            </div>
            <Block>
                {
                    success ? <SuccessBlock /> : <MainRegisterForm {...props} />
                }
            </Block>
        </>
    );
};


export default RegisterForm;

