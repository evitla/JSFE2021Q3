import React from 'react';
import Car from '../Car';
import { ICarProps } from '../../interfaces/CarProps';
import { StyledTrack } from '../../styles/components';

const Track = ({
  carProps,
  onSelectCar,
}: {
  carProps: ICarProps;
  onSelectCar: () => void;
}) => (
  <StyledTrack>
    <Car carProps={carProps} onSelectCar={onSelectCar} />
  </StyledTrack>
);

export default Track;
