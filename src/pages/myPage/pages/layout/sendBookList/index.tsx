import { useEffect, useState } from 'react';
import { TSendBookListRes } from '@api/book/bookRequest.type';
import { useReceiveSendInfinity } from '@hooks/reactQuery/useQueryBook';
import { useUserQuery } from '@hooks/reactQuery/useQueryUser';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import BookInfo from '@pages/myPage/components/bookListSection/components/BookInfo';
import SkeletonBookInfo from '@pages/myPage/components/bookListSection/components/BookInfo/SkeletonBookInfo';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BookListLayout from '../BookListLayout';

export const SORTING_OPTION = ['책장 목록 오래된 순', '책장 목록 최신 순'] as const;

export type TSortingOption = (typeof SORTING_OPTION)[number];

const SendBookList = () => {
  const { data: userInfo } = useUserQuery();
  const navigate = useNavigate();
  const [sortingOption, setSortingOption] = useState<TSortingOption>('책장 목록 최신 순');
  const { isVisible, targetRef: lastCardRef } = useIntersectionObserver<HTMLDivElement>({ threshold: 0 });

  const handleSelectOption = (option: TSortingOption) => {
    setSortingOption(option);
  };

  const {
    data: sendBookList,
    isLoading,
    hasNextPage,
    fetchNextPage,
    refetch,
  } = useReceiveSendInfinity({
    type: 'send',
    sortType: sortingOption === '책장 목록 최신 순' ? 'desc' : 'asc',
  });

  useEffect(() => {
    if (isVisible && hasNextPage && !isLoading) {
      fetchNextPage();
    }
  }, [isVisible, hasNextPage, fetchNextPage, isLoading]);

  useEffect(() => {
    refetch();
  }, [refetch, sortingOption]);

  if (!sendBookList) {
    return (
      <BookListLayout
        bookType="send"
        nickName={userInfo?.nickname ? userInfo.nickname : 'oooooo'}
        handleSelectOption={handleSelectOption}
        sortingOption={sortingOption}
        lastCardRef={lastCardRef}
        totalCount={9}>
        {[...Array(7)].map((_, index) => (
          <SkeletonBookInfo key={index} />
        ))}
      </BookListLayout>
    );
  }

  return (
    <BookListLayout
      bookType="send"
      nickName={userInfo?.nickname ? userInfo.nickname : 'oooooo'}
      handleSelectOption={handleSelectOption}
      sortingOption={sortingOption}
      lastCardRef={lastCardRef}
      totalCount={9}>
      {sendBookList.pages[0].length === 0 && <S.EmptyText>아직 보낸 책장이 없습니다.</S.EmptyText>}
      {sendBookList.pages[0].map((book: TSendBookListRes) => (
        <S.BookButton
          type="button"
          onClick={() => {
            navigate(`/book/${book.bookId}`, {
              state: 'sendBookList',
            });
          }}
          key={book.id}>
          <BookInfo bookData={book} settingType={'send'} />
        </S.BookButton>
      ))}
    </BookListLayout>
  );
};

export default SendBookList;

const S = {
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
