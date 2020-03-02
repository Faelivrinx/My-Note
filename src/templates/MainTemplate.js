import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from 'themes/GlobalStyles';
import { theme } from 'themes/MainTheme';
import { ThemeProvider } from 'styled-components';

const MainTemplate = ({ children }) => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
