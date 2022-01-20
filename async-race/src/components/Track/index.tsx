import React from 'react';
import Car from '../Car';
import { ICarProps } from '../../interfaces/CarProps';
import { StyledTrack } from '../../styles/components';

const DEFAULT_TRACK_LENGTH = 1000;

const Track = ({ carProps }: { carProps: ICarProps }) => {
  const [length, setLength] = React.useState(DEFAULT_TRACK_LENGTH);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (ref.current) setLength(ref.current.offsetWidth);
  }, []);

  return (
    <StyledTrack ref={ref}>
      <Car carProps={carProps} trackLength={length} />
    </StyledTrack>
  );
};

export default Track;
