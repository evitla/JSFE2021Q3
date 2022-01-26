import styled from 'styled-components';

const FinishLine = styled.div<{ carsOnPage: number; carsPerPage: number }>`
  display: flex;
  justify-content: space-between;
  font-size: 100px;
  font-weight: bold;
  font-stretch: expanded;
  line-height: 1;
  text-align: center;
  writing-mode: vertical-lr;
  user-select: none;

  span {
    transform: ${({ carsOnPage, carsPerPage }) =>
      `scaleY(max(1, 2 * ${carsOnPage} / ${carsPerPage}))`};
    opacity: 0.3;
    z-index: -1;
  }
`;

export default FinishLine;
