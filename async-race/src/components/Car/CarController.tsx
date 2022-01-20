import React from 'react';
import { StyledButton } from '../../styles/components';

const CarController = ({
  onStart,
  onStop,
}: {
  onStart: () => void;
  onStop: () => void;
}) => {
  return (
    <div className="car-controller">
      <StyledButton className="small-button button-success" onClick={onStart}>
        Go
      </StyledButton>
      <StyledButton className="small-button button-danger" onClick={onStop}>
        Stop
      </StyledButton>
    </div>
  );
};

export default CarController;
