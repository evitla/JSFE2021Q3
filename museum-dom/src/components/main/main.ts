import baseComponent from '../baseComponent';
import welcomeSection from './welcome';
import virtualSection from './virtual';
import exploreSection from './explore';
import videoSection from './video';
import gallerySection from './gallery';
import ticketsSection from './tickets';
import contactsSection from './contacts';

import './main.scss';

const main = baseComponent('main');

const parallax = baseComponent('div', ['parallax']);

main.appendChild(welcomeSection);
main.appendChild(virtualSection);
main.appendChild(exploreSection);
main.appendChild(videoSection);
main.appendChild(gallerySection);
main.appendChild(ticketsSection);
main.appendChild(parallax);
main.appendChild(contactsSection);

export default main;
