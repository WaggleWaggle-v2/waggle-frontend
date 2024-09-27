import { useState } from 'react';
import { TSetting } from '@pages/myPage/constant/settingList';
import { TBook } from '@pages/myPage/mockData';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BookListSectionLayout from './BookListSectionLayout';
import BookInfo from './components/BookInfo';
import SkeletonBookInfo from './components/BookInfo/SkeletonBookInfo';

interface TBookList {
  bookList: TBook[] | undefined;
  settingType: TSetting;
}

export const SORTING_OPTION = ['책장 목록 오래된 순', '책장 목록 최신 순'] as const;

export type TSortingOption = (typeof SORTING_OPTION)[number];

const BookListSection = ({ bookList, settingType }: TBookList) => {
  const navigate = useNavigate();
  const [selectOption, setSelectOption] = useState<TSortingOption>('책장 목록 최신 순');
  const skeletonArray = new Array(7).fill({});

  const handleSelectOption = (option: TSortingOption) => {
    setSelectOption(option);
  };

  if (!bookList) {
    return (
      <BookListSectionLayout
        settingType={settingType}
        handleSelectOption={handleSelectOption}
        selectOption={selectOption}>
        {skeletonArray.map((el, i) => (
          <SkeletonBookInfo key={i} />
        ))}
      </BookListSectionLayout>
    );
  }

  return (
    <BookListSectionLayout
      settingType={settingType}
      handleSelectOption={handleSelectOption}
      selectOption={selectOption}>
      {(selectOption === '책장 목록 최신 순' ? bookList : [...bookList].reverse()).map(book => (
        <S.BookButton
          type="button"
          onClick={() => {
            navigate(`/bookshelf/${book.id}`);
          }}
          key={book.id}>
          <BookInfo bookData={book} settingType={settingType} />
        </S.BookButton>
      ))}
    </BookListSectionLayout>
  );
};

export default BookListSection;

const S = {
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
};
