import darkThemeImage from '@assets/images/theme/dark.png';
import lightThemeImage from '@assets/images/theme/light.png';
import { TThemeItem } from '../types/type';

export const THEME: TThemeItem[] = [
  {
    value: 'WHITE',
    title: '낮',
    imageUrl: lightThemeImage,
  },
  {
    value: 'BLACK',
    title: '밤',
    imageUrl: darkThemeImage,
  },
];
