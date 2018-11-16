import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './components/App';
import './index.css';
import './App.css';
import reducer from './reducers';
import About from './containers/About';
import Track from './components/Track';
import Login from './components/Login'
import Register from './components/Register'
import Users from './containers/Users'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <div className='container'>
      <div className='row'>
          <Provider store={store}>
              <Router history={history}>
                  <Route path="/" component={App}/>
                  <Route path="/about" component={About}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/register" component={Register} />
                  <Route path="/users" component={Users} />
                  <Route path="/tracks/:id" component={Track}/>
              </Router>
          </Provider>
      </div>
  </div>,
  document.getElementById('root')
);

