import { TAxiosError } from '@api/axios';
import bookRequest, { TReceiveSendBookListParams } from '@api/book/bookRequest';
import { TBookDetailRes, TBookItem, TUseReceiveBookListRes, TUserSendBookListRes } from '@api/book/bookRequest.type';
import { QUERY_KEY } from '@constants/queryKey';
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCookie } from '@utils/cookie';

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
  const query = useQuery<TBookItem[], Error>({
    queryKey: [QUERY_KEY.bookInfo, id, cursor],
    queryFn: async () => {
      if (!id) {
        return;
      } else {
        return await bookRequest.fetchBook(id, cursor);
      }
    },
    enabled: !!id,
    gcTime: Infinity,
  });

  return query;
};

// 책 생성
export const useBookCreateMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ file, nickname, isOpen, bookshelfId, description, bookType }: CreateBookParams) => {
      return await bookRequest.createBook(file, nickname, isOpen, bookshelfId, description, bookType);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.bookShelfInfo] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.bookInfo] });
    },
    onError: (error: TAxiosError) => console.error(error),
  });

  return mutation;
};

// 남긴 책장 & 받은 책장 조회
export const useReceiveSendBookList = (props: TReceiveSendBookList) => {
  const { type, sortType, cursorId } = props;
  const accessToken = getCookie('accessToken');

  const query = useQuery<TUseReceiveBookListRes[] | TUserSendBookListRes[], Error>({
    queryKey: type === 'receive' ? [QUERY_KEY.receiveBook] : [QUERY_KEY.sendBook],
    queryFn: async () => {
      if (!accessToken) throw new Error('No access token');

      switch (type) {
        case 'receive': {
          return bookRequest.fetchReceiveBookList({ sortType, cursorId });
        }
        case 'send': {
          return bookRequest.fetchSendBookList({ sortType, cursorId });
        }
      }
    },
    enabled: !!accessToken,
    gcTime: Infinity,
  });
  return query;
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

// 방명록 상세 보기
export const useBookDetail = (bookId: number) => {
  const accessToken = getCookie('accessToken');
  if (!accessToken) throw new Error('No access token');

  const query = useQuery<TBookDetailRes, Error>({
    queryKey: [QUERY_KEY.bookDetail],
    queryFn: async () => bookRequest.fetchBookContent(bookId),
  });
  return query;
};
