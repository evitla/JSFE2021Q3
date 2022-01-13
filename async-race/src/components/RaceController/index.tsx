import React from 'react';
import { useDispatch } from 'react-redux';
import { ICarProps } from '../../interfaces/CarProps';
import { onCreateCar, onUpdateCar } from '../../slices/race';
import { createCar, updateCar } from '../../utils';
import CarForm from './CarForm';

const URL = 'http://localhost:3000/garage';

const RaceController = ({ selectedCar }: { selectedCar: ICarProps | null }) => {
  const dispatch = useDispatch();

  const handleCreate = (name: string, color: string) => {
    createCar(URL, { name, color }).then((data) => dispatch(onCreateCar(data)));
  };

  const handleUpdate = (name: string, color: string) => {
    if (selectedCar !== null) {
      const updatedCar = { ...selectedCar, name, color };
      updateCar(URL, updatedCar).then((data) => dispatch(onUpdateCar(data)));
    }
  };

  return (
    <>
      <CarForm content="Create" onCreateCar={handleCreate} />
      <CarForm
        content="Update"
        isDisabled={selectedCar === null}
        onUpdateCar={handleUpdate}
      />
    </>
  );
};

export default RaceController;
