import baseComponent from '../baseComponent';
import navbar from '../header/navbar';
import {
  facebookIcon,
  instagramIcon,
  logoIcon,
  pinterestIcon,
  twitterIcon,
  youtubeIcon,
} from '../icons';

import './footer.scss';

const footer = baseComponent('footer', ['black-bg']);
const footerWrapper = baseComponent('div', ['wrapper', 'footer-wrapper']);
const footerContainer = baseComponent('div', ['footer-container']);

const navItems = [
  'Visiting',
  'Explore',
  'Video',
  'Gallery',
  'Tickets',
  'Contact',
];

const logo = baseComponent('div', ['logo', 'footer-logo']);
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
nav.className = 'footer-nav';

const socialIcons = [
  youtubeIcon,
  instagramIcon,
  facebookIcon,
  twitterIcon,
  pinterestIcon,
];

const socialUrl = [
  'https://www.youtube.com/',
  'https://www.instagram.com/',
  'https://www.facebook.com/',
  'https://twitter.com/',
  'https://www.pinterest.com/',
];

const socialNav = navbar(socialIcons, socialUrl);

socialNav.className = 'social-nav';

const copyrights = baseComponent('div', ['copyrights']);
copyrights.innerHTML = `
  <span>&copy; 2021</span>
  <a href="https://rs.school/" target="_blank">The Rolling Scopes School</a>
  <a href="https://github.com/evitla" target="_blank">evitla</a>
`;

footerContainer.appendChild(logo);
footerContainer.appendChild(nav);
footerContainer.appendChild(socialNav);
footerWrapper.appendChild(footerContainer);
footerWrapper.appendChild(copyrights);
footer.appendChild(footerWrapper);

export default footer;
