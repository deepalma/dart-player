import types from './types';
import FfPlayer from '../../utils/ff-player';

const init = (fileTrack) => (dispatch, getState) => {
  const player = fileTrack && FfPlayer.init(fileTrack);
  if (player) {
    dispatch({
      type: types.INIT,
      payload: player,
    });
  }
};

export const pause = () => (dispatch, getState) => {
  const { isPlaying, player } = getState().player;
  if (isPlaying) {
    FfPlayer.pause(player);
    dispatch({
      type: types.PAUSE,
    });
  }
};

export const reset = () => (dispatch, getState) => {
  const { isPlaying, player } = getState().player;
  isPlaying && FfPlayer.reset(player);
  dispatch({
   type: types.RESET,
  });
}

export const setFileTrack = (fileTrack) => (dispatch, getState) => {
  dispatch(reset());
  dispatch(init(fileTrack));
  dispatch(pause());
  dispatch({
    type: types.SET_FILE_TRACK,
    payload: { fileTrack }
  });
}

export const play = () => (dispatch, getState) => {
  const { isPlaying, fileTrack, player } = getState().player;
  if (fileTrack && !isPlaying) {
    FfPlayer.play(player, isPlaying);
    dispatch({
      type: types.PLAY,
    });
  }
};
