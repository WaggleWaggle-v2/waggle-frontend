import { SetStateAction, useEffect, useRef, useState } from 'react';
import { TBookItem } from '@api/book/bookRequest.type';
import plusImg from '@assets/icons/plus-light.svg';
import shareImg from '@assets/icons/share.svg';
import { MasonryGrid } from '@egjs/react-grid';
import { useBookQuery } from '@hooks/reactQuery/useQueryBook';
import usePageWidth from '@hooks/usePageWidth';
import { device, size } from '@styles/breakpoints';
import { zIndex } from '@styles/zIndex';
import styled, { css, useTheme } from 'styled-components';
import BookItem from './BookItem';

interface TGuestBooksProps {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  id: string;
  ownerName: string;
  handleOpenShare: () => void;
}

const GuestBooks = ({ setIsOpen, id, ownerName, handleOpenShare }: TGuestBooksProps) => {
  const theme = useTheme();
  const { data: bookData } = useBookQuery(id, null);
  const pageWidth = usePageWidth();
  const [columns, setColumns] = useState<Array<Array<TBookItem>>>([]);
  const [isAddButtonVisible, setIsAddButtonVisible] = useState(true); // State to track AddBookButton visibility
  const addButtonRef = useRef<HTMLButtonElement | null>(null); // Ref for AddBookButton

  const masonryColumn = pageWidth <= size.mobile ? 2 : 3;
  const bookCount = bookData?.length as number;

  const handleAddClick = () => {
    setIsOpen(true);
  };

  // Set up IntersectionObserver to track AddBookButton visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsAddButtonVisible(true); // AddBookButton is in view
        } else {
          setIsAddButtonVisible(false); // AddBookButton is out of view
        }
      },
      { threshold: 0.1 }, // Adjust as needed
    );

    if (addButtonRef.current) {
      observer.observe(addButtonRef.current);
    }

    return () => {
      if (addButtonRef.current) {
        observer.unobserve(addButtonRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!Array.isArray(bookData)) return;

    const columnsArray: Array<Array<TBookItem>> = [];
    let currentColumnHeight = 0;
    let currentColumn: TBookItem[] = [];

    bookData.forEach(book => {
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
            {bookCount > 0 ? `${bookCount}개의 방명록이 도착했어요!` : '새로운 책장 만든걸 축하하오!'}
          </S.BookCount>
        )}
        {/* TABLET, MOBILE 공유 버튼 */}
        <S.ShareButton onClick={handleOpenShare}>
          <p>내 책장 널리 알리기</p>
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
          bookCount > 0 ? (
            <S.GuestBookWrapper>
              {columns.map((column, colIndex) => (
                <S.ColumnWrapper key={colIndex}>
                  <S.Column>
                    {column.map((book, idx) => (
                      <BookItem data={book} key={idx} ownerName={ownerName} />
                    ))}
                  </S.Column>
                  <S.Graphic src={theme.graphic} />
                </S.ColumnWrapper>
              ))}
            </S.GuestBookWrapper>
          ) : (
            <S.NoBook>
              <img src={theme.noBookImage} />
              <p>책장이 아직 비어있습니다.</p>
              <p>소중한 마음을 여기에 담아보세요.</p>
            </S.NoBook>
          )
        ) : bookCount > 0 ? (
          <S.StyledMasonry className="container" gap={12} column={masonryColumn}>
            {bookData?.map((book, idx) => <BookItem data={book} key={idx} ownerName={ownerName} />)}
          </S.StyledMasonry>
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

  FloatingAddBookButton: styled.button`
    ${FloatingButton}
    bottom: 11rem;
  `,

  FloatingShareButton: styled.button`
    ${FloatingButton}
    bottom: 2rem;
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
