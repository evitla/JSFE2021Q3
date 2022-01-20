import React from 'react';
import { useDispatch } from 'react-redux';
import { ICarProps } from '../../interfaces/CarProps';
import { onCreateCar, onUpdateCar } from '../../slices/race';
import { StyledButton, StyledRaceController } from '../../styles/components';
import { createCar, generateCars, updateCar } from '../../utils';
import CarForm from './CarForm';
import { GENERATE_CARS_COUNT, GARAGE_URL } from '../../constants';

const RaceController = ({ selectedCar }: { selectedCar: ICarProps | null }) => {
  const dispatch = useDispatch();

  const handleCreate = async (name: string, color: string) => {
    const newCar = await createCar(GARAGE_URL, { name, color });
    dispatch(onCreateCar(newCar));
  };

  const handleUpdate = async (name: string, color: string) => {
    if (selectedCar !== null) {
      const newCar = await updateCar(GARAGE_URL, {
        ...selectedCar,
        name,
        color,
      });
      dispatch(onUpdateCar(newCar));
    }
  };

  const handleGenerateCars = async () => {
    const cars = generateCars(GENERATE_CARS_COUNT);
    const newCars = await Promise.all(
      cars.map((car) => createCar(GARAGE_URL, car))
    );
    newCars.forEach((car) => dispatch(onCreateCar(car)));
  };

  return (
    <StyledRaceController>
      <CarForm content="Create" onCreateCar={handleCreate} />
      <CarForm
        content="Update"
        isDisabled={selectedCar === null}
        onUpdateCar={handleUpdate}
      />
      <StyledButton className="button-primary" onClick={handleGenerateCars}>
        Generate Cars
      </StyledButton>
    </StyledRaceController>
  );
};

export default RaceController;
