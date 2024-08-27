import titleImage from '@assets/images/title.png';
import typographyImage from '@assets/images/typography.png';
import SocialLoginButtonList from '@pages/Login/components/SocialLoginButtonList';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

const Login = () => {
  return (
    <S.Container $background={typographyImage}>
      <S.TitleImage src={titleImage} />
      <S.Description>- 한글 기념 소통창 -</S.Description>
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
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--gray800);
    padding: 3.2rem 2rem;

    @media ${device.mobile} {
      height: 100%;
      padding-top: 140px;
    }
  `,

  TitleImage: styled.img`
    width: 60rem;
    @media ${device.tablet} {
      width: 39rem;
    }
    @media ${device.mobile} {
      width: 100%;
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
