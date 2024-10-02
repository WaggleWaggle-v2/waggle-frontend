import { TBookType } from '@pages/main/types/type';

export interface TBookItem {
  id: number;
  nickname: string;
  description: string;
  bookImageUrl: string;
  bookType: TBookType;
  open: boolean;
}

export interface TUseReceiveBookListRes {
  description: string;
  id: number;
  nickname: string;
}

export interface TUserSendBookListRes {
  description: string;
  id: number;
  nickname: string;
  backgroundImageUrl: string;
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
