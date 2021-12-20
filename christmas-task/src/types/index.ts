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
};

export type FilterType =
  | 'shape'
  | 'color'
  | 'size'
  | 'count'
  | 'year'
  | 'favorite';
