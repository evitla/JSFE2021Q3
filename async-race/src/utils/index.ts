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
