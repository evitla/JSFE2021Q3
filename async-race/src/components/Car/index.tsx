import React from 'react';
import CarController from './CarController';
import CarIcon from './CarIcon';
import CarTooltip from './CarTooltip';
import { ICarProps } from '../../interfaces/CarProps';
import { StyledCar } from '../../styles/components';

const Car = ({
  carProps,
  onSelectCar,
}: {
  carProps: ICarProps;
  onSelectCar: () => void;
}) => {
  return (
    <StyledCar>
      <CarController />
      <figure>
        <CarIcon color={carProps.color} />
        <CarTooltip onSelect={onSelectCar} />
        <span>{carProps.model}</span>
      </figure>
    </StyledCar>
  );
};

export default Car;
