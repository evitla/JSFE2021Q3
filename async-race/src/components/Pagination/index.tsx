import React from 'react';
import { StyledButton, StyledPagination } from '../../styles/components';

const Pagination = ({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) => {
  return (
    <StyledPagination>
      <StyledButton className="button-primary" onClick={onPrev}>
        Prev
      </StyledButton>
      <StyledButton className="button-primary" onClick={onNext}>
        Next
      </StyledButton>
    </StyledPagination>
  );
};

export default Pagination;
