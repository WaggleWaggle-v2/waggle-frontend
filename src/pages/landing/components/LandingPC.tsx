import { MouseEvent, useState } from 'react';
import styled from 'styled-components';
import FirstSection from './LandingPC/components/FirstSection';
import SecondSection from './LandingPC/components/SecondSection';
import ThirdSection from './LandingPC/components/ThirdSection';

import { TCardShelfData, TRandomCardSelf } from '../mockData';

interface TBookShelf {
  randomCardData: TRandomCardSelf;
  kingData: TCardShelfData;
}

const LandingPC = ({ randomCardData, kingData }: TBookShelf) => {
  const [page, setPage] = useState<number>(1);
  const handlePageTransfer = (event: MouseEvent<HTMLButtonElement>) => {
    setPage(Number(event.currentTarget.value));
  };

  return (
    <S.Container>
      <S.SectionContainer $page={page}>
        <FirstSection />
        <SecondSection kingData={kingData} />
        <ThirdSection randomCardData={randomCardData.bookList} />
      </S.SectionContainer>
      <S.PageTransferContainer>
        <S.PageTransferButton type="button" value={1} isShow={1 === page} onClick={handlePageTransfer} />
        <S.PageTransferButton type="button" value={2} isShow={2 === page} onClick={handlePageTransfer} />
        <S.PageTransferButton type="button" value={3} isShow={3 === page} onClick={handlePageTransfer} />
      </S.PageTransferContainer>
    </S.Container>
  );
};

export default LandingPC;
const S = {
  Container: styled.div`
    overflow-y: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  `,
  SectionContainer: styled.div<{ $page: number }>`
    display: flex;
    transform: translateX(calc(-100dvw * ${({ $page }) => $page - 1}));
    transition: transform 0.5s ease-in-out;
  `,
  PageTransferContainer: styled.div`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 1rem;
    display: flex;
    gap: 2rem;
    align-items: center;
  `,
  PageTransferButton: styled.button<{ isShow: boolean }>`
    cursor: pointer;
    min-width: 1rem;
    min-height: 1rem;
    border: 0.1rem solid #c0aa87;
    ${({ isShow }) => isShow && 'background-color : #c0aa87'}
  `,
};
