export type TTheme = 'WHITE' | 'BLACK';
export type TBookType = 'SHORT' | 'LONG';

export interface TThemeItem {
  value: TTheme;
  title: string;
  imageUrl: string;
}

export interface TBookItem {
  type: TBookType;
}
