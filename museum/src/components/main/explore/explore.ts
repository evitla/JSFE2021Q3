import baseComponent from '../../baseComponent';

import imgSrc from '../../../assets/images/explore.png';

import './explore.scss';

const exploreSection = baseComponent('section', ['virtual', 'black-bg']);
const exploreWrapper = baseComponent('div', ['wrapper', 'explore-wrapper']);
exploreWrapper.innerHTML = `
  <div class="explore-left-side">
    <h2 class="section-title title-with-line">Picture Explore</h2>
    <p class="explore-text">
      Las Meninas is a 1656 painting by Diego Velázquez, the leading artist of the Spanish Golden Age.
    </p>
    <p class="explore-text">
      It was cleaned in 1984 to remove a <span>"yellow veil"</span> of dust that had gathered since the previous
      restoration in the 19th century.
    </p>
    <p class="explore-text">
      The cleaning provoked furious protests, not because the picture had been damaged in any way, but because
      it looked different.
    </p>
  </div>
  <div class="explore-right-side">
    <img src=${imgSrc} alt="">
  </div>
`;

exploreSection.appendChild(exploreWrapper);

export default exploreSection;
