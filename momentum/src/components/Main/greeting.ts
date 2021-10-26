import { timesOfDay } from '../../constants';
import baseComponent from '../baseComponent';
import store from '../store';
import { getTimeOfDay, setLocalStorage } from '../utils';

const greetingContainer = baseComponent('div', ['greeting-container']);

if (!store.blocks.includes('greeting'))
  greetingContainer.classList.add('non-visible');

const greeting = baseComponent('span', ['greeting']);
const nameInput = baseComponent('input', ['name']) as HTMLInputElement;
nameInput.type = 'text';
nameInput.placeholder = '[Enter name]';
nameInput.value = store.username;

export const showGreeting = (currentDate: Date): void => {
  greeting.textContent =
    store.language === 'en'
      ? `Good ${getTimeOfDay(currentDate)}`
      : timesOfDay[getTimeOfDay(currentDate)];
};

nameInput.onchange = () => setLocalStorage('username', nameInput.value);

greetingContainer.appendChild(greeting);
greetingContainer.appendChild(nameInput);

export default greetingContainer;
