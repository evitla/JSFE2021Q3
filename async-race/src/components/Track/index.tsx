import React from 'react';
import Car from '../Car';
import { ICarProps } from '../../interfaces/CarProps';
import { StyledTrack } from '../../styles/components';

const Track = ({ carProps }: { carProps: ICarProps }) => (
  <StyledTrack>
    <Car carProps={carProps} />
  </StyledTrack>
);

export default Track;
