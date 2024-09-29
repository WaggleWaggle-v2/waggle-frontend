import { ReactNode } from 'react';
import restoreIcon from '@assets/icons/restore.svg';
import ShelfDecoration from '@components/shelfDecoration/ShelfDecoration';
import LandingButton from '@pages/landing/components/LandingButton';
import { QueryObserverResult } from '@tanstack/react-query';
import styled from 'styled-components';
import { ButtonContainer, Layout, Main } from '../../style/commonPC';

interface TThirdSectionLayout {
  children: ReactNode;
  refetch: () => Promise<QueryObserverResult<Error>>;
}

const ThirdSectionLayout = (props: TThirdSectionLayout) => {
  const { children, refetch } = props;
  return (
    <S.Main>
      <S.Layout>
        <div>
          <S.Title>누구나 오시오.</S.Title>
          <S.SubTitle>공개된 책장이오. 매일 무작위로 공개되오.</S.SubTitle>
        </div>
        <S.RandomCardContainer>{children}</S.RandomCardContainer>
        <S.ButtonContainer>
          <>
            <ShelfDecoration>ㅇ</ShelfDecoration>
            <ShelfDecoration>ㄱ</ShelfDecoration>
            <LandingButton buttonType={'beige'} icon={restoreIcon} fontSize="2.8rem" onClick={refetch}>
              다른 책장 <br /> 추천 받겠소
            </LandingButton>
            <ShelfDecoration>ㄱ</ShelfDecoration>
            <ShelfDecoration>ㅇ</ShelfDecoration>
          </>
        </S.ButtonContainer>
      </S.Layout>
    </S.Main>
  );
};

export default ThirdSectionLayout;

const S = {
  Main: styled(Main)``,
  Layout: styled(Layout)`
    grid-row-gap: 3rem;
    grid-column-gap: 7rem;
  `,
  RandomCardContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 44rem;
    align-self: start;
  `,
  Title: styled.h1`
    color: var(--gray900);
    font-family: 'EBSHMJESaeron';
    font-size: 3.2rem;
    line-height: 130%;
    font-weight: 700;
    margin-bottom: 0.6rem;
  `,
  SubTitle: styled.h2`
    color: var(--gray7002);
    font-family: 'Pretendard';
    font-size: 2rem;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.02rem;
  `,
  ButtonContainer,
};
