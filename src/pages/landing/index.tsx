import usePageWidth from '@hooks/usePageWidth';
import { device, size } from '@styles/breakpoints';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BookshelfSection from './components/BookshelfSection';
import DescriptionSection from './components/DescriptionSection';
import LandingPC from './components/LandingPC';
import TitleSection from './components/TitleSection';
import { CardShelfMock, KingData } from './mockData';
import { Layout as BaseLayout, Main } from './style/landingCommon';
import { scrollerAnimation } from './style/scrollAnimatioin';

const Landing = () => {
  const navigate = useNavigate();
  const pageWidth = usePageWidth();
  const isPc = pageWidth > size.tablet;

  return (
    <>
      <S.ScrollContainer>
        <S.Mouse>
          <S.Scroller />
        </S.Mouse>
        <S.ScrollText>Scroll</S.ScrollText>
      </S.ScrollContainer>
      {!isPc ? (
        <>
          <S.Main>
            <S.Layout>
              <TitleSection />
              <DescriptionSection />
              <S.StartButton type="button" onClick={() => navigate('/login')}>
                와글와글 시작하겠소
              </S.StartButton>
            </S.Layout>
          </S.Main>
          <BookshelfSection randomCardData={CardShelfMock} kingData={KingData} />
        </>
      ) : (
        <LandingPC randomCardData={CardShelfMock} kingData={KingData} />
      )}
    </>
  );
};

export default Landing;

const S = {
  // Layout
  Main,
  Layout: styled(BaseLayout)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 17rem;
  `,
  LandingSubContainer: styled.div`
    @media ${device.tablet} {
      max-width: 43rem;
      width: 100%;
    }
  `,

  // Typography
  ScrollText: styled.p`
    display: block;
    margin-top: 0.8rem;
    text-align: center;
    color: var(--button-active);
  `,

  //Element Style
  StartButton: styled.button`
    font-family: 'EBSHunminjeongeum';
    width: 100%;
    height: 5rem;
    border-radius: 0.6rem;
    background-color: var(--green600);
    color: #fff;
    text-align: center;
    cursor: pointer;
    flex-shrink: 0;

    @media ${device.tablet} {
      max-width: 43rem;
    }

    &:hover,
    &:active {
      background-color: var(--green700);
    }
  `,

  // Scroll
  ScrollContainer: styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 2%;
    right: 2%;
    transform: translate(0, -35%);
    z-index: 30;
  `,
  Mouse: styled.div`
    width: 0.3rem;
    padding: 0.8rem 1.2rem;
    height: 4rem;
    border: 0.2rem solid var(--button-active);
    border-radius: 2.5rem;
    opacity: 0.75;
  `,
  Scroller: styled.div`
    width: 0.3rem;
    height: 1rem;
    border-radius: 25%;
    background-color: var(--button-active);
    animation: ${scrollerAnimation} 2.25s cubic-bezier(0.15, 0.41, 0.69, 0.94) infinite;
  `,
};
