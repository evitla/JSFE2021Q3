import { ICarProps, ICarPropsToCreate } from '../interfaces/CarProps';

export const getCars = async (url: string): Promise<ICarProps[]> => {
  const response = await fetch(url);
  const car = await response.json();

  return car;
};

export const createCar = async (
  url: string,
  car: ICarPropsToCreate,
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
  updatedCar: ICarProps,
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
