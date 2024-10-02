import { TBookType } from '@pages/main/types/type';

export interface TBookItem {
  id: number;
  nickname: string;
  description: string;
  bookImageUrl: string;
  bookType: TBookType;
  open: boolean;
}

export interface TReceiveBookListRes {
  bookId: number;
  description: string;
  id: number;
  nickname: string;
}

export interface TSendBookListRes {
  backgroundImageUrl: string;
  bookId: number;
  description: string;
  id: number;
  nickname: string;
}

export interface TBookDetailRes {
  bookImageUrl: string;
  createdAt: string;
  description: string;
  lock: boolean;
  receiverNickname: string;
  senderNickname: string;
  mine: boolean;
}
