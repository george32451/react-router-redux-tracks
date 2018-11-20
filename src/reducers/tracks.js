import { FETCH_TRACKS_SUCCESS, ADD_TRACK } from "../constants/tracks";

const initialState = {
  tracklist: [
      {
          id: 1234,
          name: 'My super track'
      },
  ]
};

export const tracks = (state = initialState, action) => {
  switch(action.type) {
      case ADD_TRACK:
        return {
            ...state,
            tracklist: [
              ...state.tracklist,
              action.payload,
            ]
        };
      case FETCH_TRACKS_SUCCESS:
        return action.payload;
      default:
          return state;
  }
}
