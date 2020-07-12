import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { LoginForm, RegisterForm } from 'modules';
import './Auth.sass';


const Auth = () => {
    return (
        <section className="auth">
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/register" component={RegisterForm} />
            <Redirect to="/login" />
        </section>
    ); 
};

export default Auth; 