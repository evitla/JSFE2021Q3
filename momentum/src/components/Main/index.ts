import baseComponent from '../baseComponent';
import sliderIcons from './sliderIcons';
import { date, time } from './timeAndDate';
import greetingContainer from './greeting';

import './style.scss';

const main = baseComponent('main', ['main']);

main.appendChild(sliderIcons);
main.appendChild(time);
main.appendChild(date);
main.appendChild(greetingContainer);

export default main;
