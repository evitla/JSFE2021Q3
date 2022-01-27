import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, useAnimation } from 'framer-motion';

import CarController from './CarController';
import CarIcon from './CarIcon';
import CarTooltip from './CarTooltip';
import { ICarProps } from '../../interfaces/CarProps';

import { StyledCar } from '../../styles/components';
import {
  onDeleteCar,
  onGetCar,
  onStartDrive,
  onStartEngine,
  onStopEngine,
} from '../../slices/car';
import {
  deleteCar,
  deleteWinner,
  drive,
  startEngine,
  stopEngine,
} from '../../utils';
import {
  ENGINE_URL,
  GARAGE_URL,
  MS_PER_SEC,
  WINNERS_URL,
} from '../../constants';
import { TStore } from '../../store';

const CAR_INITIAL_POSITION = 0;
const CAR_WIDTH = 100;

const Car = ({
  carProps,
  trackLength,
}: {
  carProps: ICarProps;
  trackLength: number;
}) => {
  const { isRaceStarted } = useSelector((state: TStore) => state.raceReducer);
  const dispatch = useDispatch();

  const htmlDistance = trackLength - CAR_WIDTH;

  const handleSelect = (id: number) => {
    dispatch(onGetCar(id));
  };

  const handleRemove = async (id: number) => {
    await deleteCar(GARAGE_URL, id);
    await deleteWinner(WINNERS_URL, id);
    dispatch(onDeleteCar(id));
  };

  const handleStart = async () => {
    const { velocity, distance } = await startEngine(ENGINE_URL, carProps.id);

    dispatch(onStartEngine({ id: carProps.id, velocity, distance }));
  };

  const controls = useAnimation();

  const handleStartDriving = async () => {
    const duration =
      Math.round(carProps.distance / carProps.velocity) / MS_PER_SEC;
    controls.start({
      x: `${htmlDistance}px`,
      transition: { ease: 'linear', duration },
    });

    if (!isRaceStarted) {
      const { success } = await drive(ENGINE_URL, carProps.id);
      dispatch(onStartDrive({ id: carProps.id, success }));
    }
  };

  const stopDriving = async () => {
    if (!isRaceStarted) {
      await stopEngine(ENGINE_URL, carProps.id);
      dispatch(onStopEngine(carProps.id));

      controls.set({ x: CAR_INITIAL_POSITION });
    }

    controls.stop();
  };

  React.useEffect(() => {
    if (carProps.velocity) {
      handleStartDriving();
      return;
    }

    if (carProps.velocity === 0) {
      stopDriving();
    }
  }, [carProps.velocity]);

  React.useEffect(() => {
    if (carProps.successDrive === undefined) return;

    if (!carProps.successDrive) {
      controls.stop();
    }
  }, [carProps.successDrive]);

  return (
    <StyledCar carWidth={CAR_WIDTH}>
      <CarController onStart={handleStart} onStop={stopDriving} />
      <motion.div className="car-image" animate={controls}>
        <CarIcon color={carProps.color} />
        <CarTooltip
          onSelect={() => handleSelect(carProps.id)}
          onRemove={() => handleRemove(carProps.id)}
        />
      </motion.div>
      <span>{carProps.name}</span>
    </StyledCar>
  );
};

export default Car;
