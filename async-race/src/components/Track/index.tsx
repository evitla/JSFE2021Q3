import React from 'react';
import Car from '../Car';
import { ICarProps } from '../../interfaces/CarProps';
import { StyledTrack } from '../../styles/components';

const Track = ({
  carProps,
  onSelectCar,
  onRemoveCar,
}: {
  carProps: ICarProps;
  onSelectCar: () => void;
  onRemoveCar: () => void;
}) => (
  <StyledTrack>
    <Car
      carProps={carProps}
      onSelectCar={onSelectCar}
      onRemoveCar={onRemoveCar}
    />
  </StyledTrack>
);

export default Track;
