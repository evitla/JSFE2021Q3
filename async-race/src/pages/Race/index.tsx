import React from 'react';
import { useSelector } from 'react-redux';
import RaceController from '../../components/RaceController';

import Track from '../../components/Track';

import { TStore } from '../../store';

const Race = () => {
  const { cars, selectedCar } = useSelector(
    (state: TStore) => state.raceReducer
  );

  return (
    <>
      <RaceController selectedCar={selectedCar} />
      {cars.map((car) => (
        <Track key={car.id} carProps={car} />
      ))}
    </>
  );
};

export default Race;
