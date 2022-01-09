import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CarForm from '../../components/Race/CarForm';
import Track from '../../components/Track';
import { ICarProps } from '../../interfaces/CarProps';

import { addCar, updateCar, deleteCarById } from '../../slices/race';
import { TStore } from '../../store';

const Race = () => {
  const dispatch = useDispatch();

  const { cars } = useSelector((state: TStore) => state.raceReducer);

  const [selectedCar, setSelectedCar] = React.useState<ICarProps | null>(null);

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

  const handleSelectCar = (id: number) => {
    const selected = cars.find((car) => car.id === id);
    if (selected !== undefined) {
      setSelectedCar(selected);
    }
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
          onSelectCar={() => handleSelectCar(car.id)}
          onRemoveCar={() => handleRemove(car.id)}
        />
      ))}
    </>
  );
};

export default Race;
