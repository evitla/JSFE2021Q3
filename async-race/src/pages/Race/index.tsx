import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../components/Pagination';
import RaceController from '../../components/RaceController';

import Track from '../../components/Track';
import FinishLine from '../../components/Track/FinishLine';
import WinnerMessage from '../../components/WinnerMessage';
import { CARS_PER_PAGE } from '../../constants';
import { ICarProps } from '../../interfaces/CarProps';
import { onNextPage, onPrevPage } from '../../slices/race';

import { TStore } from '../../store';
import { RaceContainer } from '../../styles/components';

const SHOW_MESSAGE_DURATION = 2500;

const Race = () => {
  const dispatch = useDispatch();

  const [messageVisible, setMessageVisible] = React.useState(true);
  const [winnerCar, setWinnerCar] = React.useState<{
    car: ICarProps;
    time: number;
  } | null>(null);

  const { cars, selectedCar, count } = useSelector(
    (state: TStore) => state.carReducer
  );
  const { racePage, isRaceStarted } = useSelector(
    (state: TStore) => state.raceReducer
  );
  const { winner } = useSelector((state: TStore) => state.winnerReducer);

  React.useEffect(() => {
    if (!isRaceStarted) return;
    setMessageVisible(true);
    setTimeout(() => setMessageVisible(false), SHOW_MESSAGE_DURATION);
    setWinnerCar(winner);
  }, [winner]);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <RaceController cars={cars} selectedCar={selectedCar} />
        {winnerCar !== null && messageVisible && (
          <WinnerMessage carModel={winnerCar.car.name} time={winnerCar.time} />
        )}
      </div>
      <h2>{`Race(${count})`}</h2>
      <h3>{`Page ${racePage}`}</h3>
      <RaceContainer>
        <div className="tracks">
          {cars.map((car) => (
            <Track key={car.id} carProps={car} />
          ))}
        </div>
        {cars.length !== 0 && (
          <FinishLine carsOnPage={cars.length} carsPerPage={CARS_PER_PAGE} />
        )}
      </RaceContainer>
      <Pagination
        prevDisabled={racePage < 2}
        nextDisabled={racePage > Math.floor(count / CARS_PER_PAGE)}
        onPrev={() => dispatch(onPrevPage())}
        onNext={() => dispatch(onNextPage())}
      />
    </>
  );
};

export default Race;
