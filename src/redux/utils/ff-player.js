import { remote } from 'electron';

const init = fileTrack => remote.app.initPlayer(fileTrack);

const pause = player => player && player.kill('SIGSTOP');

const play = player => player && player.kill('SIGCONT');

const reset = player => player.kill();


export default {
  init,
  pause,
  play,
  reset,
}