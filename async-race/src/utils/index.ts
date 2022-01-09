import { ICarProps, ICarPropsToCreate } from '../interfaces/CarProps';

export const getCars = async (url: string): Promise<ICarProps[]> => {
  const response = await fetch(url);
  return await response.json();
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

  return await response.json();
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

  return await response.json();
};

export const deleteCar = async (url: string, id: number) => {
  const response = await fetch(`${url}/${id}`, { method: 'DELETE' });
  return await response.json();
};
