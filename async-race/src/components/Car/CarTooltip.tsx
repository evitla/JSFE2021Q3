import React from 'react';
import { StyledButton } from '../../styles/components';

const CarTooltip = () => (
  <div className="tooltip">
    <StyledButton className="button-primary medium-button">Select</StyledButton>
    <StyledButton className="button-danger medium-button">Remove</StyledButton>
  </div>
);

export default CarTooltip;
