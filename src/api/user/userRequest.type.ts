export interface TUserFetchRes {
  id: string | null;
  userState: 'INCOMPLETE' | 'VERIFIED';
  nickname: string | null;
}
