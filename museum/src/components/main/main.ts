import baseComponent from '../baseComponent';

import logoSrc from '../../assets/images/welcome-slider/1.jpg';

import './welcome.scss';

const main = baseComponent('main');
const welcomeWrapper = baseComponent('div', ['wrapper', 'welcome-wrapper']);

const welcomeSection = baseComponent('section', ['welcome', 'black-bg']);
const welcomeContent = baseComponent('div', ['welcome-content']);
welcomeContent.innerHTML = `
  <h2 class="section-title">Welcome</br> to the Louvre</h2>
  <p>From the castle to the museum</p>
  <a class="btn">Discover the Louvre</a>
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
  <svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.72254 8C3.90173 6.31339 1.99422 5.08262 0 4.30769V3.69231C1.99422 2.89459 3.90173 1.66382 5.72254 0H7.23988C6.37283 1.4359 5.53468 2.52991 4.72543 3.28205H30V4.71795H4.72543C5.53468 5.47009 6.37283 6.5641 7.23988 8H5.72254Z" fill="white"/>
  </svg>
  <svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.2775 1.97284e-06C26.0983 1.68661 28.0058 2.91738 30 3.69231L30 4.30769C28.0058 5.10541 26.0983 6.33618 24.2775 8L22.7601 8C23.6272 6.5641 24.4653 5.47009 25.2746 4.71795L3.48964e-07 4.71795L5.01636e-07 3.28205L25.2746 3.28205C24.4653 2.52992 23.6272 1.4359 22.7601 1.86378e-06L24.2775 1.97284e-06Z" fill="white"/>
  </svg>
  </div>
`;

welcomeSlider.appendChild(welcomeSliderPagination);
welcomeSection.appendChild(welcomeWrapper);
welcomeWrapper.appendChild(welcomeContent);
welcomeWrapper.appendChild(welcomeSlider);
main.appendChild(welcomeSection);

export default main;
