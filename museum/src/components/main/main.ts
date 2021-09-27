import baseComponent from '../baseComponent';
import welcomeSection from './welcome/welcome';
import virtualSection from './virtual/virtual';
import exploreSection from './explore/explore';
import videoSection from './video/video';

import './main.scss';

const main = baseComponent('main');

main.appendChild(welcomeSection);
main.appendChild(virtualSection);
main.appendChild(exploreSection);
main.appendChild(videoSection);

export default main;
