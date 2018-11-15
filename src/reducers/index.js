import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

import tracks from './tracks';
import filterTracks from './filterTracks';
import { login } from './login'

export default combineReducers({
  routing: routerReducer,
  form: reduxFormReducer,
  tracks,
  filterTracks,
  login,
});
