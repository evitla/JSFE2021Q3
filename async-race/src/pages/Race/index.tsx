import React from 'react';

import CarForm from '../../components/Race/CarForm';

const Race = () => (
  <>
    <CarForm content="Create" />
    <CarForm content="Update" isDisabled={true} />
  </>
);

export default Race;
