import React from 'react';
import { useSelector } from 'react-redux';
import { TStore } from '../../store';
import { StyledWinnersTable } from '../../styles/components';
import CarIcon from '../Car/CarIcon';

import chevron from '../../assets/images/chevron.svg';

const WinnersTable = () => {
  const { winners } = useSelector((state: TStore) => state.winnerReducer);

  return (
    <StyledWinnersTable>
      <thead>
        <tr>
          <th>Number</th>
          <th>Car</th>
          <th>Name</th>
          <th className="wins-column">
            <span>Wins</span>
            <img src={chevron} alt="" />
          </th>
          <th className="best-time-column">
            <span>Best time (seconds)</span>
            <img src={chevron} alt="" />
          </th>
        </tr>
      </thead>
      <tbody>
        {winners.map((winner, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <CarIcon color={winner.car.color} />
            </td>
            <td>{winner.car.name}</td>
            <td>{winner.wins}</td>
            <td>{winner.time}</td>
          </tr>
        ))}
      </tbody>
    </StyledWinnersTable>
  );
};

export default WinnersTable;
