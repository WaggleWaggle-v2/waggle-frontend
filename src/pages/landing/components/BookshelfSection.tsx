import styled from 'styled-components';
import BookshelfCard from './BookshelfCard/BookshelfCard';
import restore from '@assets/icons/restore.svg';
import { TCardShelfData, TRandomCardSelf } from '../mockData';

interface TBookShelf {
  randomCardData: TRandomCardSelf;
  kingData: TCardShelfData;
}

const BookshelfSection = ({ randomCardData, kingData }: TBookShelf) => {
  return (
    <S.SectionContainer>
      <S.BookShelfSection className="thanks">
        <S.BookShelfTitle>
          세종대왕님께 <br />
          감사인사 전하오.
        </S.BookShelfTitle>
        <S.FigureContainer>
          <BookshelfCard cardData={kingData} />
        </S.FigureContainer>
      </S.BookShelfSection>
      <S.BookShelfSection className="anyone">
        <div className="title">
          <S.BookShelfTitle>누구나 오시오~!</S.BookShelfTitle>
          <span>공개된 책상이오. 매일 무작위로 공개되오.</span>
        </div>
        <S.FigureContainer>
          {randomCardData.bookList.map(book => (
            <BookshelfCard cardData={book} />
          ))}
        </S.FigureContainer>
        <S.RestoreButton type="button">
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
    padding: 0 2rem 3rem;
    max-width: 35.6rem;
    margin: 0 auto;
    min-width: min-content;
    gap: 7rem;
  `,
  BookShelfSection: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  `,
  FigureContainer: styled.div`
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
  `,
};
