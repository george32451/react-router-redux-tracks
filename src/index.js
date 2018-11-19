import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Route, HashRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history';
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

const history = createBrowserHistory();
const store = createStore(reducer(history), composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <div className='container'>
      <div className='row'>
          <Provider store={store}>
              <ConnectedRouter history={history}>
                  <HashRouter>
                      <div>
                          <Route exact path="/" component={App}/>
                          <Route path="/about" component={About}/>
                          <Route path="/login" component={Login}/>
                          <Route path="/register" component={Register} />
                          <Route path="/users" component={Users} />
                          <Route path="/tracks/:id" component={Track}/>
                      </div>
                  </HashRouter>
              </ConnectedRouter>
          </Provider>
      </div>
  </div>,
  document.getElementById('root')
);

