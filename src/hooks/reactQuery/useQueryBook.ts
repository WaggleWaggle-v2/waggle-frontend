import { TAxiosError } from '@api/axios';
import bookRequest, { TReceiveSendBookListParams } from '@api/book/bookRequest';
import { TBookItem, TUseReceiveSendBookList } from '@api/book/bookRequest.type';
import { QUERY_KEY } from '@constants/queryKey';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
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
    queryKey: [QUERY_KEY.bookInfo, id],
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

  const query = useQuery<TUseReceiveSendBookList[], Error>({
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
