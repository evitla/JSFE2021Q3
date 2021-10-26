import baseComponent from '../baseComponent';
import store from '../store';
import { getRandomNumber, setBackground } from '../utils';

const sliderIcons = baseComponent('div', ['slider-icons']);
const prevButton = baseComponent('button', ['slide-prev', 'slider-icon']);
const nextButton = baseComponent('button', ['slide-next', 'slider-icon']);

const [minBgNum, maxBgNum] = [1, 20];

let bgNum = getRandomNumber(minBgNum, maxBgNum);

export const handlePhotoSource = (photoSource: string): void => {
  setBackground(document.body, photoSource, bgNum);
};

handlePhotoSource(store.background);

const getPrevSlide = () => {
  bgNum = bgNum === minBgNum ? maxBgNum : bgNum - 1;
  setBackground(document.body, store.background, bgNum);
};

const getNextSlide = () => {
  bgNum = bgNum === maxBgNum ? minBgNum : bgNum + 1;
  setBackground(document.body, store.background, bgNum);
};

prevButton.onclick = getPrevSlide;
nextButton.onclick = getNextSlide;

sliderIcons.appendChild(prevButton);
sliderIcons.appendChild(nextButton);

export default sliderIcons;
