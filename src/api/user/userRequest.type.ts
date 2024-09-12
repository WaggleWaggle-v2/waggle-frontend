export interface TUserFetchRes {
  id: number | null;
  userState: 'INCOMPLETE' | 'VERIFIED';
  nickname: string | null;
}
