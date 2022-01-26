import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../components/Pagination';
import WinnersTable from '../../components/WinnersTable';
import { GARAGE_URL, WINNERS_PER_PAGE, WINNERS_URL } from '../../constants';
import { onGetWinners, onNextPage, onPrevPage } from '../../slices/winner';
import { TStore } from '../../store';
import { getWinners } from '../../utils';

const Winners = () => {
  const [winnersCount, setWinnersCount] = React.useState(0);

  const dispatch = useDispatch();

  const { winnersPage, sortBy, sortOrder } = useSelector(
    (state: TStore) => state.winnerReducer
  );

  React.useEffect(() => {
    getWinners(
      WINNERS_URL,
      GARAGE_URL,
      winnersPage,
      WINNERS_PER_PAGE,
      sortBy,
      sortOrder
    ).then((data) => {
      if (data.count !== null) {
        setWinnersCount(+data.count);
      }

      dispatch(onGetWinners(data.winners));
    });
  }, [winnersPage, sortBy, sortOrder]);

  return (
    <>
      <h2>{`Winners(${winnersCount})`}</h2>
      <h3>{`Page ${winnersPage}`}</h3>
      <WinnersTable />
      <Pagination
        onPrev={() => dispatch(onPrevPage())}
        onNext={() => dispatch(onNextPage())}
      />
    </>
  );
};

export default Winners;
