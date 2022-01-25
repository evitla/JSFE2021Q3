import React from 'react';
import { Route, Routes } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import { Race, Winners } from './pages';
import { onSaveCars } from './slices/car';
import { getCars } from './utils';
import { CARS_PER_PAGE, GARAGE_URL } from './constants';

import GlobalStyles from './styles/global';
import { baseTheme } from './styles/theme';
import Wrapper from './styles/components/Wrapper';
import { TStore } from './store';

function App() {
  const dispatch = useDispatch();

  const { racePage } = useSelector((state: TStore) => state.raceReducer);

  React.useEffect(() => {
    getCars(GARAGE_URL, racePage, CARS_PER_PAGE).then((data) => {
      dispatch(onSaveCars({ ...data }));
    });
  }, [racePage]);

  return (
    <div className="App">
      <ThemeProvider theme={baseTheme}>
        <Header />
        <main>
          <Wrapper>
            <Routes>
              <Route path="/" element={<Race />} />
              <Route path="/winners" element={<Winners />} />
            </Routes>
          </Wrapper>
        </main>
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
}

export default App;
