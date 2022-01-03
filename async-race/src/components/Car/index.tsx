import React from 'react';
import CarController from './CarController';
import CarImage from './CarImage';
import CarTooltip from './CarTooltip';
import { StyledCar } from '../../styles/components';

const Car = ({ color }: { color: string }) => {
  return (
    <StyledCar>
      <CarController />
      <CarImage tooltip={<CarTooltip />} color={color} />
    </StyledCar>
  );
};

export default Car;
