import { SetStateAction, useEffect, useState } from 'react';
import { TBookItem } from '@api/book/bookRequest.type';
import { MasonryGrid } from '@egjs/react-grid';
import { useBookQuery } from '@hooks/reactQuery/useQueryBook';
import usePageWidth from '@hooks/usePageWidth';
import { device, size } from '@styles/breakpoints';
import styled, { useTheme } from 'styled-components';
import BookItem from './BookItem';

interface TGuestBooksProps {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  id: string;
}

const GuestBooks = ({ setIsOpen, id }: TGuestBooksProps) => {
  const { data: bookData } = useBookQuery(id, null);
  const pageWidth = usePageWidth();
  const theme = useTheme();
  const [columns, setColumns] = useState<Array<Array<TBookItem>>>([]);

  const masonryColumn = pageWidth <= size.mobile ? 2 : 3;
  const bookCount = bookData?.length;

  const handleAddClick = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const columnsArray: Array<Array<TBookItem>> = [];
    let currentColumnHeight = 0;
    let currentColumn: TBookItem[] = [];

    bookData?.forEach(book => {
      const height = book.bookType === 'LONG' ? 460 : 218;
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
  }, [bookData]);

  return (
    <>
      <S.Container>
        {pageWidth <= size.tablet && (
          <S.BookCount>
            {bookCount ? `${bookCount}개의 방명록이 도착했어요!` : '새로운 책장 만든걸 축하하오!'}
          </S.BookCount>
        )}

        {/* TABLET, MOBILE 공유 버튼 */}
        <S.ShareButton>
          <p>내 책장 널리 알리기</p>
          <img src={theme.mobileCloud} alt="책장 공유 구름 아이콘" />
        </S.ShareButton>

        <S.AddBookButton onClick={handleAddClick}>+</S.AddBookButton>
        {pageWidth > size.tablet ? (
          <S.GuestBookWrapper>
            {columns.map((column, colIndex) => (
              <S.ColumnWrapper key={colIndex}>
                <S.Column>
                  {column.map((book, idx) => (
                    <BookItem data={book} key={idx} />
                  ))}
                </S.Column>
                <S.Graphic src={theme.graphic} />
              </S.ColumnWrapper>
            ))}
          </S.GuestBookWrapper>
        ) : (
          <S.StyledMasonry className="container" gap={12} column={masonryColumn}>
            {bookData?.map((book, idx) => <BookItem data={book} key={idx} />)}
          </S.StyledMasonry>
        )}
      </S.Container>
    </>
  );
};

export default GuestBooks;

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    padding: 0 4rem;

    @media ${device.tablet} {
      background-color: ${props => props.theme.pageBg};
      flex-direction: column;
      padding: 2rem;
      border-radius: 2rem 2rem 0 0;
      gap: 2.4rem;
      position: absolute;
      left: 0;
      right: 0;
      top: calc(100vh - 15rem);
      z-index: 1;
    }
  `,

  BookCount: styled.p`
    font-family: 'EBSHunminjeongeum';
    width: 100%;
    font-weight: 900;
    color: ${props => props.theme.text};
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
    border: 0.1rem solid ${props => props.theme.addBtnBorder};
    background-color: ${props => props.theme.addBtnBg};
    height: calc(46.4rem);
    font-size: 7rem;
    color: ${props => props.theme.addBtnText};
    cursor: pointer;
    @media ${device.tablet} {
      width: 100%;
      height: 7.2rem;
      font-size: 5rem;
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
      background: ${props => props.theme.shareBtnBg};
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
    width: 100%;
    height: 22rem;
    position: absolute;
    bottom: -0.8rem;
  `,

  Column: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 46.4rem;
    gap: 1.3rem;
  `,

  StyledMasonry: styled(MasonryGrid)`
    width: calc(100% - 1rem);
  `,
};
