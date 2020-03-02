import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/themes/MainTheme';
import StoryRouter from 'storybook-react-router';

function loadStories() {
  const allExports = [];
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(fileName => allExports.push(req(fileName)));
  return allExports;
}

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
addDecorator(StoryRouter());

configure(loadStories, module);

// import { configure } from '@storybook/react';

// configure(require.context('../src/components', true, /\.stories\.js$/), module);
