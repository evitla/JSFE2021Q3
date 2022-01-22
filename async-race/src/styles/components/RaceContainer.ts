import styled from 'styled-components';

const RaceContainer = styled.div<{ carsOnPage: number; carsPerPage: number }>`
  display: flex;

  .tracks {
    width: 100%;
  }

  .finish {
    display: flex;
    justify-content: space-between;
    font-size: 100px;
    font-weight: bold;
    font-stretch: expanded;
    line-height: 1;
    text-align: center;
    writing-mode: vertical-lr;

    span {
      transform: ${({ carsOnPage, carsPerPage }) =>
        `scaleY(max(1, 2 * ${carsOnPage} / ${carsPerPage}))`};
      opacity: 0.3;
      z-index: -1;
    }
  }
`;

export default RaceContainer;
