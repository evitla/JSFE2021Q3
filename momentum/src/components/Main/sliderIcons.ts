import baseComponent from '../baseComponent';
import { getRandomNumber, setBackground } from '../utils';

const sliderIcons = baseComponent('div', ['slider-icons']);
const prevButton = baseComponent('button', ['slide-prev', 'slider-icon']);
const nextButton = baseComponent('button', ['slide-next', 'slider-icon']);

const [minBgNum, maxBgNum] = [1, 20];

let bgNum = getRandomNumber(minBgNum, maxBgNum);
setBackground(document.body, bgNum);

const getPrevSlide = () => {
  bgNum = bgNum === minBgNum ? maxBgNum : bgNum - 1;
  setBackground(document.body, bgNum);
};

const getNextSlide = () => {
  bgNum = bgNum === maxBgNum ? minBgNum : bgNum + 1;
  setBackground(document.body, bgNum);
};

prevButton.onclick = getPrevSlide;
nextButton.onclick = getNextSlide;

sliderIcons.appendChild(prevButton);
sliderIcons.appendChild(nextButton);

export default sliderIcons;
