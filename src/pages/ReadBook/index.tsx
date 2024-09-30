import GoBackButton from '@pages/myPage/components/profileSection/components/GoBackButton';
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
        <S.Book />
        <S.GoBackButtonLayout>
          <GoBackButton
            onClick={() => {
              navigate('/myPage');
            }}
          />
        </S.GoBackButtonLayout>
      </S.ContentBox>
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
    justify-content: center;
    align-items: center;
    background-color: black;

    @media ${device.tablet} {
      padding: 12.7rem 4rem;
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
    background-color: green;

    @media ${device.tablet} {
      flex-direction: column;
      max-height: none;
      max-width: none;
      justify-content: center;
    }
  `,
  BookShelf: styled.div`
    background-color: orange;
    min-width: 20.9rem;
    min-height: 44rem;
    width: 20.9rem;
    height: 44rem;
  `,
  Book: styled.div`
    min-width: 50rem;
    min-height: 54rem;
    width: 48.5rem;
    height: 54rem;
    background-color: yellow;

    @media ${device.tablet} {
      min-width: 43rem;
      min-height: 46.5rem;
      width: 43rem;
      height: 46.5rem;
    }

    @media ${device.mobile} {
      min-width: 30rem;
      min-height: 45.5rem;
      width: 30rem;
      height: 45.5rem;
    }
  `,
  GoBackButtonLayout: styled.div`
    position: absolute;
    bottom: -5rem;
  `,
};
