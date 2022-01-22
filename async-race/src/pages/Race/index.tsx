import React from 'react';
import { useSelector } from 'react-redux';
import RaceController from '../../components/RaceController';

import Track from '../../components/Track';
import { CARS_PER_PAGE } from '../../constants';

import { TStore } from '../../store';
import { RaceContainer } from '../../styles/components';

const Race = () => {
  const { cars, selectedCar } = useSelector(
    (state: TStore) => state.raceReducer
  );

  return (
    <>
      <RaceController cars={cars} selectedCar={selectedCar} />
      <RaceContainer carsOnPage={cars.length} carsPerPage={CARS_PER_PAGE}>
        <div className="tracks">
          {cars.map((car) => (
            <Track key={car.id} carProps={car} />
          ))}
        </div>
        <div className="finish">
          <span>F</span>
          <span>I</span>
          <span>N</span>
          <span>I</span>
          <span>S</span>
          <span>H</span>
        </div>
      </RaceContainer>
    </>
  );
};

export default Race;
