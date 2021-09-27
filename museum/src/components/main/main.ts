import baseComponent from '../baseComponent';
import welcomeSection from './welcome/welcome';
import virtualSection from './virtual/virtual';

import './main.scss';

const main = baseComponent('main');

main.appendChild(welcomeSection);
main.appendChild(virtualSection);

export default main;
