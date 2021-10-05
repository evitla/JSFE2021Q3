import baseComponent from '../../baseComponent';

import logoSrc from '../../../assets/images/welcome-slider/1.jpg';

import './welcome.scss';
import { arrowLeftIcon, arrowRightIcon } from '../../icons';

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

const welcomeSlider = baseComponent('div', ['welcome-slider']);
welcomeSlider.innerHTML = `
  <img class="invisible" src=${logoSrc} alt="">
`;
const welcomeSliderPagination = baseComponent('div', ['pagination']);
welcomeSliderPagination.innerHTML = `
  <span>01 | 05</span>
  <ul>
    <li class="pagination-list-item active"></li>
    <li class="pagination-list-item"></li>
    <li class="pagination-list-item"></li>
    <li class="pagination-list-item"></li>
    <li class="pagination-list-item"></li>
  </ul>
  <div class="arrows">
    ${arrowLeftIcon}
    ${arrowRightIcon}
  </div>
`;

welcomeSlider.appendChild(welcomeSliderPagination);
welcomeWrapper.appendChild(welcomeContent);
welcomeWrapper.appendChild(welcomeSlider);
welcomeSection.appendChild(welcomeWrapper);

export default welcomeSection;
