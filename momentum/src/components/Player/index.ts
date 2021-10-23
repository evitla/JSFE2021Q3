import baseComponent from '../baseComponent';
import unorderedList from '../unorderedList';

import { playList } from '../../constants';

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

  audio.src = playList[songId].src;
  audio.currentTime = audioCurrentTime;
  audio.play();
  isPlay = true;
};

let currentSongId = 0;
playListContainer.children[0].classList.add('active');

const handlePlayerController = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (target.tagName !== 'BUTTON') return;

  if (target.classList.contains('play')) {
    playAudio(currentSongId);
    target.classList.toggle('pause');
    return;
  }

  if (target.classList.contains('play-prev')) currentSongId--;
  else if (target.classList.contains('play-next')) currentSongId++;

  if (currentSongId < 0) currentSongId = playList.length - 1;
  else if (currentSongId >= playList.length) currentSongId = 0;

  Array.from(playListContainer.children, (li, index) => {
    li.classList.remove('active');
    if (index === currentSongId) li.classList.add('active');
    return null;
  });

  audioCurrentTime = 0;
  if (isPlay) playAudio(currentSongId, false);
};

playerControls.onclick = handlePlayerController;
audio.onended = () => {
  isPlay = false;
  playListContainer.children[currentSongId].classList.toggle('active');

  currentSongId++;
  if (currentSongId >= playList.length) currentSongId = 0;
  playListContainer.children[currentSongId].classList.toggle('active');
  playAudio(currentSongId);
};

playerControls.appendChild(playPrevButton);
playerControls.appendChild(playButton);
playerControls.appendChild(playNextButton);
player.appendChild(playerControls);
player.appendChild(playListContainer);

export default player;
