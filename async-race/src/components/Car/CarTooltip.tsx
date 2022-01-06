import React from 'react';
import { StyledButton } from '../../styles/components';

const CarTooltip = ({
  onSelect,
  onRemove,
}: {
  onSelect: () => void;
  onRemove: () => void;
}) => (
  <div className="tooltip">
    <StyledButton className="button-primary medium-button" onClick={onSelect}>
      Select
    </StyledButton>
    <StyledButton className="button-danger medium-button" onClick={onRemove}>
      Remove
    </StyledButton>
  </div>
);

export default CarTooltip;
