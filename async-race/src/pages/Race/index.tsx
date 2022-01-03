import React from 'react';

import CarForm from '../../components/Race/CarForm';
import Track from '../../components/Track';

const Race = () => (
  <>
    <CarForm content="Create" />
    <CarForm content="Update" isDisabled={true} />
    <Track carColor="green" />
    <Track carColor="white" />
    <Track carColor="red" />
  </>
);

export default Race;
