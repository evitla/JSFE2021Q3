import { IImageProps } from '../models';

export const delay = (timeout: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

export const getImageURL = (imageNum: number): string => {
  const baseUrl =
    'https://raw.githubusercontent.com/evitla/image-data/master/img';

  return `${baseUrl}/${imageNum}.jpg`;
};

export const getImages = async (url: string): Promise<IImageProps[]> => {
  const response = await fetch(url);
  const json = await response.json();
  return json.images;
};

export const parseRequestURL = (): {
  resource: string;
  id: string;
  verb: string;
} => {
  const url = window.location.hash.slice(1).toLowerCase() || '/';

  const r = url.split('/');

  const request = {
    resource: r[1],
    id: r[2],
    verb: r[3],
  };

  return request;
};

export const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * max) + min;

export const getUniqueRandomNumbers = (
  len: number,
  min: number,
  max: number
): number[] => {
  const res: Set<number> = new Set();

  while (res.size < len) {
    res.add(getRandomNumber(min, max));
  }

  return [...res];
};

export const setLocalStorage = (key: string, value: string): void =>
  localStorage.setItem(key, value);

export const getLocalStorage = (key: string): string =>
  localStorage.getItem(key) ? localStorage.getItem(key) : '';
