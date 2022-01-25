import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../components/Pagination';
import RaceController from '../../components/RaceController';

import Track from '../../components/Track';
import { CARS_PER_PAGE } from '../../constants';
import { onNextPage, onPrevPage } from '../../slices/race';

import { TStore } from '../../store';
import { RaceContainer } from '../../styles/components';

const Race = () => {
  const dispatch = useDispatch();

  const { cars, selectedCar, count } = useSelector(
    (state: TStore) => state.carReducer
  );
  const { racePage } = useSelector((state: TStore) => state.raceReducer);

  return (
    <>
      <RaceController cars={cars} selectedCar={selectedCar} />
      <h2>{`Race(${count})`}</h2>
      <h3>{`Page ${racePage}`}</h3>
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
      <Pagination
        onPrev={() => dispatch(onPrevPage())}
        onNext={() => dispatch(onNextPage())}
      />
    </>
  );
};

export default Race;
