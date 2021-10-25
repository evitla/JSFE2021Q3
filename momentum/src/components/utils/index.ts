import { timesOfDay } from '../../constants';

export const getTimeOfDay = (currentDate: Date): string => {
  const hours = currentDate.getHours();

  return timesOfDay[Math.floor(hours / 6)];
};

export const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * max) + min;

export const setBackground = (element: HTMLElement, bgNum: number): void => {
  const baseUrl =
    'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images';
  const timeOfDay = getTimeOfDay(new Date());
  const bgNumToString = bgNum.toString().padStart(2, '0');

  const imageUrl = `${baseUrl}/${timeOfDay}/${bgNumToString}.jpg`;

  const img = new Image();
  img.src = imageUrl;
  img.onload = () => {
    element.style.backgroundImage = `url(${imageUrl})`;
  };
};

export const setLocalStorage = (key: string, value: string): void =>
  localStorage.setItem(key, value);

export const getLocalStorage = (key: string): string =>
  localStorage.getItem(key) ? localStorage.getItem(key) : '';

// turn 128 seconds into 2:08
export const getTimeCodeFromNum = (num: number): string => {
  let seconds = num;
  let minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;
  const hours = Math.floor(minutes / 60);
  minutes -= hours * 60;

  return hours === 0
    ? `${minutes}:${String(Math.round(seconds) % 60).padStart(2, '0')}`
    : `
        ${String(hours).padStart(2, '0')}:${minutes}:
        ${String(seconds % 60).padStart(2, '0')}
      `;
};

export const removeFromString = (
  str: string,
  element: string,
  divider = ' '
): string => {
  return str
    .split(divider)
    .filter((item) => item !== element)
    .join(' ');
};
