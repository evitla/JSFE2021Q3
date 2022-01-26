import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TStore } from '../../store';
import { StyledWinnersTable } from '../../styles/components';
import CarIcon from '../Car/CarIcon';

import chevron from '../../assets/images/chevron.svg';
import { TSortBy, TSortOrder } from '../../utils';
import { onSort } from '../../slices/winner';

const WinnersTable = () => {
  const { winners } = useSelector((state: TStore) => state.winnerReducer);

  const dispatch = useDispatch();

  const [sortOrder, setSortOrder] = React.useState<TSortOrder>('ASC');

  const handleSort = (sortBy: TSortBy) => {
    dispatch(onSort({ sortBy, sortOrder }));
    setSortOrder((value) => (value === 'ASC' ? 'DESC' : 'ASC'));
  };

  return (
    <StyledWinnersTable>
      <thead>
        <tr>
          <th>Number</th>
          <th>Car</th>
          <th>Name</th>
          <th className="wins-column" onClick={() => handleSort('wins')}>
            <span>Wins</span>
            <img src={chevron} alt="" />
          </th>
          <th className="best-time-column" onClick={() => handleSort('time')}>
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
