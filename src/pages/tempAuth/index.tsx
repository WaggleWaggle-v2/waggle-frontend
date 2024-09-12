import { useEffect } from 'react';
import getKakaoToken from '@api/user/getKakaoToken';
import { QUERY_KEY } from '@constants/queryKey';
import { useQuery } from '@tanstack/react-query';
import { setCookie } from '@utils/cookie';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TempAuth = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  const { data: userData } = useQuery({
    queryKey: [QUERY_KEY.userInfo],
    queryFn: async () => {
      if (!code) return navigate('/login');
      return await getKakaoToken(code);
    },
    enabled: !!code,
  });

  useEffect(() => {
    if (userData) {
      setCookie('accessToken', userData.access_token);
    }
  }, [userData]);

  return (
    <S.AuthContainer>
      <h1>로그인 중입니다.</h1>
    </S.AuthContainer>
  );
};

export default TempAuth;

const S = {
  AuthContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 100vh;
    background-color: ${props => props.theme.theme02};

    h1 {
      color: ${props => props.theme.button03};
      font-size: 2.8rem;
    }
  `,
};
