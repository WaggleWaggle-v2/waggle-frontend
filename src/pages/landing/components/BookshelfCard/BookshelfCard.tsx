import styled from 'styled-components';
import TotalCount from './components/TotalCount';
import { TCardShelfData } from '../../mockData';

const BookshelfCard = ({ cardData, isKing }: { cardData: TCardShelfData; isKing?: boolean }) => {
  const { imageUrl, owner, totalBookCount, description } = cardData;
  return (
    <S.Container>
      <S.CardImg src={imageUrl} alt="" $isKing={isKing} />
      <S.CardContentBox>
        <S.CardOwner>{owner}</S.CardOwner>
        <S.CardDescription>{description}</S.CardDescription>
        <TotalCount totalBookCount={totalBookCount} />
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
    padding: 1rem;
    display: grid;
    grid-template-columns: 8.5rem 1fr;
    gap: 1.2rem;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      transition: background-color 0.3s ease-in-out;
      background-color: var(--white);
    }
  `,
  CardImg: styled.img<{ $isKing?: boolean }>`
    border-radius: 0.4rem;
    object-fit: cover;
    width: 100%;
    height: ${({ $isKing }) => ($isKing ? 'auto' : '8.5rem')};
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
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 2rem;
    margin-bottom: 0.8rem;
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
  `,
};
