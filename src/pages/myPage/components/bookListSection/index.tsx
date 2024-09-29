import { useEffect, useState } from 'react';
import { useReceiveSendInfinity } from '@hooks/reactQuery/useQueryBook';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { TSetting } from '@pages/myPage/constant/settingList';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BookListSectionLayout from './BookListSectionLayout';
import BookInfo from './components/BookInfo';
import SkeletonBookInfo from './components/BookInfo/SkeletonBookInfo';

interface TBookList {
  settingType: TSetting;
}

export const SORTING_OPTION = ['책장 목록 오래된 순', '책장 목록 최신 순'] as const;

export type TSortingOption = (typeof SORTING_OPTION)[number];

const BookListSection = ({ settingType }: TBookList) => {
  const navigate = useNavigate();
  const [sortingOption, setSortingOption] = useState<TSortingOption>('책장 목록 최신 순');
  const skeletonArray = new Array(7).fill({});
  const { isVisible, targetRef } = useIntersectionObserver<HTMLDivElement>({ threshold: 0 });

  const handleSelectOption = (option: TSortingOption) => {
    setSortingOption(option);
  };

  const { data, isFetching, hasNextPage, fetchNextPage, refetch } = useReceiveSendInfinity({
    type: settingType as 'receive' | 'send',
    sortType: sortingOption === '책장 목록 최신 순' ? 'desc' : 'asc',
  });

  useEffect(() => {
    if (isVisible && hasNextPage) {
      fetchNextPage();
    }
  }, [isVisible, hasNextPage, fetchNextPage]);

  useEffect(() => {
    refetch();
  }, [refetch, sortingOption]);

  if (!data || isFetching) {
    return (
      <BookListSectionLayout
        settingType={settingType}
        handleSelectOption={handleSelectOption}
        selectOption={sortingOption}
        lastTargetRef={targetRef}>
        {skeletonArray.map((_, i) => (
          <SkeletonBookInfo key={i} />
        ))}
      </BookListSectionLayout>
    );
  }

  return (
    <BookListSectionLayout
      lastTargetRef={targetRef}
      settingType={settingType}
      handleSelectOption={handleSelectOption}
      selectOption={sortingOption}>
      {data.pages[0].length === 0 && <S.EmptyText>아직 보낸 책장이 없습니다.</S.EmptyText>}
      {data.pages[0].map(book => (
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
  EmptyText: styled.div`
    position: absolute;
    font-family: 'EBSHunminjeongeum';
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: var(--gray700);
    font-size: 2.6rem;
    text-wrap: nowrap;
  `,
};
