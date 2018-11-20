import React from 'react';
import Menu from '../components/Menu';
import { connect } from 'react-redux'
import { login } from "../actions/login";

let username = ''

const Login = props => {
    const { onLogin, users } = props

    let loginInput = ''

    const login = () => {
        if (users.find(x => x.name === loginInput.value)) {
            onLogin(loginInput.value)
            username = loginInput.value
        } else {
            window.alert(`Пользователя ${loginInput.value} не существует`)
        }
        loginInput.value = ''
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <Menu />
                </div>
                <div className='col-md-9'>
                    <h2>Вход</h2>
                    <input
                        type="text"
                        ref={(input) => { loginInput = input }}
                    />
                    <button onClick={login}>Войти</button>
                    {
                        username.length > 0 ? <p>Привет, {username}</p> : <p>Вы не вошли</p>
                    }
                </div>
            </div>
        </div>

    );
}

const mapStateToProps = (state) => {
    return {
        users: state.login.users,

    }
}

const mapDispatchToProps = () => {
    return dispatch => ({
        onLogin: (name) => {
            dispatch(login(name));
        }
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
