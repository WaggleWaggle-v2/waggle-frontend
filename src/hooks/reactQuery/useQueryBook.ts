import { TAxiosError } from '@api/axios';
import bookRequest from '@api/book/bookRequest';
import { TBookItem } from '@api/book/bookRequest.type';
import { QUERY_KEY } from '@constants/queryKey';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

interface CreateBookParams {
  file: File;
  nickname: string;
  isOpen: boolean;
  bookshelfId: string;
  description: string;
  bookType: string;
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
