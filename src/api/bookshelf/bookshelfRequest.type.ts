import { TTheme } from '@pages/main/types/type';

export interface TBookshelfFetchRes {
  id: string;
  nickname: string;
  backgroundImageUrl: string;
  introduction: string | null;
  bookshelfType: TTheme;
  count: number;
  open: boolean;
}
