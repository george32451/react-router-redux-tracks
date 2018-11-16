import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getTracks } from '../actions/tracks';
import Menu from '../containers/Menu';

const App = ({ tracks, onAddTrack, onFindTrack, onGetTracks, ownProps }) => {
  let trackInput = '';
  let searchInput = '';

  const addTrack = () => {
      onAddTrack(trackInput.value);
      trackInput.value = '';
  }

  const findTrack = () => {
    console.log('findTrack', searchInput.value);
    onFindTrack(searchInput.value);
  }

  return (

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <Menu/>
                </div>
                <div className='col-md-7'>
                    <h2>Трэки</h2>
                    <div>
                        <input type="text" ref={(input) => { trackInput = input }} />
                        <button className='btn btn-secondary' onClick={addTrack}>Add</button>
                    </div>
                    <div>
                        <input type="text" ref={(input) => { searchInput = input }} />
                        <button  className='btn btn-secondary' onClick={findTrack}>Find</button>
                    </div>
                    <div>
                        <button className='btn btn-secondary' onClick={onGetTracks}>Load</button>
                    </div>
                    <ul>
                        {tracks.map((track, index) =>
                            <li key={index}>
                                <Link to={`/tracks/${track.id}`}>{track.name}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>

  );
}

export default connect(
  (state, ownProps) => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
    ownProps
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({ type: 'ADD_TRACK', payload });
    },
    onFindTrack: (name) => {
      console.log('name', name);
      dispatch({ type: 'FIND_TRACK', payload: name});
    },
    onGetTracks: () => {
      dispatch(getTracks());
    }
  })
)(App);
