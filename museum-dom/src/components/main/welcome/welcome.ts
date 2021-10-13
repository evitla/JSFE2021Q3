import baseComponent from '../../baseComponent';

import img1 from '../../../assets/images/welcome-slider/1.jpg';
import img2 from '../../../assets/images/welcome-slider/2.jpg';
import img3 from '../../../assets/images/welcome-slider/3.jpg';
import img4 from '../../../assets/images/welcome-slider/4.jpg';
import img5 from '../../../assets/images/welcome-slider/5.jpg';

import './welcome.scss';
import slider from './slider';

export const welcomeWrapper = baseComponent('div', [
  'wrapper',
  'welcome-wrapper',
]);

const welcomeSection = baseComponent('section', ['welcome', 'black-bg']);
welcomeSection.id = 'welcome';

export const welcomeContent = baseComponent('div', ['welcome-content']);
welcomeContent.innerHTML = `
  <h2 class="section-title">Welcome</br> to the Louvre</h2>
  <p>From the castle to the museum</p>
  <a class="btn" href="./tour1.html" target="_blank">Discover the Louvre</a>
`;

const images = [img1, img2, img3, img4, img5];

const welcomeSwiper = slider('welcome', images);

welcomeWrapper.appendChild(welcomeContent);
welcomeWrapper.appendChild(welcomeSwiper);
welcomeSection.appendChild(welcomeWrapper);

export default welcomeSection;
