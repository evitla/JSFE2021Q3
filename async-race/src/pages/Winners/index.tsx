import React from 'react';
import { useDispatch } from 'react-redux';
import WinnersTable from '../../components/WinnersTable';
import { GARAGE_URL, WINNERS_URL } from '../../constants';
import { onGetWinners } from '../../slices/winner';
import { getWinners } from '../../utils';

const Winners = () => {
  const [winnersCount, setWinnersCount] = React.useState(0);

  const dispath = useDispatch();

  getWinners(WINNERS_URL, GARAGE_URL, 1, 7, 'id', 'ASC').then((data) => {
    if (data.count !== null) {
      setWinnersCount(+data.count);
    }

    dispath(onGetWinners(data.winners));
  });

  return (
    <>
      <h2>{`Winners(${winnersCount})`}</h2>
      <WinnersTable />
    </>
  );
};

export default Winners;
