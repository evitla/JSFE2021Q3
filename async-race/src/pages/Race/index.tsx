import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CarForm from '../../components/Race/CarForm';
import Track from '../../components/Track';

import {
  addCar,
  updateCar,
  deleteCarById,
  selectCarById,
} from '../../slices/race';
import { TStore } from '../../store';

const Race = () => {
  const dispatch = useDispatch();

  const { cars, selectedCar } = useSelector(
    (state: TStore) => state.raceReducer,
  );

  const handleCreate = (model: string, color: string) => {
    const lastId = cars[cars.length - 1].id;
    const newCar = { id: lastId + 1, model, color };

    dispatch(addCar(newCar));
  };

  const handleUpdate = (model: string, color: string) => {
    if (selectedCar !== null) {
      const updatedCar = { ...selectedCar, model, color };
      dispatch(updateCar(updatedCar));
    }
  };

  const handleSelect = (id: number) => {
    dispatch(selectCarById(id));
  };

  const handleRemove = (id: number) => {
    dispatch(deleteCarById(id));
  };

  return (
    <>
      <CarForm content="Create" onCreateCar={handleCreate} />
      <CarForm
        content="Update"
        isDisabled={selectedCar === null}
        onUpdateCar={handleUpdate}
      />
      {cars.map((car) => (
        <Track
          key={car.id}
          carProps={car}
          onSelectCar={() => handleSelect(car.id)}
          onRemoveCar={() => handleRemove(car.id)}
        />
      ))}
    </>
  );
};

export default Race;
