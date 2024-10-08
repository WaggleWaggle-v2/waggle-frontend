import { useEffect } from 'react';
import titleImage from '@assets/images/title.png';
import typographyImage from '@assets/images/typography.png';
import SocialLoginButtonList from '@pages/Login/components/SocialLoginButtonList';
import { device } from '@styles/breakpoints';
import { getCookie } from '@utils/cookie';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const accessToken = getCookie('accessToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      window.history.back();
    }
  }, [accessToken]);

  return (
    <S.Container $background={typographyImage}>
      <S.BannerWrapper>
        <S.TitleImage src={titleImage} onClick={() => navigate('/')} />
        <S.Description>- 한글 기념 소통창 -</S.Description>
      </S.BannerWrapper>
      <SocialLoginButtonList />
    </S.Container>
  );
};

export default Login;

const S = {
  Container: styled.div<{ $background: string }>`
    background: ${({ $background }) => `url(${$background})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--gray800);
    padding: 3.2rem 2rem;
  `,

  BannerWrapper: styled.div`
    text-align: center;
    @media ${device.mobile} {
      margin-bottom: 30%;
    }
  `,

  TitleImage: styled.img`
    cursor: pointer;
    min-width: 60rem;
    width: 60rem;
    aspect-ratio: 2.3 / 1;
    @media ${device.tablet} {
      min-width: 39rem;
    }
    @media ${device.mobile} {
      min-width: 100%;
    }
  `,

  Description: styled.h2`
    font-size: 3.4rem;
    font-weight: lighter;
    margin: 2.8rem 0 12rem;
    @media ${device.tablet} {
      font-size: 2.8rem;
      margin: 1.4rem 0 8rem;
    }
    @media ${device.mobile} {
      font-size: 6vw;
    }
  `,
};
