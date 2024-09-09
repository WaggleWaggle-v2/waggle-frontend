import styled from 'styled-components';
import BookshelfCard from './BookshelfCard';
import restore from '@assets/icons/restore.svg';

const BookshelfSection = () => {
  return (
    <S.SectionContainer>
      <article className="thanks">
        <div className="title">
          <h3>세종대왕님께&nbsp;감사인사 전하오.</h3>
        </div>
        <div className="figure_list">
          <BookshelfCard />
        </div>
      </article>
      <article className="anyone">
        <div className="title">
          <h3>누구나 오시오.</h3>
          <span>공개된 책상이오. 매일 무작위로 공개되오.</span>
        </div>
        <div className="figure_list">
          <BookshelfCard />
          <BookshelfCard />
          <BookshelfCard />
        </div>
        <button type="button" className="reset">
          다른 책장 추천받겠소
          <img src={restore} alt="새로고침" />
        </button>
      </article>
    </S.SectionContainer>
  );
};

export default BookshelfSection;

const S = {
  SectionContainer: styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    max-width: 35.6rem;
    margin: 0 auto;
  `,
};
