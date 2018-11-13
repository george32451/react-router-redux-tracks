import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tracks from './tracks';
import filterTracks from './filterTracks';
import login from './login'

export default combineReducers({
  routing: routerReducer,
  tracks,
  filterTracks,
  login,
});
