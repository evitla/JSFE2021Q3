import React from 'react';
import CarController from './CarController';
import CarIcon from './CarIcon';
import CarTooltip from './CarTooltip';
import { StyledCar } from '../../styles/components';

const Car = ({ color }: { color: string }) => {
  return (
    <StyledCar>
      <CarController />
      <figure>
        <CarIcon color={color} />
        <CarTooltip />
      </figure>
    </StyledCar>
  );
};

export default Car;
