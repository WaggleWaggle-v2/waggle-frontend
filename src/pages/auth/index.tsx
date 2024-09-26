import { useEffect } from 'react';
import loginLoadingImage from '@assets/images/login-loading.png';
import { useUserQuery } from '@hooks/reactQuery/useQueryUser';
import { setCookie } from '@utils/cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Auth = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const loginType = params.get('type');

  const { data, isLoading, refetch } = useUserQuery();

  useEffect(() => {
    const fetchToken = async () => {
      if (!code) return navigate('/login');

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/member/login/${loginType ? 'kakao' : 'google'}?code=${code}`,
        );

        if (response.status === 200) {
          const accessToken = response.headers?.authorization.split(' ')[1];
          setCookie('accessToken', accessToken, {
            sameSite: 'None',
            secure: true,
          });

          await refetch();
        }
      } catch (error) {
        console.error('Failed to authenticate:', error);
        navigate('/login');
      }
    };

    fetchToken();
  }, [code, navigate, refetch, loginType]);

  useEffect(() => {
    if (!isLoading && data) {
      if (data.userState === 'VERIFIED') {
        navigate(`/bookshelf/${data.id}`);
      } else {
        navigate('/setup');
      }
    }
  }, [data, isLoading, navigate]);

  return (
    <S.AuthContainer>
      <img src={loginLoadingImage} alt="로그인 로딩 이미지" />
    </S.AuthContainer>
  );
};

export default Auth;

const S = {
  AuthContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #e8dfd1;
  `,
};
