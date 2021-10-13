import baseComponent from '../baseComponent';
import navbar from './navbar';

import { arrowIcon, logoIcon } from '../icons';

import './header.scss';
import { welcomeContent, welcomeWrapper } from '../main/welcome';

const navItems = [
  'Visiting',
  'Explore',
  'Video',
  'Gallery',
  'Tickets',
  'Contact',
].map((item) => `${item}\n${arrowIcon}`);

const header = baseComponent('header', ['black-bg']);
const wrapper = baseComponent('div', ['wrapper', 'header-wrapper']);
const logo = baseComponent('div', ['logo']);
logo.innerHTML = `
  <a href="#">
    ${logoIcon} 
    <h1>Louvre</h1>
  </a>
`;
const nav = navbar(
  navItems,
  ['nav-list'],
  navItems.map((item) => `#${item.split('\n')[0].toLowerCase()}`)
);

const burger = baseComponent('div', ['burger']);
burger.innerHTML = `
  <div class="burger__line line1"></div>
  <div class="burger__line line2"></div>
  <div class="burger__line line3"></div>
`;

burger.onclick = () => {
  burger.classList.toggle('open-menu');
  nav.classList.toggle('open-menu');
  welcomeContent.classList.toggle('open-menu');
  welcomeWrapper.classList.toggle('open-menu');
};

document.body.onclick = (e) => {
  const target = e.target as HTMLElement;
  if (!target.className.startsWith('burger')) {
    burger.classList.remove('open-menu');
    nav.classList.remove('open-menu');
    welcomeContent.classList.remove('open-menu');
    welcomeWrapper.classList.remove('open-menu');
  }
};

wrapper.appendChild(logo);
wrapper.appendChild(nav);
wrapper.appendChild(burger);

header.appendChild(wrapper);

export default header;
