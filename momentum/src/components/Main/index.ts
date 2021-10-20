import baseComponent from '../baseComponent';

import './style.scss';

const main = baseComponent('main', ['main']);

main.innerHTML = `
  <div class="slider-icons">
    <button class="slide-prev slider-icon"></button>
    <button class="slide-next slider-icon"></button>
  </div>
  <time class="time"></time>
  <date class="date"></date>
  <div class="greeting-container">
    <span class="greeting"></span>
    <input type="text" class="name" />
  </div>
`;

export default main;
