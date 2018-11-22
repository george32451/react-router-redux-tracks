import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { getTracks, addTrack, findTrack } from '../actions/tracks';
import Menu from '../components/Menu';

class App extends React.Component {
    render() {
        const { getTracks, tracks, addTrack, findTrack, } = this.props;
        let trackInput = '';
        let searchInput = '';

        const onAddTrack = () => {
            addTrack(trackInput.value);
            trackInput.value = '';
        }

        const onFindTrack = () => {
            findTrack(searchInput.value);
        }

        return (

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Menu/>
                    </div>
                    <div className='col-md-9'>
                        <h2>Трэки</h2>
                        <div>
                            <input type="text" ref={(input) => { trackInput = input }} />
                            <button className='btn btn-secondary' onClick={onAddTrack}>Add</button>
                        </div>
                        <div>
                            <input type="text" ref={(input) => { searchInput = input }} />
                            <button  className='btn btn-secondary' onClick={onFindTrack}>Find</button>
                        </div>
                        <div>
                            <button className='btn btn-secondary' onClick={getTracks}>Load</button>
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

}

const mapStateToProps = (state) => {
    return {
        tracks: state.tracks.tracklist.filter(track => track.name.includes(state.filterTracks)),
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getTracks,
        addTrack,
        findTrack,
    },
    dispatch
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
