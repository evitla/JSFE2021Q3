import Swiper, { Navigation, Pagination } from 'swiper';
import '../../../../node_modules/swiper/swiper-bundle.css';

import baseComponent from '../../baseComponent';

Swiper.use([Navigation, Pagination]);

const slider = (className: string, images: string[]): HTMLElement => {
  const element = baseComponent('div', ['swiper', `${className}-swiper`]);

  const slides = images.map(
    (img, index) =>
      `
      <div class="swiper-slide" data-number="${index}">
        <img class="invisible" src=${img} alt="">
      </div>
    `
  );

  element.innerHTML = `
    <div class="swiper-wrapper">
      ${slides.join('')}
    </div>
    <div class="${className}-swiper-controller">
      <div class="swiper-pages">
        <span id="curr-page">01</span><span> | 0${images.length}</span>
      </div>
      <div class="swiper-pagination"></div>
      <div class="${className}-swiper-buttons">
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  `;
  const swiper = new Swiper(element, {
    loop: true,

    pagination: {
      el: element.querySelector('.swiper-pagination') as HTMLElement,
      clickable: true,
      type: 'bullets',
    },

    navigation: {
      nextEl: element.querySelector('.swiper-button-next') as HTMLElement,
      prevEl: element.querySelector('.swiper-button-prev') as HTMLElement,
    },
  });

  const currPage = element.querySelector('#curr-page');

  element.addEventListener('transitionend', () => {
    currPage.innerHTML = (swiper.activeIndex % images.length || images.length)
      .toString()
      .padStart(2, '0');
  });

  return element;
};

export default slider;
