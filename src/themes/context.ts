import { createContext } from 'react';

import { IPallete } from './palletes';
import * as palletes from './palletes';

export enum ThemesName {
  DARK = 'dark',
}
export enum Fonts {
  regular = 'Play-Regular',
  bold = 'Play-Bold',
}
type ThemesItem = {
  pallete: IPallete;
  name: ThemesName;
  fonts: typeof Fonts;
};

type Themes = {
  dark: ThemesItem;
};

export const themes: Themes = {
  dark: {
    pallete: palletes[ThemesName.DARK],
    name: ThemesName.DARK,
    fonts: Fonts,
  },
};

export const ThemeContext = createContext(themes[ThemesName.DARK]);
