import React from 'react';

import Menu from './Menu';
import { connect } from 'react-redux'
import { login } from "../actions/login";

const Login = ({ onLogin, users }) => {
    let loginInput = ''

    const login = () => {
        onLogin(loginInput.value);
        loginInput.value = '';
    }
    console.log(users)
    return (
        <div>
            <Menu />
            <div>
                <input type="text" ref={(input) => { loginInput = input }} />
                <button onClick={login}>Войти</button>
                <p>Привет, {users[users.length - 1].name}</p>
            </div>
        </div>
    );
}

export default connect(
    (state, ownProps) => ({
        users: state.login,
        ownProps
    }),
    dispatch => ({
        onLogin: (name) => {
            dispatch(login(name));
        }
    })
)(Login);
