export interface TBookshelfFetchRes {
  id: string;
  nickname: string;
  backgroundImageUrl: string;
  introduction: string;
  bookshelfType: 'WHITE' | 'DARK';
  count: number;
  open: boolean;
}
