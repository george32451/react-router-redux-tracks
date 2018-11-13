import React from 'react';

import Menu from './Menu';
import { connect } from 'react-redux'
import { login } from "../actions/login";

var username = ''

const Login = ({ onLogin, users }) => {
    let loginInput = ''
    const login = () => {
        username = loginInput.value
        if(username === users[1].name ) {
            username = loginInput.value
            onLogin(username);
        } else {
            console.log('Not logged')
        }
        loginInput.value = '';
    }
    console.log(username)
    return (
        <div>
            <Menu />
            <div>
                {username === users[1].name ? <p>Привет, {username}</p> :
                    <div>
                        <input
                            type="text"
                            ref={(input) => { loginInput = input }}
                        />
                        <button onClick={login}>Войти</button>
                        <p>
                            Вы не вошли
                        </p>
                    </div>
                }
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
