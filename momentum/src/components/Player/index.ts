import baseComponent from '../baseComponent';
import unorderedList from '../unorderedList';

import { getTimeCodeFromNum } from '../utils';
import { playList } from '../../constants';

import './style.scss';
import store from '../store';

const player = baseComponent('div', ['player']);

if (!store.blocks.includes('audio')) player.classList.add('non-visible');

const playListContainer = unorderedList(
  playList.map((p) => p.title),
  ['play-list']
);

let currentSongId = 0;
let audioCurrentTime = 0;
let isPlay = false;

const timeline = baseComponent('div', ['timeline']);
const progressBar = baseComponent('div', ['progress']);

const playerController = baseComponent('div', ['controls']);

const playerButtons = baseComponent('div', ['play-container']);
const playPrevButton = baseComponent('button', ['play-prev', 'player-icon']);
const playButton = baseComponent('button', ['play', 'player-icon']);
const playNextButton = baseComponent('button', ['play-next', 'player-icon']);

const audioTime = baseComponent('div', ['autio-time']);
const currentTime = baseComponent('div', ['current']);
currentTime.textContent = '0:00';
const divider = baseComponent('div', ['divider']);
divider.innerHTML = '&nbsp;/&nbsp;';
const audioDuration = baseComponent('div', ['duration']);

const audioTitle = baseComponent('div', ['audio-title']);

const audio = new Audio(playList[currentSongId].src);

audioDuration.textContent = playList[currentSongId].duration;
audioTitle.textContent = playList[currentSongId].title;

const handleTimeline = (e: MouseEvent) => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = (e.offsetX / parseInt(timelineWidth, 10)) * audio.duration;
  audio.currentTime = timeToSeek;
  audioCurrentTime = timeToSeek;
};

timeline.addEventListener('click', handleTimeline, false);

setInterval(() => {
  progressBar.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
  currentTime.textContent = getTimeCodeFromNum(audio.currentTime);
}, 500);

const playAudio = (songId: number, canPause = true) => {
  if (isPlay && canPause) {
    playButton.classList.remove('pause');
    audio.pause();
    audioCurrentTime = audio.currentTime;
    isPlay = false;
    return;
  }
  playButton.classList.add('pause');
  playListContainer.children[songId].classList.add('active');

  audioDuration.textContent = playList[songId].duration;
  audioTitle.textContent = playList[songId].title;

  audio.src = playList[songId].src;
  audio.currentTime = audioCurrentTime;
  audio.play();
  isPlay = true;
};

const handlePlayerController = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (target.tagName !== 'BUTTON') return;

  if (target.classList.contains('play')) {
    playAudio(currentSongId);
    return;
  }

  if (target.classList.contains('play-prev')) currentSongId--;
  else if (target.classList.contains('play-next')) currentSongId++;

  if (currentSongId < 0) currentSongId = playList.length - 1;
  else if (currentSongId >= playList.length) currentSongId = 0;

  audioDuration.textContent = playList[currentSongId].duration;
  audioTitle.textContent = playList[currentSongId].title;

  Array.from(playListContainer.children, (li) => {
    li.classList.remove('active');
    return null;
  });

  audioCurrentTime = 0;
  playAudio(currentSongId, false);
};

playerController.onclick = handlePlayerController;

audio.onended = () => {
  isPlay = false;
  playListContainer.children[currentSongId].classList.toggle('active');

  currentSongId++;
  if (currentSongId >= playList.length) currentSongId = 0;
  audioCurrentTime = 0;
  playAudio(currentSongId);
};

timeline.append(progressBar);
playerButtons.append(playPrevButton, playButton, playNextButton);
audioTime.append(currentTime, divider, audioDuration);
playerController.append(playerButtons, audioTime, audioTitle);
player.append(timeline, playerController, playListContainer);

export default player;
