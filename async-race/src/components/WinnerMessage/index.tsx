import React from 'react';
import { StyledWinnerMessage } from '../../styles/components';

const WinnerMessage = ({
  carModel,
  time,
}: {
  carModel: string;
  time: number;
}) => {
  return (
    <StyledWinnerMessage>
      <p>{`The winner is ${carModel}. Time: ${time} seconds.`}</p>
    </StyledWinnerMessage>
  );
};

export default WinnerMessage;
