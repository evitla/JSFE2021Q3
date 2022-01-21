import React from 'react';
import { useDispatch } from 'react-redux';

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
import {
  animate,
  deleteCar,
  drive,
  startEngine,
  stopEngine,
} from '../../utils';
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
  const [carContainer, setCarContainer] = React.useState<HTMLElement | null>(
    null
  );
  const carRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (carRef.current) setCarContainer(carRef.current);
  }, []);

  const dispatch = useDispatch();

  const handleSelect = (id: number) => {
    dispatch(onGetCar(id));
  };

  const handleRemove = async (id: number) => {
    await deleteCar(GARAGE_URL, id);
    dispatch(onDeleteCar(id));
  };

  const handleStart = async () => {
    if (carContainer === null) throw new Error('');

    const { velocity, distance } = await startEngine(ENGINE_URL, carProps.id);

    dispatch(onStartEngine({ id: carProps.id, velocity, distance }));
  };

  let animationState: { id: number | null } = { id: null };

  const startDriving = async (velocity: number, distance: number) => {
    const duration = Math.round(distance / velocity);
    const htmlDistance = trackLength - CAR_WIDTH;

    animationState = animate(htmlDistance, duration, (progress) => {
      if (carContainer !== null) {
        carContainer.style.transform = `translateX(${progress}px)`;
      }
    });

    const { success } = await drive(ENGINE_URL, carProps.id);

    if (!success && animationState.id !== null) {
      window.cancelAnimationFrame(animationState.id);
    }
  };

  const stopDriving = async () => {
    await stopEngine(ENGINE_URL, carProps.id);

    dispatch(onStopEngine({ id: carProps.id }));

    if (carContainer !== null) {
      carContainer.style.transform = `translateX(${CAR_INITIAL_POSITION}px)`;
    }

    if (animationState.id !== null) {
      window.cancelAnimationFrame(animationState.id);
    }
  };

  React.useEffect(() => {
    if (carProps.velocity !== 0) {
      startDriving(carProps.velocity, carProps.distance);
    }
  }, [carProps.velocity]);

  return (
    <StyledCar carWidth={CAR_WIDTH}>
      <CarController onStart={handleStart} onStop={stopDriving} />
      <figure ref={carRef}>
        <CarIcon color={carProps.color} />
        <CarTooltip
          onSelect={() => handleSelect(carProps.id)}
          onRemove={() => handleRemove(carProps.id)}
        />
        <span>{carProps.name}</span>
      </figure>
    </StyledCar>
  );
};

export default Car;
