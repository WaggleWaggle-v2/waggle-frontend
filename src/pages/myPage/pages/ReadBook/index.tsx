import { useBookDetail } from '@hooks/reactQuery/useQueryBook';
import BookScollPaper from '@pages/main/components/bookshelf/BookScollPaper';
import GoBackButton from '@pages/myPage/components/profileSection/components/GoBackButton';
import { skeletonAnimation } from '@styles/animation/skeletonAnimation';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const ReadBook = () => {
  const navigate = useNavigate();
  const bookId = useParams();
  const { data } = useBookDetail(Number(bookId.id));
  const { state } = useLocation();

  return (
    <S.Container>
      <S.ContentBox>
        {data?.bookImageUrl ? <S.BookShelf src={data.bookImageUrl} /> : <S.BookImgSkeleton />}
        <S.Book>
          <BookScollPaper
            ownerName={data ? data.receiverNickname : ''}
            content={data ? data.description : ''}
            sender={data ? data.senderNickname : ''}
          />
        </S.Book>
      </S.ContentBox>
      <S.GoBackButtonLayout>
        <S.ButtonBox>
          <GoBackButton
            onClick={() => {
              navigate(`/myPage/${state}`);
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
    min-height: 62.3rem;
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
      justify-content: center;
    }
  `,
  BookShelf: styled.img`
    min-width: 22rem;
    min-height: 22rem;
    width: 22rem;
    object-fit: contain;
  `,
  Book: styled.div`
    position: static;
    min-width: 48.5rem;
    max-width: 48.5rem;

    @media ${device.mobile} {
      margin: 0 auto;
      min-width: 32rem;
      padding: 0 1rem;
      min-width: 0;
      max-width: 100rem;
    }
  `,
  GoBackButtonLayout: styled.div`
    max-width: 93rem;
    width: 100%;
  `,
  ButtonBox: styled.div`
    margin-right: auto;
  `,
  BookImgSkeleton: styled.div`
    min-width: 22rem;
    min-height: 22rem;
    ${skeletonAnimation}
  `,
};
