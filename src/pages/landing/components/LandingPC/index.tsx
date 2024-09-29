import { TBookshelfFetchRes } from '@api/bookshelf/bookshelfRequest.type';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { QueryObserverResult } from '@tanstack/react-query';
import styled from 'styled-components';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import useSwapPage from './hooks/useSwapPage';

interface TBookShelf {
  randomCardData: TBookshelfFetchRes[] | undefined;
  kingData: TBookshelfFetchRes | undefined;
  refetch: () => Promise<QueryObserverResult<Error>>;
}

const LandingPC = ({ randomCardData, kingData, refetch }: TBookShelf) => {
  const { sectionRefs, buttonRefs, handlePageTransfer } = useSwapPage();

  return (
    <S.Container>
      <S.SectionContainer>
        <S.Section ref={el => (sectionRefs.current[0] = el)}>
          <FirstSection />
        </S.Section>
        <S.Section ref={el => (sectionRefs.current[1] = el)}>
          <SecondSection kingData={kingData} />
        </S.Section>
        <S.Section ref={el => (sectionRefs.current[2] = el)}>
          <ThirdSection randomCardData={randomCardData} refetch={refetch} />
        </S.Section>
      </S.SectionContainer>
      <S.PageTransferContainer>
        <S.PageTransferButton
          type="button"
          ref={el => (buttonRefs.current[0] = el)}
          value={1}
          onClick={handlePageTransfer}
          style={{ backgroundColor: '#c0aa87' }}
        />
        <S.PageTransferButton
          type="button"
          ref={el => (buttonRefs.current[1] = el)}
          value={2}
          onClick={handlePageTransfer}
        />
        <S.PageTransferButton
          type="button"
          ref={el => (buttonRefs.current[2] = el)}
          value={3}
          onClick={handlePageTransfer}
        />
      </S.PageTransferContainer>
    </S.Container>
  );
};

export default LandingPC;
const S = {
  Container: styled.div`
    height: calc(100vh - ${HEADER_HEIGHT.PC});

    &::-webkit-scrollbar {
      display: none;
    }
  `,
  Section: styled.div`
    scroll-snap-align: start;
    display: flex;
  `,
  SectionContainer: styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    scroll-snap-type: x mandatory;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  `,
  PageTransferContainer: styled.div`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 4rem;
    display: flex;
    gap: 2rem;
    align-items: center;
  `,
  PageTransferButton: styled.button`
    cursor: pointer;
    min-width: 1rem;
    min-height: 1rem;
    border: 0.1rem solid #c0aa87;
  `,
};
