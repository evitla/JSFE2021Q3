import baseComponent from '../baseComponent';

const sliderIcons = baseComponent('div', ['slider-icons']);
const prevButton = baseComponent('button', ['slide-prev', 'slider-icon']);
const nextButton = baseComponent('button', ['slide-next', 'slider-icon']);

sliderIcons.appendChild(prevButton);
sliderIcons.appendChild(nextButton);

export default sliderIcons;
