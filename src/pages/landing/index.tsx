import { useRandomBookshelfQuery } from '@hooks/reactQuery/useQueryBookshelf';
import usePageWidth from '@hooks/usePageWidth';
import { device, size } from '@styles/breakpoints';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BookshelfSection from './components/BookshelfSection';
import DescriptionSection from './components/DescriptionSection';
import LandingPC from './components/LandingPC';
import Scroller from './components/Scroller';
import TitleSection from './components/TitleSection';
import { KingSejong } from './mockData';
import { Layout as BaseLayout, Main } from './style/landingCommon';

const Landing = () => {
  const navigate = useNavigate();
  const pageWidth = usePageWidth();
  const isPc = pageWidth > size.tablet;
  const { data: randomCardData, refetch } = useRandomBookshelfQuery();

  return (
    <>
      <Scroller />
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
          {randomCardData && (
            <BookshelfSection randomCardData={randomCardData} kingData={KingSejong} refetch={refetch} />
          )}
        </>
      ) : (
        randomCardData && <LandingPC randomCardData={randomCardData} kingData={KingSejong} refetch={refetch} />
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
};
