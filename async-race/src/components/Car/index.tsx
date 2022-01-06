import React from 'react';
import CarController from './CarController';
import CarIcon from './CarIcon';
import CarTooltip from './CarTooltip';
import { ICarProps } from '../../interfaces/CarProps';
import { StyledCar } from '../../styles/components';

const Car = ({
  carProps,
  onSelectCar,
  onRemoveCar,
}: {
  carProps: ICarProps;
  onSelectCar: () => void;
  onRemoveCar: () => void;
}) => {
  return (
    <StyledCar>
      <CarController />
      <figure>
        <CarIcon color={carProps.color} />
        <CarTooltip onSelect={onSelectCar} onRemove={onRemoveCar} />
        <span>{carProps.model}</span>
      </figure>
    </StyledCar>
  );
};

export default Car;
