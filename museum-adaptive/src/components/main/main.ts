import baseComponent from '../baseComponent';
import welcomeSection from './welcome/welcome';
import virtualSection from './virtual/virtual';
import exploreSection from './explore/explore';
import videoSection from './video/video';
import gallerySection from './gallery/gallery';
import ticketsSection from './tickets/tickets';
import contactsSection from './contacts/contacts';

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
