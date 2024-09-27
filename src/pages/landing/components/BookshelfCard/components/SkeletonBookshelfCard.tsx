import { skeletonAnimation } from '@styles/animation/skeletonAnimation';
import styled from 'styled-components';

interface TSkeletonBookshelfCard {
  isKing: boolean;
}

const SkeletonBookshelfCard = (props: TSkeletonBookshelfCard) => {
  const { isKing } = props;
  return (
    <S.Container>
      <S.CardImg $isKing={isKing} />
      <S.CardContentBox>
        <S.CardOwner />
        <S.CardDescription />
        <S.MessageShadow />
      </S.CardContentBox>
    </S.Container>
  );
};

export default SkeletonBookshelfCard;

const S = {
  Container: styled.figure`
    border-radius: 0.6rem;
    background-color: var(--gray200);
    padding: 1rem 2rem 1rem 1rem;
    display: grid;
    grid-template-columns: 10rem 1fr;
    gap: 2rem;
  `,
  CardImg: styled.div<{ $isKing: boolean }>`
    border-radius: 0.6rem;
    object-fit: cover;
    width: 10rem;
    height: ${({ $isKing }) => ($isKing ? '12rem' : '10rem')};
    ${skeletonAnimation}
  `,
  CardContentBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  // Typography
  CardOwner: styled.h4`
    min-height: 2rem;
    margin-bottom: 1rem;
    margin-top: 0.8rem;
    ${skeletonAnimation}
  `,
  CardDescription: styled.p`
    height: 3.6rem;
    ${skeletonAnimation}
  `,
  MessageShadow: styled.div`
    min-width: 5rem;
    margin-left: auto;
    min-height: 1.5rem;
    ${skeletonAnimation}
  `,
};
