import { skeletonAnimation } from '@styles/animation/skeletonAnimation';
import styled from 'styled-components';

const SkeletonKingSejongCard = () => {
  return <S.KingSeJongCard />;
};

export default SkeletonKingSejongCard;

const S = {
  KingSeJongCard: styled.div`
    min-height: 55rem;
    aspect-ratio: 1 / 1.3;
    border-radius: 0.6rem;
    overflow: hidden;
    background-color: var(--gray200);
    position: relative;
    ${skeletonAnimation}
  `,
};
