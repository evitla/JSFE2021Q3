import React from 'react';
import { StyledButton } from '../../styles/components';

const CarContoller = () => {
  return (
    <div className="car-controller">
      <StyledButton className="small-button button-success">Go</StyledButton>
      <StyledButton className="small-button button-danger" disabled>
        Stop
      </StyledButton>
    </div>
  );
};

export default CarContoller;
