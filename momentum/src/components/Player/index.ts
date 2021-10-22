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

playerControls.appendChild(playPrevButton);
playerControls.appendChild(playButton);
playerControls.appendChild(playNextButton);
player.appendChild(playerControls);
player.appendChild(playListContainer);

export default player;
