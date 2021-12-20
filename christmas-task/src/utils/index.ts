import { IToyProps } from '../types';

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

export const getImages = async (url: string): Promise<IToyProps[]> => {
  const response = await fetch(url);
  const data = await response.json();
  return data.images;
};

export const getImageURL = (folder: string, imageNum: number): string => {
  const baseURL = `./images/${folder}`;

  return `${baseURL}/${imageNum}.png`;
};

export const parseImages = (
  images: IToyProps[]
): {
  shapes: string[];
  colors: string[];
  sizes: string[];
  counts: number[];
  years: number[];
} => {
  const shapes = new Set<string>();
  const colors = new Set<string>();
  const sizes = new Set<string>();
  const counts = new Set<number>();
  const years = new Set<number>();

  images.forEach((image) => {
    shapes.add(image.shape);
    colors.add(image.color);
    sizes.add(image.size);
    counts.add(image.count);
    years.add(image.year);
  });

  return {
    shapes: [...shapes],
    colors: [...colors],
    sizes: [...sizes],
    counts: [...counts],
    years: [...years],
  };
};
