import { TBookshelfFetchRes } from '@api/bookshelf/bookshelfRequest.type';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import TotalCount from './components/TotalCount';

const BookshelfCard = ({ cardData, isKing }: { cardData: TBookshelfFetchRes; isKing?: boolean }) => {
  const { backgroundImageUrl, nickname, count, introduction } = cardData;
  return (
    <S.Container>
      <S.CardImg src={backgroundImageUrl} alt="" $isKing={isKing} />
      <S.CardContentBox>
        <S.CardOwner>{nickname}</S.CardOwner>
        <S.CardDescription>{introduction}</S.CardDescription>
        <TotalCount totalBookCount={count} />
      </S.CardContentBox>
    </S.Container>
  );
};

export default BookshelfCard;

const S = {
  Container: styled.figure`
    border-radius: 0.6rem;
    background-color: #efe9df;
    box-shadow: 0 0.4rem 0.4rem 0 rgba(222, 210, 192, 0.25);
    padding: 1rem 2rem 1rem 1rem;
    display: grid;
    grid-template-columns: 10rem 1fr;
    gap: 2rem;
    transition:
      background-color 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out;

    &:hover {
      transition:
        background-color 0.3s ease-in-out,
        box-shadow 0.3s ease-in-out;
      background-color: var(--white);
      box-shadow: 0.4rem 0.8rem 2rem 0 rgba(222, 210, 192, 0.8);
    }

    @media ${device.mobile} {
      grid-template-columns: 8rem 1fr;
      padding: 1rem;
      gap: 1.2rem;
    }
  `,
  CardImg: styled.img<{ $isKing?: boolean }>`
    border-radius: 0.6rem;
    object-fit: cover;
    max-width: 10rem;
    width: 10rem;
    height: ${({ $isKing }) => ($isKing ? '12rem' : '10rem')};

    @media ${device.mobile} {
      max-width: 8rem;
      width: 8rem;
      height: ${({ $isKing }) => ($isKing ? '10rem' : '8rem')};
    }
  `,
  CardContentBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  // Typography
  CardOwner: styled.h4`
    color: #000;
    font-family: 'Pretendard';
    font-size: 2rem;
    font-weight: 700;
    line-height: 2rem;
    margin-bottom: 1rem;
    margin-top: 0.8rem;

    @media ${device.mobile} {
      font-size: 1.4rem;
      margin-top: 0.3rem;
      margin-bottom: 0;
    }
  `,
  CardDescription: styled.p`
    color: #000;
    font-family: 'Pretendard';
    font-size: 1.2rem;
    line-height: 1.8rem;
    height: 3.6rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    @media ${device.mobile} {
      font-size: 1.2rem;
    }
  `,
};
