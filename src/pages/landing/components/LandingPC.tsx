import { MouseEvent, useState } from 'react';
import treeImg from '@assets/images/tree.png';
import typography from '@assets/images/typography-short.png';
import styled from 'styled-components';
import BookshelfCard from './BookshelfCard/BookshelfCard';
import TotalCount from './BookshelfCard/components/TotalCount';
import ButtonSection from './ButtonSection';
import DescriptionSection from './DescriptionSection';
import TitleSection from './TitleSection';

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
    <>
      <S.Main $isFirst={page === 1} $treeImg={treeImg} $background={typography}>
        <S.Layout $page={page}>
          {page === 1 && (
            <>
              <TitleSection />
              <DescriptionSection />
            </>
          )}
          {page === 2 && (
            <S.KingSeJongCard>
              <S.BookCountLayout>
                <TotalCount totalBookCount={kingData.totalBookCount} size={'large'} />
              </S.BookCountLayout>
              <S.DescriptionText className="hover-card">{kingData.description}</S.DescriptionText>
              <S.CardHover className="hover-card" />
              <S.KinSeJongImg src={kingData.imageUrl} alt={kingData.owner} />
            </S.KingSeJongCard>
          )}
          {page === 3 && (
            <>
              <div>
                <S.Title>누구나 오시오.</S.Title>
                <S.SubTitle>공개된 책장이오. 매일 무작위로 공개되오.</S.SubTitle>
              </div>
              <S.RandomCardContainer>
                {randomCardData.bookList.map(book => (
                  <BookshelfCard cardData={book} />
                ))}
              </S.RandomCardContainer>
            </>
          )}
          <ButtonSection page={page} />
          <S.PageTransferContainer>
            <S.PageTransferButton type="button" value={1} isShow={1 === page} onClick={handlePageTransfer} />
            <S.PageTransferButton type="button" value={2} isShow={2 === page} onClick={handlePageTransfer} />
            <S.PageTransferButton type="button" value={3} isShow={3 === page} onClick={handlePageTransfer} />
          </S.PageTransferContainer>
        </S.Layout>
      </S.Main>
    </>
  );
};

export default LandingPC;
const S = {
  Main: styled.div<{ $isFirst: boolean; $treeImg: string; $background: string }>`
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background: url(${typography}), linear-gradient(180deg, rgba(231, 221, 204, 0.75) 85%, #f6f3ee 100%);
    background-size: contain;
    background-position: left top;
    &::before {
      content: '';
      min-width: 14.5rem;
      min-height: 12.5rem;
      background-image: url(${({ $treeImg }) => $treeImg});
      background-size: cover;
      position: absolute;
      bottom: 6.4rem;
      left: 0;
      ${({ $isFirst }) =>
        !$isFirst &&
        `
      display : none;`}
    }
  `,
  Layout: styled.div<{ $page: number }>`
    max-width: 86rem;
    display: grid;
    grid-template-columns: 1fr 31rem;
    grid-column-gap: 11rem;
    height: 100%;
    padding-top: 14%;
    margin-bottom: 5rem;

    ${({ $page }) =>
      $page === 2 &&
      `
      padding-top : 10%;
      align-items : center;
    `}
  `,
  PageTransferContainer: styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 1rem;
    display: flex;
    gap: 2rem;
    align-items: center;
  `,
  RandomCardContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 44rem;
  `,
  PageTransferButton: styled.button<{ isShow: boolean }>`
    cursor: pointer;
    min-width: 1rem;
    min-height: 1rem;
    border: 0.1rem solid #c0aa87;
    ${({ isShow }) => isShow && 'background-color : #c0aa87'}
  `,
  KingSeJongCard: styled.div`
    height: 50rem;
    border-radius: 0.6rem;
    overflow: hidden;
    position: relative;

    &:hover .hover-card {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  `,
  CardHover: styled.div`
    position: absolute;
    width: 46.4rem;
    height: 26rem;
    bottom: 0;
    z-index: 1;
    opacity: 0;
    background: linear-gradient(180deg, rgba(34, 34, 34, 0) 15.85%, rgba(34, 34, 34, 0.44) 37.17%, #222 100%);
    mix-blend-mode: multiply;
    transition: opacity 0.3s ease-in-out;
  `,
  KinSeJongImg: styled.img`
    width: 100%;
    height: 100%;
  `,
  DescriptionText: styled.p`
    color: var(--white);
    font-family: 'Pretendard';
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 150%;
    position: absolute;
    bottom: 4rem;
    left: 4rem;
    right: 4rem;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  `,
  BookCountLayout: styled.div`
    position: absolute;
    right: 2rem;
    top: 2rem;
  `,

  // Typography
  Title: styled.h1`
    color: var(--gray900);
    font-family: 'EBSHMJESaeron';
    font-size: 3.2rem;
    line-height: 130%;
  `,
  SubTitle: styled.h2`
    color: var(--gray7002);
    font-family: 'Pretendard';
    font-size: 2rem;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.02rem;
  `,
};
