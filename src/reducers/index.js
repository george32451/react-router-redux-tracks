import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { reducer as reduxFormReducer } from 'redux-form';

import { tracks } from './tracks';
import filterTracks from './filterTracks';
import { login } from './login'

export default (history) => combineReducers({
  router: connectRouter(history),
  form: reduxFormReducer,
  tracks,
  filterTracks,
  login,
});
