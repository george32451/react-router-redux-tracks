import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import About from './components/About';
import Track from './containers/Track';
import Login from './containers/Login'
import Register from './containers/Register'
import Users from './containers/Users'
import App from './containers/App';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

export const routes =
    <div>
        <PrivateRoute exact path="/" component={App}/>
        <PrivateRoute path="/about" component={About}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/register" component={Register} />
        <PrivateRoute path="/users" component={Users} />
        <PrivateRoute path="/tracks/:id" component={Track}/>
    </div>