import React from 'react';

import CarForm from '../../components/Race/CarForm';
import Track from '../../components/Track';
import { ICarProps } from '../../interfaces/CarProps';

const carsData: ICarProps[] = [
  { id: 1, model: 'BMW', color: 'green' },
  { id: 2, model: 'Ford', color: 'white' },
  { id: 3, model: 'Kia', color: 'red' },
];

const Race = () => {
  const [cars, setCars] = React.useState(carsData);
  const [selectedCar, setSelectedCar] = React.useState<ICarProps | null>(null);

  const handleUpdate = (model: string, color: string) => {
    const selectedCarIndex = cars.findIndex(
      (car) => car.id === selectedCar?.id,
    );

    if (selectedCarIndex !== -1) {
      const updatedCar = cars[selectedCarIndex];
      updatedCar.model = model;
      updatedCar.color = color;

      setCars([
        ...cars.slice(0, selectedCarIndex),
        updatedCar,
        ...cars.slice(selectedCarIndex + 1),
      ]);

      setSelectedCar(null);
    }
  };

  const handleSelectCar = (id: number) => {
    const selected = cars.find((car) => car.id === id);
    if (selected !== undefined) {
      setSelectedCar(selected);
    }
  };

  const handleRemoveCar = (id: number) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  return (
    <>
      <CarForm content="Create" />
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
          onRemoveCar={() => handleRemoveCar(car.id)}
        />
      ))}
    </>
  );
};

export default Race;
