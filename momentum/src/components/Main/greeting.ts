import baseComponent from '../baseComponent';
import { getLocalStorage, getTimeOfDay, setLocalStorage } from '../utils';

const greetingContainer = baseComponent('div', ['greeting-container']);
const greeting = baseComponent('span', ['greeting']);
const nameInput = baseComponent('input', ['name']) as HTMLInputElement;
nameInput.type = 'text';
nameInput.placeholder = '[Enter name]';
nameInput.value = getLocalStorage('user-name');

export const showGreeting = (currentDate: Date): void => {
  greeting.textContent = `Good ${getTimeOfDay(currentDate)}`;
};

nameInput.onchange = () => setLocalStorage('user-name', nameInput);

greetingContainer.appendChild(greeting);
greetingContainer.appendChild(nameInput);

export default greetingContainer;
