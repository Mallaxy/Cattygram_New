import React from 'react';
import { ThemeProvider } from 'styled-components';
import { media } from '@app/themes/mediaQueries';
import { dark } from '@app/themes/palletes';

export function ThemeContext({ children }) {
  return (
    <ThemeProvider theme={{ ...dark, ...media }}>{children}</ThemeProvider>
  );
}
