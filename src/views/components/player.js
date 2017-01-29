import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../redux/ducks/player/actions';

class Player extends Component {
  render() {
    const { isPlaying, setFileTrack, play, pause } = this.props;
    return (
      <div>
        <input type="file" onChange={(e) => setFileTrack(e.target.files[0])} />
        <button onClick={() => isPlaying ? pause() : play()}>{isPlaying ? 'PAUSE' : 'PLAY'}</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    track: state.player.track,
    isPlaying: state.player.isPlaying,
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);