import messageIcon from '@assets/icons/message.svg';
import styled from 'styled-components';
import { TCardShelfData } from '../mockData';

const BookshelfCard = ({ cardData }: { cardData: TCardShelfData }) => {
  const { imageUrl, owner, totalBookCount, description } = cardData;
  return (
    <S.Container>
      <S.CardImg src={imageUrl} alt="" />
      <S.CardContentBox>
        <S.CardOwner>{owner}</S.CardOwner>
        <S.CardDescription>{description}</S.CardDescription>
        <S.TotalCountBox>
          <S.MessageIcon src={messageIcon} alt={`${owner}의 책장`} />
          <S.TotalCount>{totalBookCount.toLocaleString()} 개</S.TotalCount>
        </S.TotalCountBox>
      </S.CardContentBox>
    </S.Container>
  );
};

export default BookshelfCard;

const S = {
  Container: styled.figure`
    border-radius: 0.6rem;
    background: #fffcf7;
    box-shadow: 0 0.4rem 0.4rem 0 rgba(222, 210, 192, 0.25);
    padding: 1rem;
    display: flex;
    gap: 1.2rem;
  `,
  CardImg: styled.img`
    width: 8rem;
    aspect-ratio: 1 /1;
    border-radius: 0.4rem;
    object-fit: cover;
  `,
  CardContentBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  TotalCountBox: styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-left: auto;
    margin-top: auto;
  `,

  // Typography
  CardOwner: styled.h4`
    color: #000;
    font-family: 'Pretendard';
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 2rem;
  `,
  CardDescription: styled.p`
    color: #000;
    font-family: 'Pretendard';
    font-size: 1.2rem;
    line-height: 1.8rem;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 20.4rem;
    height: 3.6rem;
  `,
  TotalCount: styled.p`
    color: #2b6a1b;
    font-family: 'Pretendard';
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 2rem;
  `,

  //Element
  MessageIcon: styled.img`
    width: 1.5rem;
    aspect-ratio: 1 /1;
  `,
};
