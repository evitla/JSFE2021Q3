import React from 'react';
import { useDispatch } from 'react-redux';

import CarController from './CarController';
import CarIcon from './CarIcon';
import CarTooltip from './CarTooltip';
import { ICarProps } from '../../interfaces/CarProps';

import { StyledCar } from '../../styles/components';
import { onDeleteCar, onGetCar } from '../../slices/race';
import { deleteCar } from '../../utils';
import { URL } from '../../constants';

const Car = ({ carProps }: { carProps: ICarProps }) => {
  const dispatch = useDispatch();

  const handleSelect = (id: number) => {
    dispatch(onGetCar(id));
  };

  const handleRemove = (id: number) => {
    deleteCar(URL, id).then(() => dispatch(onDeleteCar(id)));
  };

  return (
    <StyledCar>
      <CarController />
      <figure>
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
