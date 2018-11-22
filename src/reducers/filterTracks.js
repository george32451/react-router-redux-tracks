import { FIND_TRACK } from "../constants/tracks";

const initialState = '';

const filterTracks = (state = initialState, action) => {
  if (action.type === FIND_TRACK) {
    return action.payload;
  }
  return state;
}

export default filterTracks
