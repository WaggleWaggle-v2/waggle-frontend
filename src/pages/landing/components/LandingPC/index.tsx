import { useEffect } from 'react';
import { TBookshelfFetchRes } from '@api/bookshelf/bookshelfRequest.type';
import typography from '@assets/images/typography-short.png';
import usePageStore from '@stores/useStore';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { QueryObserverResult } from '@tanstack/react-query';
import styled from 'styled-components';
import FirstLanding from './components/FirstLanding';
import SecondLanding from './components/SecondLanding';
import ThirdLanding from './components/ThirdLanding/ThirdLanding';
import { usePageNavigation } from './hooks/usePageNavigation';

const PAGE_COUNT = 3;

interface TLandingPC {
  randomCardData: TBookshelfFetchRes[] | undefined;
  refetch: () => Promise<QueryObserverResult<Error>>;
}

const LandingPc = (props: TLandingPC) => {
  const { randomCardData, refetch } = props;
  const { containerRef, currentPage, pageRefs, handleWheel, handleSetPage } = usePageNavigation(PAGE_COUNT);
  const rememberPage = usePageStore(state => state.currentPage);
  const updatePage = usePageStore(state => state.updatePage);

  useEffect(() => {
    updatePage(currentPage);
  }, [currentPage, updatePage]);

  useEffect(() => {
    if (rememberPage) {
      handleSetPage(rememberPage);
    }
  }, []);

  return (
    <S.Background>
      <S.Container ref={containerRef} onWheel={handleWheel}>
        <S.LandingContainer>
          <div ref={el => (pageRefs.current[0] = el)}>
            <FirstLanding />
          </div>
          <div ref={el => (pageRefs.current[1] = el)}>
            <SecondLanding />
          </div>
          <div ref={el => (pageRefs.current[2] = el)}>
            <ThirdLanding randomCardData={randomCardData} refetch={refetch} />
          </div>
          <S.TransferContainer>
            {[...Array(PAGE_COUNT)].map((_, index) => (
              <S.PageTransferButton
                key={index}
                $isSelect={index === currentPage}
                onClick={() => {
                  handleSetPage(index);
                }}
              />
            ))}
          </S.TransferContainer>
        </S.LandingContainer>
      </S.Container>
    </S.Background>
  );
};

export default LandingPc;

const S = {
  Background: styled.div`
    background-color: var(--background);
  `,
  Container: styled.div`
    width: 100dvw;
    height: 100dvh;
    position: relative;
    overflow-y: hidden;
    overflow-x: scroll;
    background: url(${typography}), linear-gradient(180deg, rgba(231, 221, 204, 0.75) 85%, #f6f3ee 100%);
    background-size: contain;
    background-position: left top;

    &::-webkit-scrollbar {
      display: none;
    }
  `,
  LandingContainer: styled.div`
    width: calc(100dvw * ${PAGE_COUNT});
    height: calc(94dvh - ${HEADER_HEIGHT.PC});
    margin-top: ${HEADER_HEIGHT.PC};
    display: flex;
  `,
  TransferContainer: styled.div`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 4rem;
    display: flex;
    gap: 2rem;
    align-items: center;
  `,
  PageTransferButton: styled.button<{ $isSelect: boolean }>`
    cursor: pointer;
    min-width: 1rem;
    min-height: 1rem;
    border: 0.1rem solid #c0aa87;
    ${({ $isSelect }) => ($isSelect ? 'background-color : #c0aa87' : '')};
  `,
};
