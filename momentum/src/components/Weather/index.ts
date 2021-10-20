import baseComponent from '../baseComponent';

import './style.scss';

const weather = baseComponent('weather', ['weather']);

weather.innerHTML = `
  <input type="text" class="city" />
  <i class="weather-icon owf"></i>
  <div class="weather-error"></div>
  <div class="description-container">
    <span class="temperature"></span>
    <span class="weather-description"></span>
  </div>
  <div class="wind"></div>
  <div class="humidity"></div>
`;

export default weather;
