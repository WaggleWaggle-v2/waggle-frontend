export interface TUserFetchRes {
  id: string | undefined;
  userState: 'INCOMPLETE' | 'VERIFIED';
  nickname: string | undefined;
}
