import { TBookType } from '@pages/main/types/type';

export interface TBookItem {
  id: number;
  nickname: string;
  description: string;
  bookImageUrl: string;
  bookType: TBookType;
  open: boolean;
}
