import React from 'react';
import { StyledFinishLine } from '../../styles/components';

const FinishLine = ({
  carsOnPage,
  carsPerPage,
}: {
  carsOnPage: number;
  carsPerPage: number;
}) => (
  <StyledFinishLine carsOnPage={carsOnPage} carsPerPage={carsPerPage}>
    <span>F</span>
    <span>I</span>
    <span>N</span>
    <span>I</span>
    <span>S</span>
    <span>H</span>
  </StyledFinishLine>
);

export default FinishLine;
