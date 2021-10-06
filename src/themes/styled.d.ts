import { IPallete } from './palletes';
import { Media } from './mediaQueries';

interface CustomTheme extends Media, IPallete {}

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
