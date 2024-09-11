import mainLogo from '@assets/icons/symbol-logo.svg';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

const TitleSection = () => {
  return (
    <S.LandingTitleBox>
      <S.LogoIcon src={mainLogo} alt={'와글와글'} />
      <S.HeroTitle>와글와글</S.HeroTitle>
      <S.HeroSubTitle>두번째 이야기</S.HeroSubTitle>
    </S.LandingTitleBox>
  );
};

export default TitleSection;

const S = {
  // Layout
  LandingTitleBox: styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: left;
    gap: 1.6rem;
    margin-bottom: auto;
    grid-column: 1 2;
    grid-row: 1 2;

    @media ${device.tablet} {
      align-items: center;
    }
  `,
  // Typography
  HeroTitle: styled.h1`
    color: #1f1e1b;
    font-family: 'ChosunCentennial';
    font-size: 12rem;
    letter-spacing: -0.64px;

    @media ${device.tablet} {
      font-size: 6.4rem;
    }
  `,
  HeroSubTitle: styled.h2`
    color: #18316f;
    font-family: 'ChosunCentennial';
    font-size: 4.4rem;

    @media ${device.tablet} {
      font-size: 2.2rem;
    }
  `,
  // Element
  LogoIcon: styled.img`
    width: 8.4rem;
    display: none;
    @media ${device.tablet} {
      display: block;
    }
  `,
};
