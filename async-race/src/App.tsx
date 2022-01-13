import React from 'react';
import { Route, Routes } from 'react-router';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import { Race, Winners } from './pages';
import { onSaveCars } from './slices/race';
import { getCars } from './utils';
import { URL } from './constants';

import GlobalStyles from './styles/global';
import { baseTheme } from './styles/theme';
import Wrapper from './styles/components/Wrapper';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    getCars(URL).then((data) => dispatch(onSaveCars(data)));
  }, [dispatch]);

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
