import React from 'react'
import { Route } from 'react-router-dom';
import About from './components/About';
import Track from './containers/Track';
import Login from './containers/Login'
import Register from './containers/Register'
import Users from './containers/Users'
import App from './containers/App';


export const routes =
    <div>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register} />
        <Route path="/users" component={Users} />
        <Route path="/tracks/:id" component={Track}/>
    </div>