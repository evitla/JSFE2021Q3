import React from 'react';
import { Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import { Race, Winners } from './pages';
import Wrapper from './styles/components/Wrapper';

import GlobalStyles from './styles/global';
import { baseTheme } from './styles/theme';

function App() {
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
