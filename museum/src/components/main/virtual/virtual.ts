import baseComponent from '../../baseComponent';
import tourCard from './tourCard';

import img1 from '../../../assets/images/virtual-tour/1.jpg';
import img2 from '../../../assets/images/virtual-tour/2.jpg';
import img3 from '../../../assets/images/virtual-tour/3.jpg';
import img4 from '../../../assets/images/virtual-tour/4.jpg';
import img5 from '../../../assets/images/virtual-tour/5.jpg';
import img6 from '../../../assets/images/virtual-tour/6.jpg';

import './virtual.scss';

const virtualSection = baseComponent('section', ['virtual', 'white-bg']);
virtualSection.id = 'visiting';

const virtualWrapper = baseComponent('div', ['wrapper', 'virtual-wrapper']);
const virtualCards = baseComponent('div', ['virtual-cards']);
virtualWrapper.innerHTML = `
  <h2 class="section-title title-with-line">Virtual Tour</h2>
`;

const cardTitles = [
  'Royal Palace',
  'Denon Wing',
  'Colonnade Perrault',
  'Greek Hall',
  'Mona Lisa',
  'Night Palace',
];

const imgs = [img1, img2, img3, img4, img5, img6];

cardTitles.forEach((title, index) => {
  const card = tourCard(title, imgs[index], `./tour${index + 2}.html`);
  virtualCards.appendChild(card);
});

virtualWrapper.appendChild(virtualCards);
virtualSection.appendChild(virtualWrapper);

export default virtualSection;
