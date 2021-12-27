export type IToyProps = {
  num: number;
  name: string;
  image: string;
  count: number;
  year: number;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
  personalFavorite: boolean;
};

export type FilterType =
  | 'shape'
  | 'color'
  | 'size'
  | 'count'
  | 'year'
  | 'favorite';

export type PageClassNameType = 'home-page' | 'toys-page' | 'tree-page';
