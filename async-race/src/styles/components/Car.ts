import styled from 'styled-components';

const Car = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;

  figure {
    width: 100px;
    position: relative;

    svg:hover + .tooltip {
      display: flex;
    }

    .tooltip {
      display: none;
      position: absolute;
      right: 0;
      top: 50%;
      padding: 0.5rem;
      transform: translate(100%, -50%);
      column-gap: 0.5rem;

      &:hover {
        display: flex;
      }
    }
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
