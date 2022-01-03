import React from 'react';
import Car from '../Car';
import { StyledTrack } from '../../styles/components';

const Track = ({ carColor }: { carColor: string }) => (
  <StyledTrack>
    <Car color={carColor} />
  </StyledTrack>
);

export default Track;
