import baseComponent from '../baseComponent';
import welcomeSection from './welcome/welcome';

const main = baseComponent('main');

main.appendChild(welcomeSection);

export default main;
