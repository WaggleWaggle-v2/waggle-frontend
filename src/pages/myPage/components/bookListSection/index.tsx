import { useState } from 'react';
import RightArrowIcon from '@components/icons/RightArrowIcon';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { TSetting } from '@pages/myPage/constant/settingList';
import { TBook } from '@pages/myPage/mockData';
import { device } from '@styles/breakpoints';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BookInfo from './components/bookInfo';
import SortingBox from './components/sortingBox';

interface TBookList {
  bookList: TBook[];
  settingType: TSetting;
}

export const SORTING_OPTION = ['책장 목록 오래된 순', '책장 목록 최신 순'] as const;

export type TSortingOption = (typeof SORTING_OPTION)[number];

const BookListSection = ({ bookList, settingType }: TBookList) => {
  const navigate = useNavigate();
  const [selectOption, setSelectOption] = useState<TSortingOption>('책장 목록 최신 순');
  const { targetRef, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });

  const handleSelectOption = (option: TSortingOption) => {
    setSelectOption(option);
  };

  return (
    <S.Container>
      <S.Header>
        <S.HeaderTextContainer>
          마이페이지 <RightArrowIcon width={11} color={'#616161'} />
          {settingType === 'receive' ? '받은 방명록' : '남긴 방명록'}
        </S.HeaderTextContainer>
        <SortingBox handleSelectOption={handleSelectOption} selectOption={selectOption} />
      </S.Header>
      <S.ListContainer $isScroll={!isVisible}>
        <S.BookObserver ref={targetRef} />
        {(selectOption === '책장 목록 최신 순' ? bookList : [...bookList].reverse()).map(book => (
          <S.BookButton
            type="button"
            onClick={() => {
              navigate(`/bookshelf/${book.id}`);
            }}
            key={book.id}>
            <BookInfo bookData={book} />
          </S.BookButton>
        ))}
      </S.ListContainer>
    </S.Container>
  );
};

export default BookListSection;

const S = {
  Container: styled.div`
    min-height: 55.5rem;
    max-height: 55.5rem;
    display: grid;
    grid-template-rows: 3.2rem 1fr;
    row-gap: 2rem;
  `,
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  HeaderTextContainer: styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    color: #616161;
    font-family: Pretendard;
    font-size: 1.8rem;
    font-weight: 500;
    @media ${device.mobile} {
      font-size: 1.2rem;
      gap: 0.5rem;
    }
  `,
  ListContainer: styled.ul<{ $isScroll: boolean }>`
    display: flex;
    flex-direction: column;
    min-width: 0;
    overflow-y: scroll;
    padding-right: 2.4rem;
    border-bottom: 0.1rem solid var(--gray300);
    position: relative;

    &::-webkit-scrollbar {
      width: 0.4rem;
      ${({ $isScroll }) => !$isScroll && 'display : none'}
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--brown200);
      height: 30rem;
      border-radius: 0.8rem;
      cursor: pointer;
    }

    &::-webkit-scrollbar-track {
      background-color: var(--gray300);
    }
  `,
  BookButton: styled.button`
    cursor: pointer;
    background-color: var(--brown50);
    transition: background-color 0.2s ease;
    &:not(:last-child) {
      border-bottom: 0.1rem solid var(--gray300);
    }
    &:hover {
      background-color: var(--brown100);
      transition: background-color 0.2s ease;
    }
  `,
  BookObserver: styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    min-height: 10rem;

    @media ${device.mobile} {
      min-height: 8.2rem;
    }
  `,
};
