import React from 'react';
import { StyledButton } from '../../styles/components';

const CarTooltip = ({ onSelect }: { onSelect: () => void }) => (
  <div className="tooltip">
    <StyledButton className="button-primary medium-button" onClick={onSelect}>
      Select
    </StyledButton>
    <StyledButton className="button-danger medium-button">Remove</StyledButton>
  </div>
);

export default CarTooltip;
