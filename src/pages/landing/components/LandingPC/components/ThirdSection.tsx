import { TCardShelfData } from '@pages/landing/mockData';
import styled from 'styled-components';
import BookshelfCard from '../../BookshelfCard';
import ButtonSection from '../../ButtonSection';
import { Main as BaseMain, Layout as BaseLayout } from '../style/commonPC';

interface TThirdSection {
  randomCardData: TCardShelfData[];
}

const ThirdSection = ({ randomCardData }: TThirdSection) => {
  return (
    <S.Main>
      <S.Layout>
        <div>
          <S.Title>누구나 오시오.</S.Title>
          <S.SubTitle>공개된 책장이오. 매일 무작위로 공개되오.</S.SubTitle>
        </div>
        <S.RandomCardContainer>
          {randomCardData.map(book => (
            <BookshelfCard cardData={book} />
          ))}
        </S.RandomCardContainer>
        <ButtonSection page={3} />
      </S.Layout>
    </S.Main>
  );
};

export default ThirdSection;

const S = {
  Main: styled(BaseMain)``,
  Layout: styled(BaseLayout)``,
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
