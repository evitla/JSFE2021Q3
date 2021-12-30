import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';

import GlobalStyles from './styles/global';
import { baseTheme } from './styles/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={baseTheme}>
        <Header />
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
}

export default App;
