import React from 'react';

import Menu from '../containers/Menu';
import { connect } from 'react-redux'
import { login } from "../actions/login";

let username = ''

const Login = ({ onLogin, users }) => {
    let loginInput = ''
    const login = () => {
        try {
            username = loginInput.value
            if(loginInput.value === users.find(x => x.name === username).name) {
                onLogin(loginInput.value)
            }
        } catch (e){
            window.alert(`Пользователя ${username} не существует`)
        }
        loginInput.value = ''
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <Menu />
                </div>
                <div className='col-md-7'>
                    <h2>Вход</h2>
                    <input
                        type="text"
                        ref={(input) => { loginInput = input }}
                    />
                    <button onClick={login}>Войти</button>
                    {
                        users.find(x => x.name === username) !== undefined &&
                        username === users.find(x => x.name === username).name ?
                            <p>Привет, {username}</p> :
                            <p>Вы не вошли</p>
                    }
                </div>
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
