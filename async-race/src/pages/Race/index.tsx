import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CarForm from '../../components/Race/CarForm';
import Track from '../../components/Track';

import {
  onGetCar,
  onCreateCar,
  onUpdateCar,
  onDeleteCar,
} from '../../slices/race';
import { TStore } from '../../store';
import { createCar, deleteCar, updateCar } from '../../utils';

const URL = 'http://localhost:3000/garage';

const Race = () => {
  const dispatch = useDispatch();
  const { cars, selectedCar } = useSelector(
    (state: TStore) => state.raceReducer,
  );

  const handleCreate = (name: string, color: string) => {
    createCar(URL, { name, color }).then((data) => dispatch(onCreateCar(data)));
  };

  const handleUpdate = (name: string, color: string) => {
    if (selectedCar !== null) {
      const updatedCar = { ...selectedCar, name, color };
      updateCar(URL, updatedCar).then((data) => dispatch(onUpdateCar(data)));
    }
  };

  const handleSelect = (id: number) => {
    dispatch(onGetCar(id));
  };

  const handleRemove = (id: number) => {
    deleteCar(URL, id).then((_) => dispatch(onDeleteCar(id)));
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
