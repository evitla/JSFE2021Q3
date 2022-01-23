import React from 'react';
import { useDispatch } from 'react-redux';
import { motion, useAnimation } from 'framer-motion';

import CarController from './CarController';
import CarIcon from './CarIcon';
import CarTooltip from './CarTooltip';
import { ICarProps } from '../../interfaces/CarProps';

import { StyledCar } from '../../styles/components';
import {
  onDeleteCar,
  onGetCar,
  onStartEngine,
  onStopEngine,
} from '../../slices/race';
import { deleteCar, drive, startEngine, stopEngine } from '../../utils';
import { ENGINE_URL, GARAGE_URL } from '../../constants';

const CAR_INITIAL_POSITION = 0;
const CAR_WIDTH = 100;

const Car = ({
  carProps,
  trackLength,
}: {
  carProps: ICarProps;
  trackLength: number;
}) => {
  const dispatch = useDispatch();

  const handleSelect = (id: number) => {
    dispatch(onGetCar(id));
  };

  const handleRemove = async (id: number) => {
    await deleteCar(GARAGE_URL, id);
    dispatch(onDeleteCar(id));
  };

  const handleStart = async () => {
    const { velocity, distance } = await startEngine(ENGINE_URL, carProps.id);

    dispatch(onStartEngine({ id: carProps.id, velocity, distance }));
  };

  const controls = useAnimation();

  const startDriving = async (velocity: number, distance: number) => {
    const duration = Math.round(distance / velocity) / 1000;
    const htmlDistance = trackLength - CAR_WIDTH;

    controls.start({
      x: `${htmlDistance}px`,
      transition: { ease: 'linear', duration },
    });

    const { success } = await drive(ENGINE_URL, carProps.id);

    if (!success) {
      controls.stop();
    }
  };

  const stopDriving = async () => {
    await stopEngine(ENGINE_URL, carProps.id);
    dispatch(onStopEngine(carProps.id));

    controls.stop();
    controls.set({ x: CAR_INITIAL_POSITION });
  };

  React.useEffect(() => {
    if (carProps.velocity) {
      startDriving(carProps.velocity, carProps.distance);
      return;
    }

    if (carProps.velocity === 0) {
      stopDriving();
    }
  }, [carProps.velocity]);

  return (
    <StyledCar carWidth={CAR_WIDTH}>
      <CarController onStart={handleStart} onStop={stopDriving} />
      <figure>
        <motion.div animate={controls}>
          <CarIcon color={carProps.color} />
        </motion.div>
        <CarTooltip
          onSelect={() => handleSelect(carProps.id)}
          onRemove={() => handleRemove(carProps.id)}
        />
      </figure>
      <span>{carProps.name}</span>
    </StyledCar>
  );
};

export default Car;
