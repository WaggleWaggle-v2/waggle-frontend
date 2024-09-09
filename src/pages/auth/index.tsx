import { useEffect } from 'react';
import { useUserQuery } from '@hooks/reactQuery/useQueryUser';
import { setCookie } from '@utils/cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Auth = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  const { data, isLoading, refetch } = useUserQuery();

  useEffect(() => {
    const fetchToken = async () => {
      if (!code) return navigate('/login');

      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/member/login/google?code=${code}`);

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
  }, [code, navigate, refetch]);

  useEffect(() => {
    if (!isLoading && data) {
      if (data.userState === 'VERIFIED') {
        navigate(`/main/${data.uuid}`);
      } else {
        navigate('/setup');
      }
    }
  }, [data, isLoading, navigate]);

  return (
    <S.AuthContainer>
      <h1>로그인 중입니다.</h1>
    </S.AuthContainer>
  );
};

export default Auth;

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
