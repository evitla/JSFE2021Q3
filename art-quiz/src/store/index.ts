import { ICategoryProps } from '../models';
import { getLocalStorage } from '../utils';

export const categoryItemsProps: ICategoryProps[] = [
  {
    title: 'portrait',
    imageNumber: 0,
    score: +getLocalStorage('score-portrait') || 0,
  },
  {
    title: 'landscape',
    imageNumber: 10,
    score: +getLocalStorage('score-landscape') || 0,
  },
  {
    title: 'still life',
    imageNumber: 20,
    score: +getLocalStorage('score-still-life') || 0,
  },
  {
    title: 'impressionism',
    imageNumber: 30,
    score: +getLocalStorage('score-impressionism') || 0,
  },
  {
    title: 'expressionism',
    imageNumber: 40,
    score: +getLocalStorage('score-expressionism') || 0,
  },
  {
    title: 'avant-garde',
    imageNumber: 50,
    score: +getLocalStorage('score-avant-garde') || 0,
  },
];
