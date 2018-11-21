import React from 'react';
import { connect } from 'react-redux'
import { login } from "../actions/login";
import { Field, reduxForm } from 'redux-form'
import { userActions } from "../actions/user.actions";

const required = value => value ? undefined : 'Обязательно'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

class Login extends React.Component {
    componentDidMount()
    {
        this.props.dispatch(userActions.logout()) // Logout каждый раз при загрузке страницы /login
    }
    render() {
        const { handleSubmit ,pristine, submitting, users, dispatch } = this.props

        const onSubmit =
            handleSubmit(value => {
                dispatch(userActions.login(value.login, value.password))
            })

        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2>Вход</h2>
                        <div className="alert alert-info">
                            Логин: test<br />
                            Пароль: test
                        </div>
                        <form onSubmit={onSubmit}>
                            <div>
                                <label>Логин</label>
                                <div>
                                    <Field
                                        name="login"
                                        component={renderField}
                                        type="text"
                                        placeholder="Логин"
                                        validate={[required]}
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Пароль</label>
                                <div>
                                    <Field
                                        name="password"
                                        component={renderField}
                                        type="password"
                                        placeholder="Пароль"
                                        validate={[required]}
                                    />
                                </div>
                            </div>
                            <div>
                                <button className='btn btn-primary' type="submit" disabled={pristine || submitting}>Войти</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
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

const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default reduxForm({
    form: 'login',
})(connectedComponent);