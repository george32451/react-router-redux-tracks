import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { HashRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css';
import './App.css';
import reducer from './reducers';
import { routes } from "./Routes";

const history = createBrowserHistory();
const store = createStore(reducer(history), composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <div className='container'>
      <div className='row'>
          <Provider store={store}>
              <ConnectedRouter history={history}>
                  <HashRouter>
                      {routes}
                  </HashRouter>
              </ConnectedRouter>
          </Provider>
      </div>
  </div>,
  document.getElementById('root')
);

