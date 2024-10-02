/* eslint-disable react-hooks/exhaustive-deps */
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { TBookItem } from '@api/book/bookRequest.type';
import plusImg from '@assets/icons/plus-light.svg';
import rightArrow from '@assets/icons/right-arrow.svg';
import shareImg from '@assets/icons/share.svg';
import { MasonryGrid } from '@egjs/react-grid';
import { useBookQuery } from '@hooks/reactQuery/useQueryBook';
import { useUserQuery } from '@hooks/reactQuery/useQueryUser';
import usePageWidth from '@hooks/usePageWidth';
import { device, size } from '@styles/breakpoints';
import { zIndex } from '@styles/zIndex';
import styled, { css, useTheme } from 'styled-components';
import BookItem from './BookItem';
import BookSkeleton from './BookSkeleton';

interface TGuestBooksProps {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  id: string;
  handleOpenShare: () => void;
  totalCount: number;
}

const GuestBooks = ({ setIsOpen, id, totalCount, handleOpenShare }: TGuestBooksProps) => {
  const theme = useTheme();
  const pageWidth = usePageWidth();
  const { data: userData } = useUserQuery();
  const isOwner = userData?.id === id;
  const [cursor, setCursor] = useState<number | null>(null);
  const [nextCursor, setNextCursor] = useState<number | null>(null);

  const { data: bookData, isFetching, refetch } = useBookQuery(id, cursor);
  const [books, setBooks] = useState<TBookItem[]>([]);

  const [columns, setColumns] = useState<Array<Array<TBookItem>>>([]);
  const [isAddButtonVisible, setIsAddButtonVisible] = useState(true);
  const addButtonRef = useRef<HTMLButtonElement | null>(null);
  const masonryColumn = pageWidth <= size.mobile ? 2 : 3;

  const handleAddClick = () => setIsOpen(true);

  const handleNextBooks = () => {
    if (!bookData || bookData.length === 0 || isFetching) return;
    const lastBook = bookData[bookData.length - 1];
    setCursor(lastBook.id);
    setBooks(prevBooks => [...prevBooks, ...bookData]);
  };

  useEffect(() => {
    if (cursor === null && bookData && bookData.length > 0) {
      setCursor(bookData[bookData.length - 1].id);
      setBooks(bookData);
    }

    refetch();
    if (bookData && bookData.length > 0) {
      setNextCursor(bookData[bookData.length - 1].id);
    } else if (bookData && bookData.length === 0) {
      setNextCursor(null);
    }
  }, [bookData, cursor, refetch]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => setIsAddButtonVisible(entries[0].isIntersecting), {
      threshold: 0.1,
    });

    if (addButtonRef.current) observer.observe(addButtonRef.current);

    return () => {
      if (addButtonRef.current) observer.unobserve(addButtonRef.current);
    };
  }, []);

  useEffect(() => {
    if (!Array.isArray(books) || books.length === 0) return;

    setColumns(prevColumns => {
      const updatedColumns = [...prevColumns];
      let currentColumnHeight =
        updatedColumns.length > 0
          ? updatedColumns[updatedColumns.length - 1].reduce((height, book) => {
              return height + (book.bookType === 'LONG' ? 460 : 218);
            }, 0)
          : 0;
      let currentColumn = updatedColumns.length > 0 ? updatedColumns.pop() || [] : [];

      books.slice(prevColumns.flat().length).forEach(book => {
        const height = book.bookType === 'LONG' ? 460 : 218;
        if (currentColumnHeight + height > 460) {
          updatedColumns.push(currentColumn);
          currentColumn = [];
          currentColumnHeight = 0;
        }
        currentColumn.push(book);
        currentColumnHeight += height;
      });

      if (currentColumn.length > 0) updatedColumns.push(currentColumn);

      return updatedColumns;
    });
  }, [books]);

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, [pageWidth]);

  return (
    <>
      <S.Container>
        {pageWidth <= size.tablet && (
          <S.BookCount>
            {totalCount > 0 ? `${totalCount}개의 방명록이 도착했어요!` : '새로운 책장 만든걸 축하하오!'}
          </S.BookCount>
        )}

        {/* TABLET, MOBILE 공유 버튼 */}
        <S.ShareButton onClick={handleOpenShare}>
          <p>{isOwner ? '내' : '이'} 책장 널리 알리기</p>
          <img src={theme.mobileCloud} alt="책장 공유 구름 아이콘" />
        </S.ShareButton>

        <S.AddBookButton ref={addButtonRef} onClick={handleAddClick}>
          <img src={theme.addBtnImg} />
        </S.AddBookButton>

        {!isAddButtonVisible && (
          <>
            <S.FloatingAddBookButton onClick={handleAddClick}>
              <img src={plusImg} />
            </S.FloatingAddBookButton>
            <S.FloatingShareButton onClick={handleOpenShare}>
              <img src={shareImg} />
            </S.FloatingShareButton>
          </>
        )}

        {pageWidth > size.tablet ? (
          isFetching ? (
            <S.GuestBookWrapper>
              <BookSkeleton totalNum={columns.length} />
            </S.GuestBookWrapper>
          ) : totalCount > 0 ? (
            <>
              <S.GuestBookWrapper>
                {columns.map((column, colIndex) => (
                  <S.ColumnWrapper key={colIndex}>
                    <S.Column>
                      {column.map((book, idx) => (
                        <BookItem data={book} key={book.bookImageUrl + '-' + idx} />
                      ))}
                    </S.Column>
                    <S.Graphic src={theme.graphic} />
                  </S.ColumnWrapper>
                ))}
              </S.GuestBookWrapper>
              {nextCursor !== null && (
                <S.NextButton onClick={handleNextBooks}>
                  <img src={rightArrow} alt="더보기 버튼" />
                </S.NextButton>
              )}
            </>
          ) : (
            <S.NoBook>
              <img src={theme.noBookImage} />
              <p>책장이 아직 비어있습니다.</p>
              <p>소중한 마음을 여기에 담아보세요.</p>
            </S.NoBook>
          )
        ) : isFetching ? (
          <></>
        ) : totalCount > 0 ? (
          <>
            <S.StyledMasonry className="container" gap={12} column={masonryColumn}>
              {books?.map((book, idx) => <BookItem data={book} key={book.bookImageUrl + '-' + idx} />)}
            </S.StyledMasonry>
            {books.length < totalCount && (
              <S.NextButton onClick={handleNextBooks}>
                <img src={rightArrow} alt="더보기 버튼" />
              </S.NextButton>
            )}
          </>
        ) : (
          <S.NoBook>
            <img src={theme.noBookImage} />
            <p>책장이 아직 비어있습니다.</p>
            <p>소중한 마음을 여기에 담아보세요.</p>
          </S.NoBook>
        )}
      </S.Container>
    </>
  );
};

export default GuestBooks;

const FloatingButton = css`
  display: none;
  @media ${device.tablet} {
    z-index: ${zIndex.modal};
    background-color: var(--green600);
    width: 7.2rem;
    height: 7.2rem;
    position: fixed;
    left: 2rem;
    border-radius: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

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
    height: 46.4rem;
  `,

  NoBook: styled.div`
    font-family: 'Pretendard';
    width: calc(100vw - 80rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--gray600);
    line-height: 130%;
    img {
      margin-bottom: 3rem;
    }
    @media ${device.tablet} {
      width: 100%;
      height: 70rem;
      justify-content: center;
    }

    @media ${device.mobile} {
      height: 40rem;
    }
  `,

  AddBookButton: styled.button`
    width: 22rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.1rem solid ${props => props.theme.addBtnBorder};
    background-color: ${props => props.theme.addBtnBg};
    height: calc(46rem);
    font-size: 7rem;
    color: ${props => props.theme.addBtnText};
    cursor: pointer;
    @media ${device.tablet} {
      width: 100%;
      height: 7.2rem;
      font-size: 5rem;
    }
  `,

  FloatingAddBookButton: styled.button`
    ${FloatingButton}
    bottom: 11rem;
  `,

  FloatingShareButton: styled.button`
    ${FloatingButton}
    bottom: 2rem;
  `,

  ShareButton: styled.button`
    cursor: pointer;
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

  NextButton: styled.div`
    cursor: pointer;
    height: 10rem;
    width: 10rem;
    border-radius: 5rem;
    margin: 0 3rem 0 6rem;
    background-color: #7b7975;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 1.5rem;
      margin-left: 0.2rem;
    }

    @media ${device.tablet} {
      margin: 3.2rem 0 4.2rem;
      height: 7.2rem;
      width: 7.2rem;
      transform: rotate(90deg);
      img {
        width: 1rem;
      }
    }
  `,

  Graphic: styled.img`
    width: 100%;
    position: absolute;
    bottom: 0;
  `,

  Column: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  `,

  StyledMasonry: styled(MasonryGrid)`
    width: calc(100% - 1rem);
  `,
};
