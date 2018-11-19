import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Menu from '../containers/Menu'
import { connect } from 'react-redux'
import {register} from "../actions/register";

const required = value => value ? undefined : 'Required'

const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting, onRegister } = props;
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-5'>
                    <Menu/>
                </div>
                <div className='col-md-7'>
                    <h2>Регистрация</h2>
                    <form onSubmit={handleSubmit(val => {
                        onRegister(val.firstName, val.lastName, val.email, val.sex)
                        window.alert(`Добро пожаловать, ${val.firstName}`)
                    })}>
                        <div>
                            <label>Имя</label>
                            <div>
                                <Field
                                    name="firstName"
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
const connectedComponent = connect(
    (state) => ({
        users: state.login,
    }),
    dispatch => ({
        onRegister: (name, last_name, email, sex) => {
            dispatch(register(name, last_name, email, sex));
        }
    })
)(SimpleForm);

export default reduxForm({
    form: 'simple',
})(connectedComponent);
