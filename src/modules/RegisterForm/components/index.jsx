import React from 'react';
import { Block } from 'components';
import MainRegisterForm from './MainRegisterForm';
import SuccessBlock from './SuccessBlock';


export default class RegisterForm extends React.Component {
    render() {
        const success = true;
        
        return (
            <>
                <div className="auth__top">
                    <h2>Регистрация</h2>
                    <p>Для входа в чат вам нужно зарегистрироваться</p>
                </div>
                <Block>
                    {
                        success ? <SuccessBlock /> : <MainRegisterForm />
                    }
                </Block>
            </>
       );
    }
}
