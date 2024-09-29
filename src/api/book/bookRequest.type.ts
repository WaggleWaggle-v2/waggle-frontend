import { TBookType } from '@pages/main/types/type';

export interface TBookItem {
  id: number;
  nickname: string;
  description: string;
  bookImageUrl: string;
  bookType: TBookType;
  open: boolean;
}

export interface TUseReceiveSendBookList {
  description: string;
  id: number;
  nickname: string;
}
