import userRequest from '@api/user/userRequest';
import { TUserFetchRes } from '@api/user/userRequest.type';
import { QUERY_KEY } from '@constants/queryKey';
import { useQuery } from '@tanstack/react-query';
import { getCookie } from '@utils/cookie';

export const useUserQuery = () => {
  const accessToken = getCookie('accessToken');

  const query = useQuery<TUserFetchRes, Error>({
    queryKey: [QUERY_KEY.userInfo],
    queryFn: async () => {
      if (!accessToken) throw new Error('No access token');
      return await userRequest.FetchUserData();
    },
    enabled: !!accessToken,
    gcTime: Infinity,
  });
  return query;
};
