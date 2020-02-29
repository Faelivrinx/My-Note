import React from 'react';
import GlobalStyles from 'themes/GlobalStyles';
import { theme } from 'themes/MainTheme';
import { ThemeProvider } from 'styled-components';

import Button from 'components/atoms/Button/Button';

const Root = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello World!</h1>
        <Button>Hello</Button>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
