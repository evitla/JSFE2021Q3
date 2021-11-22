import { IImageProps } from '../models';

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

export const getRandomNumbers = (
  len: number,
  min: number,
  max: number
): number[] =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Array.from({ length: len }, (_) => getRandomNumber(min, max));
