import { pexelsId, timesOfDay, unsplashId } from '../../constants';

type DayTime = 'night' | 'morning' | 'afternoon' | 'evening';

export const getTimeOfDay = (currentDate: Date): DayTime => {
  const hours = currentDate.getHours();

  return Object.keys(timesOfDay)[Math.floor(hours / 6)] as DayTime;
};

export const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * max) + min;

const getLinkToImageFromGithub = (timeOfDay: string, bgNum: number) => {
  const baseUrl =
    'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images';
  const bgNumToString = bgNum.toString().padStart(2, '0');

  return `${baseUrl}/${timeOfDay}/${bgNumToString}.jpg`;
};

const getLinkToImageFromUnsplash = async (
  timeOfDay: string
): Promise<string> => {
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=${unsplashId}`;

  const data = await (await fetch(url)).json();
  return data.urls.regular;
};

const getLinkToImageFromPexels = async (timeOfDay: string): Promise<string> => {
  const url = `https://api.pexels.com/v1/search?orientation=landscape&query=${timeOfDay}`;

  const data = await (
    await fetch(url, {
      headers: {
        Authorization: pexelsId,
      },
    })
  ).json();

  const { photos } = data;
  const bgNum = getRandomNumber(0, photos.length);

  return photos[bgNum].src.original;
};

const getUrl = (photoSource: string, timeOfDay: string, bgNum: number) => {
  switch (photoSource) {
    case 'unsplash':
      return getLinkToImageFromUnsplash(timeOfDay);
    case 'pexels':
      return getLinkToImageFromPexels(timeOfDay);
    default:
      return getLinkToImageFromGithub(timeOfDay, bgNum);
  }
};

export const setBackground = async (
  element: HTMLElement,
  photoSource: string,
  bgNum: number
): Promise<void> => {
  const timeOfDay = getTimeOfDay(new Date());

  const imageUrl = await getUrl(photoSource, timeOfDay, bgNum);

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
