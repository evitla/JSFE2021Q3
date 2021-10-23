import { WEATHER_URL } from '../../constants';
import baseComponent from '../baseComponent';

import './style.scss';

const weather = baseComponent('weather', ['weather']);

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
  const data = await (await fetch(WEATHER_URL)).json();

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);

  cityName.value = data.name;
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
};

getWeather();

descriptionContainer.appendChild(temperature);
descriptionContainer.appendChild(weatherDescription);

weather.appendChild(cityName);
weather.appendChild(weatherIcon);
weather.appendChild(weatherError);
weather.appendChild(descriptionContainer);
weather.appendChild(wind);
weather.appendChild(humidity);
export default weather;
