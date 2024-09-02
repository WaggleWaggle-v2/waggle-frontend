import { useEffect, useState } from 'react';
import cloudIcon from '@assets/icons/cloud-lightgreen.svg';
import { BOOKSHELF_DATA } from '@constants/mock';
import { MasonryGrid } from '@egjs/react-grid';
import usePageWidth from '@hooks/usePageWidth';
import { device, size } from '@styles/breakpoints';
import styled from 'styled-components';
interface TBookshelf {
  sender: string;
  image: string;
  type: string;
}

const GuestBooks = () => {
  const { books } = BOOKSHELF_DATA;
  const pageWidth = usePageWidth();
  const [columns, setColumns] = useState<Array<Array<TBookshelf>>>([]);

  const handleAddClick = () => {
    console.log('book added!');
  };

  useEffect(() => {
    const columnsArray: Array<Array<TBookshelf>> = [];
    let currentColumnHeight = 0;
    let currentColumn: TBookshelf[] = [];

    books.forEach(book => {
      const height = book.type === 'long' ? 460 : 218;
      if (currentColumnHeight + height > 460) {
        columnsArray.push(currentColumn);
        currentColumn = [];
        currentColumnHeight = 0;
      }
      currentColumn.push({ ...book });
      currentColumnHeight += height;
    });

    if (currentColumn.length > 0) {
      columnsArray.push(currentColumn);
    }

    setColumns(columnsArray);
  }, [books]);

  return (
    <S.Container>
      <S.ShareButton>
        <p>내 책장 널리 알리기</p>
        <img src={cloudIcon} alt="책장 공유 구름 아이콘" />
      </S.ShareButton>

      <S.AddBookButton onClick={handleAddClick}>+</S.AddBookButton>
      {pageWidth > size.tablet ? (
        <S.GuestBookWrapper>
          {columns.map((column, colIndex) => (
            <S.ColumnWrapper key={colIndex}>
              <S.Column>
                {column.map((book, index) => (
                  <S.Book key={`${book.type}-${index}`}>
                    <img src={book.image} alt={`book-${index}`} />
                    <S.Sender>{book.sender}</S.Sender>
                  </S.Book>
                ))}
              </S.Column>
              <S.Graphic src={cloudIcon} />
            </S.ColumnWrapper>
          ))}
        </S.GuestBookWrapper>
      ) : (
        <S.StyledMasonry className="container" gap={12} column={2} columnSize={0} columnSizeRatio={0}>
          {books.map((book, index) => (
            <S.Book key={`${book.type}-${index}`}>
              <img src={book.image} alt={`book-${index}`} />
              {/* <S.Sender>{book.sender}</S.Sender> */}
              <S.Index>{book.sender}</S.Index>
            </S.Book>
          ))}
        </S.StyledMasonry>
      )}
    </S.Container>
  );
};

export default GuestBooks;

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    background-color: var(--background);
    padding: 0 4rem;

    @media ${device.tablet} {
      flex-direction: column;
      padding: 2rem;
      border-radius: 2rem 2rem 0 0;
      gap: 2.4rem;
      position: absolute;
      left: 0;
      right: 0;
      top: calc(100vh - 20rem);
      z-index: 1;
    }
  `,

  GuestBookWrapper: styled.div`
    display: flex;
    margin-left: 2rem;
    gap: 2rem;
  `,

  AddBookButton: styled.button`
    width: 22rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--gray400);
    background-color: #ece9e2;
    height: calc(46.4rem + 2.4rem - 0rem);
    font-size: 7rem;
    color: var(--brown800);
    cursor: pointer;
    @media ${device.tablet} {
      width: 100%;
      height: 7.2rem;
    }
  `,

  ShareButton: styled.button`
    display: none;
    font-family: 'Pretendard';
    @media ${device.tablet} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--white);
      background-color: #336b22;
      border-radius: 4rem;
      width: calc(20.2rem - 2.2rem * 2);
      font-weight: 600;

      height: 4.8rem;
      padding: 0 2.2rem;
      font-size: 1.6rem;

      position: absolute;
      top: -7rem;
      left: 2rem;
      img {
        width: 2.8rem;
      }
    }
  `,

  ColumnWrapper: styled.div`
    position: relative;
    width: 100%;
  `,

  Graphic: styled.img`
    width: 8rem;
    position: absolute;
    bottom: calc(22%);
    left: calc(50% - 4rem);
    z-index: 0;
  `,

  Column: styled.div`
    display: flex;
    flex-direction: column;
    height: 49rem;
    gap: 1.3rem;
  `,

  Book: styled.div`
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 220px;
    z-index: 1;

    @media ${device.tablet} {
      position: absolute;
      width: 50%;
      img {
        width: 100%;
        height: auto;
      }
    }
  `,

  Sender: styled.p`
    font-family: 'Pretendard';
    margin-top: 0.4rem;
    font-size: 1.6rem;
    line-height: 150%;
    color: var(--brown700);
    width: 100%;
    font-weight: 600;
  `,

  Index: styled.p`
    background-color: var(--brown300);
    color: var(--brown700);
    padding: 0.4rem 0.6rem;
    border-radius: 1rem;
    position: absolute;
    font-family: 'Pretendard';
    font-size: 2rem;
    font-weight: 600;
    top: 1rem;
    right: 1rem;
    @media ${device.tablet} {
      font-size: 3.6vw;
    }
  `,

  StyledMasonry: styled(MasonryGrid)`
    width: calc(100% - 1rem);
  `,
};
