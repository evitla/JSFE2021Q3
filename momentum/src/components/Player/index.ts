import baseComponent from '../baseComponent';
import unorderedList from '../unorderedList';

import playList from '../../constants';

import './style.scss';

const player = baseComponent('div', ['player']);

const playListContainer = unorderedList(
  playList.map((p) => p.title),
  ['play-list']
);

const playerControls = baseComponent('div', ['player-controls']);
const playPrevButton = baseComponent('button', ['play-prev', 'player-icon']);
const playButton = baseComponent('button', ['play', 'player-icon']);
const playNextButton = baseComponent('button', ['play-next', 'player-icon']);

const audio = new Audio();

let audioCurrentTime = 0;
let isPlay = false;

const playAudio = (songId: number, canPause = true) => {
  if (isPlay && canPause) {
    audio.pause();
    audioCurrentTime = audio.currentTime;
    isPlay = false;
    return;
  }

  Array.from(playListContainer.children, (li, index) => {
    li.classList.remove('active');
    if (index === songId) li.classList.add('active');
    return null;
  });

  audio.src = playList[songId].src;
  audio.currentTime = audioCurrentTime;
  audio.play();
  isPlay = true;
};

playerControls.appendChild(playPrevButton);
playerControls.appendChild(playButton);
playerControls.appendChild(playNextButton);
player.appendChild(playerControls);
player.appendChild(playListContainer);

export default player;
