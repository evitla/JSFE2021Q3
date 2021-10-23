import baseComponent from '../baseComponent';
import sliderIcons from './sliderIcons';

import './style.scss';

const main = baseComponent('main', ['main']);

const time = baseComponent('time', ['time']);
const date = baseComponent('date', ['date']);

const greetingContainer = baseComponent('div', ['greeting-container']);
const greeting = baseComponent('span', ['greeting']);
const nameInput = baseComponent('input', ['name']) as HTMLInputElement;
nameInput.type = 'text';

greetingContainer.appendChild(greeting);
greetingContainer.appendChild(nameInput);

main.appendChild(sliderIcons);
main.appendChild(time);
main.appendChild(date);
main.appendChild(greetingContainer);

export default main;
