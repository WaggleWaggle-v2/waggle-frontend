export interface TUserFetchRes {
  id: number;
  userState: 'INCOMPLETE' | 'VERIFIED';
  uuid: string | null;
  nickname: string | null;
}
