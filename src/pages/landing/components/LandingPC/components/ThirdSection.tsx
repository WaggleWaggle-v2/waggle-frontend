import { MouseEvent } from 'react';
import { TBookshelfFetchRes } from '@api/bookshelf/bookshelfRequest.type';
import restoreIcon from '@assets/icons/restore.svg';
import { QueryObserverResult } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BookshelfCard from '../../BookshelfCard';
import LandingButton from '../../LandingButton';
import ShelfDecoration from '../../ShelfDecoration';
import { Main as BaseMain, Layout as BaseLayout, ButtonContainer } from '../style/commonPC';

interface TThirdSection {
  randomCardData: TBookshelfFetchRes[];
  refetch: () => Promise<QueryObserverResult<Error>>;
}

const ThirdSection = ({ randomCardData, refetch }: TThirdSection) => {
  const navigate = useNavigate();
  const redirectBookshelf = (event: MouseEvent<HTMLButtonElement>) => {
    navigate(`/bookshelf/${event.currentTarget.id}`);
  };

  return (
    <S.Main>
      <S.Layout>
        <div>
          <S.Title>누구나 오시오.</S.Title>
          <S.SubTitle>공개된 책장이오. 매일 무작위로 공개되오.</S.SubTitle>
        </div>
        <S.RandomCardContainer>
          {randomCardData.map(book => (
            <button type="button" id={String(book.id)} onClick={redirectBookshelf} style={{ cursor: 'pointer' }}>
              <BookshelfCard cardData={book} key={book.id} />
            </button>
          ))}
        </S.RandomCardContainer>
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
  ButtonContainer,
};
