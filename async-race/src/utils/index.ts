import { carModels, carSeries } from '../constants';
import { ICarProps, ICarPropsToCreate } from '../interfaces/CarProps';

export const getCars = async (url: string): Promise<ICarProps[]> => {
  const response = await fetch(url);
  const car = await response.json();

  return car;
};

export const createCar = async (
  url: string,
  car: ICarPropsToCreate
): Promise<ICarProps> => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(car),
    headers: { 'Content-Type': 'application/json' },
  });

  const newCar = await response.json();

  return newCar;
};

export const updateCar = async (
  url: string,
  updatedCar: ICarProps
): Promise<ICarProps> => {
  const response = await fetch(`${url}/${updatedCar.id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedCar),
    headers: { 'Content-Type': 'application/json' },
  });

  const car = await response.json();

  return car;
};

export const deleteCar = async (url: string, id: number) => {
  const response = await fetch(`${url}/${id}`, { method: 'DELETE' });
  const car = await response.json();
  return car;
};

const getRandomNumber = (max: number) => Math.floor(Math.random() * max);

const getRandomCarName = () => {
  const model = carModels[getRandomNumber(carModels.length)];
  const series = carSeries[getRandomNumber(carSeries.length)];
  return `${model} ${series}`;
};

const getRandomColor = () => {
  const chars = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += chars[getRandomNumber(chars.length)];
  }

  return color;
};

export const generateCars = (count: number): ICarPropsToCreate[] => {
  return Array.from({ length: count }, () => ({
    name: getRandomCarName(),
    color: getRandomColor(),
  }));
};

export const startEngine = async (
  url: string,
  carId: number
): Promise<{ velocity: number; distance: number }> => {
  const response = await fetch(`${url}/?id=${carId}&status=started`, {
    method: 'PATCH',
  });
  const data = await response.json();
  return data;
};

export const stopEngine = async (url: string, carId: number) => {
  await fetch(`${url}/?id=${carId}&status=stopped`, {
    method: 'PATCH',
  });
};

export const drive = async (url: string, carId: number) => {
  const response = await fetch(`${url}?id=${carId}&status=drive`, {
    method: 'PATCH',
  }).catch();

  return { success: response.ok };
};

export const animate = (
  distance: number,
  duration: number,
  draw: (progress: number) => void
) => {
  let start: number | null = null;
  const state: { id: number | null } = { id: null };

  const step = (timestamp: number) => {
    if (start === null) start = timestamp;
    const time = timestamp - start;
    const progress = Math.round((time * distance) / duration);

    draw(Math.min(progress, distance));

    if (progress < distance) {
      state.id = window.requestAnimationFrame(step);
    }
  };

  state.id = window.requestAnimationFrame(step);

  return state;
};
