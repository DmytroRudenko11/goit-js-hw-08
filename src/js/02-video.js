import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(setTime, 1000));

function setTime({ seconds, percent }) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
  localStorage.setItem('videoplayer-current-percent', JSON.stringify(percent));
  console.log(localStorage.getItem('videoplayer-current-percent'));
  if (Number(localStorage.getItem('videoplayer-current-percent')) > 0.99) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(0));
  }
}

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time'))
);
