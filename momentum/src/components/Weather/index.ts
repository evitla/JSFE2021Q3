import { weatherAppId } from '../../constants';
import baseComponent from '../baseComponent';
import store from '../store';
import { setLocalStorage } from '../utils';

import './style.scss';

const weather = baseComponent('weather', ['weather']);

if (!store.blocks.includes('weather')) weather.classList.add('non-visible');

const cityName = baseComponent('input', ['city']) as HTMLInputElement;
cityName.type = 'text';

const weatherIcon = baseComponent('i', ['weather-icon', 'owf']);
const weatherError = baseComponent('div', ['weather-error']);
const descriptionContainer = baseComponent('div', ['description-container']);
const temperature = baseComponent('span', ['temperature']);
const weatherDescription = baseComponent('span', ['weather-description']);
const wind = baseComponent('div', ['wind']);
const humidity = baseComponent('div', ['humidity']);

const getWeather = async () => {
  const currentCity = store.city;

  const weatherUrl = `
    https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&lang=en&APPID=${weatherAppId}&units=metric
  `;

  try {
    const data = await (await fetch(weatherUrl)).json();

    weatherError.innerHTML = '';
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);

    cityName.value = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
  } catch {
    weatherError.innerHTML = `${currentCity} city not found`;

    temperature.textContent = '';
    weatherDescription.textContent = '';
    wind.textContent = '';
    humidity.textContent = '';
  }
};

getWeather();

cityName.onchange = () => {
  setLocalStorage('city', cityName.value);
  store.city = cityName.value;
  getWeather();
};

descriptionContainer.appendChild(temperature);
descriptionContainer.appendChild(weatherDescription);

weather.appendChild(cityName);
weather.appendChild(weatherIcon);
weather.appendChild(weatherError);
weather.appendChild(descriptionContainer);
weather.appendChild(wind);
weather.appendChild(humidity);
export default weather;
