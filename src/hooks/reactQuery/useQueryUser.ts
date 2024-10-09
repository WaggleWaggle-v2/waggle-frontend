import userRequest from '@api/user/userRequest';
import { TReceiveBookCountRes, TSendBookCountRes, TUserFetchRes } from '@api/user/userRequest.type';
import { QUERY_KEY } from '@constants/queryKey';
import { useQueryClient } from '@tanstack/react-query';
import { getCookie } from '@utils/cookie';
import { createMutationHook, createQueryHook } from './utils/factory';

const accessToken = getCookie('accessToken');

// 유저 정보 조회
export const useUserQuery = () => {
  return createQueryHook<TUserFetchRes, Error>([QUERY_KEY.userInfo], userRequest.fetchUser, !!accessToken);
};

// 유저 닉네임 변경
export const useUserNicknameUpdateMutation = () => {
  const queryClient = useQueryClient();
  return createMutationHook<string, string>(
    nickname => userRequest.updateUserNickname(nickname),
    [
      () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY.userInfo] }),
      () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY.bookShelfInfo] }),
    ],
    '호명이 성공적으로 변경되었습니다.',
  );
};

// 추가 정보 입력
export const useUsernameAndPublicityCreateMutation = () => {
  const queryClient = useQueryClient();
  return createMutationHook<{ nickname: string; isOpen: boolean }, { nickname: string; isOpen: boolean }>(
    ({ nickname, isOpen }) => userRequest.createUsernameAndPublicity(nickname, isOpen),
    [
      () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY.userInfo] }),
      () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY.bookShelfInfo] }),
    ],
  );
};

// 받은 책장 개수 조회
export const useReceiveBookCount = () => {
  return createQueryHook<TReceiveBookCountRes, Error>(
    [QUERY_KEY.receiveBookCount],
    userRequest.fetchReceiveBookCount,
    !!accessToken,
  );
};

// 보낸 책장 개수 조회
export const useSendBookCount = () => {
  return createQueryHook<TSendBookCountRes, Error>(
    [QUERY_KEY.sendBookCount],
    userRequest.fetchSendBookCount,
    !!accessToken,
  );
};
