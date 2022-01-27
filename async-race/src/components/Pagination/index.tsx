import React from 'react';
import { StyledButton, StyledPagination } from '../../styles/components';

const Pagination = ({
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
}: {
  onPrev: () => void;
  onNext: () => void;
  prevDisabled: boolean;
  nextDisabled: boolean;
}) => (
  <StyledPagination>
    <StyledButton
      className="button-primary"
      onClick={onPrev}
      disabled={prevDisabled}
    >
      Prev
    </StyledButton>
    <StyledButton
      className="button-primary"
      onClick={onNext}
      disabled={nextDisabled}
    >
      Next
    </StyledButton>
  </StyledPagination>
);

export default Pagination;
