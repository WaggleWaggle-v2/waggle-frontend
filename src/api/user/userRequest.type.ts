export interface TUserFetchRes {
  id: number;
  nickname: string | null;
  profileImageUrl: string | null;
  userState: 'INCOMPLETE' | 'VERIFIED';
}
