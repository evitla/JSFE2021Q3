import styled from 'styled-components';

const Track = styled.div`
  padding: 10px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 2px;
    background-color: white;
  }

  &::after {
    top: 100%;
  }
`;

export default Track;
