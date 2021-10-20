import baseComponent from '../baseComponent';

import './style.scss';

const player = baseComponent('div', ['player']);

player.innerHTML = `
  <div class="player-controls">
    <button class="play-prev player-icon"></button>
    <button class="play player-icon"></button>
    <button class="play-next player-icon"></button>
  </div>
  <ul class="play-list"></ul>
`;

export default player;
