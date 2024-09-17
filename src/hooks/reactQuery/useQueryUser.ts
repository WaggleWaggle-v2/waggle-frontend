import { TAxiosError } from '@api/axios';
import userRequest from '@api/user/userRequest';
import { TUserFetchRes } from '@api/user/userRequest.type';
import { QUERY_KEY } from '@constants/queryKey';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCookie } from '@utils/cookie';

// 유저 정보 조회
export const useUserQuery = () => {
  const accessToken = getCookie('accessToken');
  const query = useQuery<TUserFetchRes, Error>({
    queryKey: [QUERY_KEY.userInfo],
    queryFn: async () => {
      if (!accessToken) throw new Error('No access token');
      return await userRequest.fetchUser();
    },
    enabled: !!accessToken,
    gcTime: Infinity,
  });
  return query;
};

// 유저 닉네임 변경
export const useUserNicknameUpdateMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (nickname: string) => await userRequest.updateUserNickname(nickname),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.userInfo] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.bookShelfInfo] });
    },
    onError: (error: TAxiosError) => console.error(error.errorMessage),
  });

  return mutation;
};

// 추가 정보 입력
export const useUsernameAndPublicityCreateMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ nickname, isOpen }: { nickname: string; isOpen: boolean }) =>
      await userRequest.createUsernameAndPublicity(nickname, isOpen),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.userInfo] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.bookShelfInfo] });
    },
    onError: (error: TAxiosError) => console.error(error.errorMessage),
  });

  return mutation;
};
