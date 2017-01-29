import types from './types';

const initialState = {
  isPlaying: false,
  player: null,
  fileTrack: null,
};

const player = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT:
      const player = action.payload;
      return { ...state, isPlaying: true, player }
    case types.PAUSE:
      return { ...state, isPlaying: false }  
    case types.PLAY:
      return { ...state, isPlaying: true }  
    case types.RESET:
      return { ...state, isPlaying: false, player: null, fileTrack: null }
    case types.SET_FILE_TRACK:
      const { fileTrack } = action.payload;
      return { ...state, fileTrack }
    default: 
      return state;
  }
};

export default player;