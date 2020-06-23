import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LoginForm, RegisterForm } from 'modules';
import './Auth.sass';


const Auth = () => {
    return (
        <section className="auth">
            <Route path="/login" component={LoginForm} exact/>
            <Route path="/register" component={RegisterForm} exact/>
            <Redirect to="/login" />
        </section>
    ); 
};

export default Auth; 