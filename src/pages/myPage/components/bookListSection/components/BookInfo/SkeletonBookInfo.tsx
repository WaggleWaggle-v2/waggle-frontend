import RightArrowIcon from '@components/icons/RightArrowIcon';
import { skeletonAnimation } from '@styles/animation/skeletonAnimation';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

const SkeletonBookInfo = () => {
  return (
    <S.Container>
      <S.BookImg />
      <div>
        <S.Title />
        <S.Content />
      </div>
      <RightArrowIcon width={11} color={'#222'} style={`flex-shrink : 0; margin-left : auto;`} />
    </S.Container>
  );
};

export default SkeletonBookInfo;

const S = {
  Container: styled.div`
    padding: 1.8rem 1.3rem;
    display: flex;
    gap: 1.3rem;
    align-items: center;

    &:not(:last-child) {
      border-bottom: 0.1rem solid var(--gray300);
    }
  `,
  TextContainer: styled.div``,

  Title: styled.div`
    min-height: 2.8rem;
    ${skeletonAnimation}

    @media ${device.mobile} {
      min-height: 1.8rem;
    }
  `,
  Content: styled.div`
    margin-top: 0.8rem;
    min-height: 1.4rem;
    min-width: 40rem;

    ${skeletonAnimation}

    @media ${device.mobile} {
      min-height: 1.2rem;
      min-width: 20rem;
    }
  `,
  BookImg: styled.div`
    min-width: 6.4rem;
    min-height: 6.4rem;
    border-radius: 1rem;
    flex-shrink: 0;
    ${skeletonAnimation}

    @media ${device.mobile} {
      min-width: 4.6rem;
      min-height: 4.6rem;
      border-radius: 0.8rem;
    }
  `,
};
