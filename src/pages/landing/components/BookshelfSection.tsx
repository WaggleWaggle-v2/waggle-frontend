import { TBookshelfFetchRes } from '@api/bookshelf/bookshelfRequest.type';
import restore from '@assets/icons/restore.svg';
import { device } from '@styles/breakpoints';
import { QueryObserverResult } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BookshelfCard from './BookshelfCard';
import SkeletonBookshelfCard from './BookshelfCard/components/SkeletonBookshelfCard';

interface TBookShelf {
  randomCardData: TBookshelfFetchRes[] | undefined;
  kingData: TBookshelfFetchRes;
  refetch: () => Promise<QueryObserverResult<Error>>;
}

const BookshelfSection = ({ randomCardData, kingData, refetch }: TBookShelf) => {
  const navigate = useNavigate();

  if (!randomCardData) {
    return <div>로딩 중</div>;
  }

  return (
    <S.SectionContainer>
      <S.BookShelfSection className="thanks">
        <S.BookShelfTitle>
          세종대왕님께 <br />
          감사인사 전하오.
        </S.BookShelfTitle>
        <S.FigureContainer>
          <S.CardButton
            onClick={() => {
              navigate(`/bookshelf/${kingData.id}`);
            }}>
            <BookshelfCard cardData={kingData} isKing={true} />
          </S.CardButton>
        </S.FigureContainer>
      </S.BookShelfSection>
      <S.BookShelfSection className="anyone">
        <div className="title">
          <S.BookShelfTitle>누구나 오시오~!</S.BookShelfTitle>
          <span>공개된 책상이오. 매일 무작위로 공개되오.</span>
        </div>
        <S.FigureContainer>
          {randomCardData.map(book => (
            <S.CardButton
              key={book.id}
              onClick={() => {
                navigate(`/bookshelf/${book.id}`);
              }}>
              <BookshelfCard cardData={book} />
            </S.CardButton>
          ))}
          <SkeletonBookshelfCard />
        </S.FigureContainer>
        <S.RestoreButton type="button" onClick={refetch}>
          다른 책장 추천받겠소
          <img src={restore} alt="새로고침" />
        </S.RestoreButton>
      </S.BookShelfSection>
    </S.SectionContainer>
  );
};

export default BookshelfSection;

const S = {
  // Layout
  SectionContainer: styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 2rem 4rem;
    max-width: 40rem;
    margin: 0 auto;
    min-width: min-content;
    gap: 7rem;

    @media ${device.mobile} {
      max-width: 100%;
    }
  `,
  BookShelfSection: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;
    width: 100%;

    @media ${device.mobile} {
      gap: 3.2rem;
    }
  `,
  FigureContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  `,
  TitleBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  `,

  // Typography
  BookShelfTitle: styled.h3`
    color: var(--gray900);
    text-align: center;
    font-family: 'EBSHMJESaeron';
    font-size: 2.4rem;
    line-height: 150%;
    font-weight: bold;
    margin-bottom: 0.8rem;
  `,

  //Element
  RestoreButton: styled.button`
    cursor: pointer;
    border-radius: 0.6rem;
    border: 1px solid var(--green600);
    color: var(--green600);
    padding: 1.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
  `,
  CardButton: styled.button`
    cursor: pointer;
  `,
};
