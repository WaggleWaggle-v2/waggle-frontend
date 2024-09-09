import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { device } from '@styles/breakpoints';
import mainLogo from '@assets/icons/symbol-logo.svg';
import treeImg from '@assets/images/tree.png';
import houseImg from '@assets/images/house.png';
import BookshelfSection from './components/BookshelfSection';
import typography from '@assets/images/typography-short.png';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.Main>
        <S.LandingTitleBox>
          <S.LogoIcon src={mainLogo} alt={'와글와글'} />
          <S.HeroTitle>와글와글</S.HeroTitle>
          <S.HeroSubTitle>두번째 이야기</S.HeroSubTitle>
        </S.LandingTitleBox>
        <S.LandingSubContainer>
          <div>
            <S.SubText>와글와글의 사전적 의미는</S.SubText>
            <S.HighlightText>
              '사람이 한곳에 많이 모여 잇따라 떠들거나 &nbsp;움직이는 소리 또는 그 모양'
            </S.HighlightText>
            <S.SubText>
              이라는 의미를 담고있어 이곳에서 많은 사람들이 &nbsp;한글날을 기억하며, '와글와글' 떠들기 바랍니다.
            </S.SubText>
          </div>
          <S.StartButton type="button" onClick={() => navigate('/login')}>
            와글와글 시작하겠소
          </S.StartButton>
        </S.LandingSubContainer>
      </S.Main>
      <BookshelfSection />
    </>
  );
};

export default Landing;

const S = {
  // Layout
  Main: styled.div`
    position: relative;
    top: -${HEADER_HEIGHT.PC};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100dvh;
    gap: 2rem;
    padding: ${HEADER_HEIGHT.PC} 2rem 3rem;
    background: url(${typography}), linear-gradient(180deg, #e8dfd1 0%, #e8dfd1 85%, #f6f3ee 100%);
    background-size: contain;
    background-position: left top;

    @media ${device.tablet} {
      padding: ${HEADER_HEIGHT.MOBILE} 2rem 3rem;
      top: -${HEADER_HEIGHT.MOBILE};
    }

    @media ${device.mobile} {
    }

    &::before {
      content: '';
      min-width: 14.5rem;
      min-height: 12.5rem;
      background-image: url(${treeImg});
      background-size: cover;
      position: absolute;
      bottom: 6.4rem;
      left: 0;

      @media ${device.tablet} {
        top: calc(4.5rem + ${HEADER_HEIGHT.MOBILE});
        bottom: auto;
      }
    }

    &::after {
      content: '';
      min-width: 10rem;
      min-height: 11rem;
      background-image: url(${houseImg});
      background-size: cover;
      background-position: right bottom;
      position: absolute;
      top: 29.5rem;
      right: 0;
      display: none;

      @media ${device.tablet} {
        display: block;
      }
    }

    @media ${device.tablet} {
      margin-top: ${HEADER_HEIGHT.MOBILE};
    }
  `,
  LandingTitleBox: styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    margin-top: 13rem;

    @media ${device.tablet} {
      margin-top: 16rem;
    }

    @media ${device.mobile} {
      margin-top: 17rem;
    }
  `,
  LandingSubContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    margin-bottom: 5rem;
    font-size: 1.6rem;

    @media ${device.tablet} {
      text-align: center;
      max-width: 43rem;
    }
  `,

  // Typography
  HeroTitle: styled.h1`
    color: #1f1e1b;
    font-family: 'ChosunCentennial';
    font-size: 6.4rem;
    letter-spacing: -0.64px;
  `,
  HeroSubTitle: styled.h2`
    color: #18316f;
    font-family: 'ChosunCentennial';
    font-size: 2.2rem;
  `,
  SubText: styled.p`
    color: #222;
    font-family: 'Pretendard';
    font-size: 2.2rem;
    line-height: 170%;
  `,
  HighlightText: styled.span`
    color: #222;
    font-family: 'EBSHMJESaeron';
    font-size: 2.2rem;
    line-height: 170%;
    font-weight: bold;
  `,

  //Element Style
  LogoIcon: styled.img`
    width: 8.4rem;
  `,
  StartButton: styled.button`
    font-family: 'EBSHunminjeongeum';
    width: 100%;
    height: 5rem;
    border-radius: 0.6rem;
    background-color: var(--green600);
    color: #fff;
    text-align: center;
    cursor: pointer;

    &:hover,
    &:active {
      background-color: var(--green700);
    }
  `,
};
