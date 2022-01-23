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
import { deleteCar, startDriving, startEngine, stopEngine } from '../../utils';
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

  const htmlDistance = trackLength - CAR_WIDTH;

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

  const handleStartDriving = async () => {
    const { success } = await startDriving(ENGINE_URL, carProps, (duration) => {
      controls.start({
        x: `${htmlDistance}px`,
        transition: { ease: 'linear', duration },
      });
    });

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
      handleStartDriving();
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
