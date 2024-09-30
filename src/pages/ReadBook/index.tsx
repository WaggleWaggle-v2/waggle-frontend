import BookScollPaper from '@pages/main/components/bookshelf/BookScollPaper';
import GoBackButton from '@pages/myPage/components/profileSection/components/GoBackButton';
import { skeletonAnimation } from '@styles/animation/skeletonAnimation';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ReadBook = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.ContentBox>
        <S.BookShelf />
        <S.Book>
          <BookScollPaper
            ownerName={'여섯글자유저'}
            content={
              '아버지를 아버지라 부르지 못하고 어쩌구아버지를 아버지라 부르지 못하고 어쩌구아버지를 아버지라 부르지 못하고 어쩌구아버지를 아버지라 부르지 못하고 어쩌구아버지를 아버지라 부르지 못하고 어쩌구아버지를 아버지라 부르지 못하고 어쩌구아버지를 아버지라 부르지 못하고 어쩌구아버지를 아버지라 부르지 못하고 어쩌구아버지를 아버지라 부르지 못하고 어쩌구'
            }
            sender={'신나는토끼'}
            isPreview={false}
          />
        </S.Book>
      </S.ContentBox>
      <S.GoBackButtonLayout>
        <S.ButtonBox>
          <GoBackButton
            onClick={() => {
              navigate('/myPage');
            }}
          />
        </S.ButtonBox>
      </S.GoBackButtonLayout>
    </S.Container>
  );
};

export default ReadBook;

const S = {
  Container: styled.div`
    width: 100vw;
    margin-top: ${HEADER_HEIGHT.PC};
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 5rem;

    @media ${device.tablet} {
      padding: 5rem 4rem 10rem;
    }

    @media ${device.mobile} {
      margin-top: ${HEADER_HEIGHT.MOBILE};
      padding: 4rem 0;
    }
  `,
  ContentBox: styled.div`
    max-width: 93rem;
    max-height: 73.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10rem;
    position: relative;
    padding: 8rem 0;

    @media ${device.tablet} {
      flex-direction: column;
      max-height: none;
      max-width: none;
      justify-content: flex-start;
      padding: 0;
    }

    @media ${device.mobile} {
      height: 100%;
    }
  `,
  BookShelf: styled.img`
    min-width: 20.9rem;
    min-height: 44rem;
    width: 20.9rem;
    ${skeletonAnimation}
  `,
  Book: styled.div`
    position: static;
    min-width: 48.5rem;
    max-width: 48.5rem;

    @media ${device.tablet} {
      min-width: 41.2rem;
    }

    @media ${device.mobile} {
      margin-right: 10rem;
      width: 34rem;
      min-width: 34rem;
      min-height: 45.5rem;
      height: 45.5rem;
    }
  `,
  GoBackButtonLayout: styled.div`
    max-width: 93rem;
    width: 100%;
  `,
  ButtonBox: styled.div`
    margin-right: auto;
  `,
};
