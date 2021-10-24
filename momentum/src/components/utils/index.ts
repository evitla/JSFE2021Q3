import { timesOfDay } from '../../constants';

const getTimeOfDay = () => {
  const hours = new Date().getHours();

  return timesOfDay[Math.floor(hours / 6)];
};

export const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * max) + min;

export const setBackground = (element: HTMLElement, bgNum: number): void => {
  const baseUrl =
    'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images';
  const timeOfDay = getTimeOfDay();
  const bgNumToString = bgNum.toString().padStart(2, '0');

  const imageUrl = `${baseUrl}/${timeOfDay}/${bgNumToString}.jpg`;

  const img = new Image();
  img.src = imageUrl;
  img.onload = () => {
    element.style.backgroundImage = `url(${imageUrl})`;
  };
};
