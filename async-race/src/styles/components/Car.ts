import styled from 'styled-components';

const Car = styled.div<{ carWidth: number }>`
  display: flex;
  column-gap: 1rem;
  align-items: center;

  figure {
    position: relative;
    display: flex;
    align-items: center;

    svg {
      z-index: 1;
      width: ${({ carWidth }) => `${carWidth}px`};

      &:hover + .tooltip {
        display: flex;
      }
    }

    .tooltip {
      display: none;
      position: absolute;
      right: 0;
      top: 50%;
      padding: 0.5rem;
      transform: translate(100%, -50%);
      gap: 0.5rem;

      &:hover {
        display: flex;
      }
    }
  }

  span {
    user-select: none;
    font-size: 60px;
    opacity: 0.1;
    text-transform: uppercase;
    z-index: -1;
  }

  .car-controller {
    display: flex;
    column-gap: 6px;
    width: 80px;
    height: 28px;

    .small-button {
      width: 50%;
    }
  }
`;

export default Car;
