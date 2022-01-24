export const NavLinks: { [key: string]: string } = {
  Race: '/',
  Winners: '/winners',
};

const BASE_URL = 'http://localhost:3000';
export const GARAGE_URL = `${BASE_URL}/garage`;
export const ENGINE_URL = `${BASE_URL}/engine`;
export const WINNERS_URL = `${BASE_URL}/winners`;

export const GENERATE_CARS_COUNT = 100;
export const CARS_PER_PAGE = 7;

export const MS_PER_SEC = 1000;

export const NOT_FOUND_STATUS = 404;

export const carModels = [
  'Tesla',
  'Mercedes',
  'BMW',
  'Ferrari',
  'Honda',
  'Toyota',
  'Ford',
  'Volkswagen',
  'Porsche',
  'Bentley',
];

export const carSeries = [
  'Model S',
  'Camry',
  'CLK',
  'Combi',
  'Cayene',
  '7 Series',
  '9 Series',
  '11 Series',
  'DB9',
  'Model E',
  'X5',
];
