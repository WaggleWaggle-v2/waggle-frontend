export interface TUserFetchRes {
  id: string | undefined;
  userState: 'INCOMPLETE' | 'VERIFIED';
  nickname: string | undefined;
}

export interface TSendBookCountRes {
  sendCount: number;
}

export interface TReceiveBookCountRes {
  receiveCount: number;
}
