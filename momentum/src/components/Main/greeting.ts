import baseComponent from '../baseComponent';
import { getTimeOfDay } from '../utils';

const greetingContainer = baseComponent('div', ['greeting-container']);
const greeting = baseComponent('span', ['greeting']);
const nameInput = baseComponent('input', ['name']) as HTMLInputElement;
nameInput.type = 'text';
nameInput.placeholder = '[Enter name]';

export const showGreeting = (currentDate: Date): void => {
  greeting.textContent = `Good ${getTimeOfDay(currentDate)}`;
};

greetingContainer.appendChild(greeting);
greetingContainer.appendChild(nameInput);

export default greetingContainer;
