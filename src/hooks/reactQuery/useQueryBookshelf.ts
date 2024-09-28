import { TAxiosError } from '@api/axios';
import bookshelfRequest from '@api/bookshelf/bookshelfRequest';
import { TBookshelfFetchRes } from '@api/bookshelf/bookshelfRequest.type';
import { QUERY_KEY } from '@constants/queryKey';
import { TTheme } from '@pages/main/types/type';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

interface CreateBookParams {
  file: File;
  nickname: string;
  isOpen: boolean;
  bookshelfId: string;
  description: string;
  bookType: string;
}

// 랜덤 책장 조회
export const useRandomBookshelfQuery = () => {
  const query = useQuery({
    queryKey: [QUERY_KEY.randomBookShelfInfo],
    queryFn: async () => await bookshelfRequest.fetchRandomBookshelf(),
  });
  return query;
};

// 책장 조회
export const useBookshelfQuery = (id: string | undefined | null) => {
  const query = useQuery<TBookshelfFetchRes, Error>({
    queryKey: [QUERY_KEY.bookShelfInfo, id],
    queryFn: async () => {
      if (!id) {
        return;
      } else {
        return await bookshelfRequest.fetchBookshelf(id);
      }
    },
    enabled: !!id,
    gcTime: Infinity,
  });
  return query;
};

// 책장 공개 여부 변경
export const useBookshelfPublicityUpdateMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (isOpen: boolean) => await bookshelfRequest.updateBookshelfPublicity(isOpen),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.bookShelfInfo] });
    },
    onError: (error: TAxiosError) => console.error(error.errorMessage),
  });
  return mutation;
};

// 책장 배경 사진 변경
export const useBookshelfBackgroundUpdateMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (number: number) => await bookshelfRequest.updateBookshelfBackground(number),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.bookShelfInfo] });
    },
    onError: (error: TAxiosError) => console.error(error.errorMessage),
  });
  return mutation;
};

// 책장 테마 변경
export const useBookshelfThemeUpdateMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (theme: TTheme) => await bookshelfRequest.updateBookshelfTheme(theme),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.bookShelfInfo] });
    },
    onError: (error: TAxiosError) => console.error(error.errorMessage),
  });
  return mutation;
};

// 책장 소개 변경
export const useBookshelfIntroductionUpdateMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (introduction: string) => await bookshelfRequest.updateBookshelfIntroduction(introduction),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.bookShelfInfo] });
    },
    onError: (error: TAxiosError) => console.error(error.errorMessage),
  });
  return mutation;
};

export const useBookCreateMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ file, nickname, isOpen, bookshelfId, description, bookType }: CreateBookParams) => {
      return await bookshelfRequest.createBook(file, nickname, isOpen, bookshelfId, description, bookType);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.userInfo] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.bookShelfInfo] });
    },
    onError: (error: TAxiosError) => console.error(error),
  });

  return mutation;
};
