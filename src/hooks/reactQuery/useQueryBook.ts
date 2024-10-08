import { TAxiosError } from '@api/axios';
import bookRequest, { TReceiveSendBookListParams } from '@api/book/bookRequest';
import { TBookDetailRes, TBookItem } from '@api/book/bookRequest.type';
import { QUERY_KEY } from '@constants/queryKey';
import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getCookie } from '@utils/cookie';
import { createMutationHook, createQueryHook } from './utils/factory';

interface CreateBookParams {
  file: File;
  nickname: string;
  isOpen: boolean;
  bookshelfId: string;
  description: string;
  bookType: string;
}

interface TReceiveSendBookList extends TReceiveSendBookListParams {
  type: 'receive' | 'send';
}

// 책 조회
export const useBookQuery = (id: string | undefined | null, cursor: number | null) => {
  return createQueryHook<TBookItem[], Error>(
    [QUERY_KEY.bookInfo, id, cursor],
    () => bookRequest.fetchBook(id as string, cursor),
    !!id,
  );
};

// 책 생성
export const useBookCreateMutation = () => {
  const queryClient = useQueryClient();
  return createMutationHook<CreateBookParams, CreateBookParams>(
    ({ file, nickname, isOpen, bookshelfId, description, bookType }) =>
      bookRequest.createBook(file, nickname, isOpen, bookshelfId, description, bookType),
    [
      () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY.bookShelfInfo] }),
      () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY.bookInfo] }),
    ],
  );
};

// 방명록 상세 보기
export const useBookDetail = (bookId: number) => {
  return createQueryHook<TBookDetailRes, Error>([QUERY_KEY.bookDetail, bookId], () =>
    bookRequest.fetchBookContent(bookId),
  );
};

// 책 삭제
export const useBookDeleteMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (bookId: number) => await bookRequest.deleteBook(bookId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.bookInfo] });
    },
    onError: (error: TAxiosError) => console.error(error),
  });

  return mutation;
};

// 남긴 책장 & 받은 책장 조회
export const useReceiveSendInfinity = (props: TReceiveSendBookList) => {
  const { type, sortType } = props;
  const accessToken = getCookie('accessToken');

  const fetchBookList = async (pageParam: number) => {
    if (!accessToken) throw new Error('No access token');

    // type에 따라 보낸, 받은 방명록으로 데이터 패칭
    switch (type) {
      case 'receive':
        return bookRequest.fetchReceiveBookList({
          sortType,
          cursorId: pageParam,
        });
      case 'send':
        return bookRequest.fetchSendBookList({
          sortType,
          cursorId: pageParam,
        });
    }
  };

  const query = useInfiniteQuery({
    queryKey: type === 'receive' ? [QUERY_KEY.receiveBook] : [QUERY_KEY.sendBook],
    queryFn: async ({ pageParam = 1 }) => fetchBookList(pageParam),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      const lastIdx = lastPage.length - 1;
      return lastPage[lastIdx]?.id;
    },
  });

  return query;
};
