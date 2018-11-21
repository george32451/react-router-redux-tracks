import React from 'react';
import { Field, reduxForm } from 'redux-form'
import Menu from '../components/Menu'
import { connect } from 'react-redux'
import {register} from '../actions/register'
//import Snackbar from '@material-ui/core/Snackbar'

const required = value => value ? undefined : 'Required'

const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting, onRegister } = props;
    const onSubmit =
            handleSubmit(value => {
                onRegister(value)
                window.alert(`Добро пожаловать, ${value.name}`)
            })
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <Menu/>
                </div>
                <div className='col-md-9'>
                    <h2>Регистрация</h2>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label>Имя</label>
                            <div>
                                <Field
                                    name="name"
                                    component="input"
                                    type="text"
                                    placeholder="Имя"
                                    validate={[required]}
                                />
                            </div>
                        </div>
                        <div>
                            <label>Фамилия</label>
                            <div>
                                <Field
                                    name="lastName"
                                    component="input"
                                    type="text"
                                    placeholder="Фамилия"
                                />
                            </div>
                        </div>
                        <div>
                            <label>Email</label>
                            <div>
                                <Field
                                    name="email"
                                    component="input"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div>
                            <label>Пол</label>
                            <div>
                                <label>
                                    <Field
                                        name="sex"
                                        component="input"
                                        type="radio"
                                        value="male"
                                    />
                                    {' '}
                                    Муж
                                </label>
                                <label>
                                    <Field
                                        name="sex"
                                        component="input"
                                        type="radio"
                                        value="female"
                                    />
                                    {' '}
                                    Жен
                                </label>
                            </div>
                        </div>
                        <div>
                            <button className='btn btn-primary' type="submit" disabled={pristine || submitting}>Submit</button>
                            <button className='btn btn-danger' type="button" disabled={pristine || submitting} onClick={reset}>
                                Clear Values
                            </button>
                        </div>
                    </form>
                </div>
                </div>

            </div>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.login.users,
    }
}

const mapDispatchToProps = () => {
    return dispatch => ({
        onRegister: (user) => {
            dispatch(register(user));
        }
    })
}

const connectedComponent = connect(
    mapStateToProps, mapDispatchToProps
)(SimpleForm);

export default reduxForm({
    form: 'simple',
})(connectedComponent);
