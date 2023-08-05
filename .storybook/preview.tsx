import React from 'react';
import type { Preview } from '@storybook/react';
import GlobalStyle from '../src/styles/globalStyle';
import { BrowserRouter } from 'react-router-dom';

const preview: Preview = {
  decorators: [
    (Story) => (
      <BrowserRouter>
        <GlobalStyle />
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
