export type TTheme = 'WHITE' | 'BLACK';
export type TBookType = 'SMALL' | 'BIG';

export interface TThemeItem {
  value: TTheme;
  title: string;
  imageUrl: string;
}

export interface TBookItem {
  type: TBookType;
}
