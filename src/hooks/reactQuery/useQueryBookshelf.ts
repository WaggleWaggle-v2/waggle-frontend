import bookshelfRequest from '@api/bookshelf/bookshelfRequest';
import { TBookshelfFetchRes } from '@api/bookshelf/bookshelfRequest.type';
import { QUERY_KEY } from '@constants/queryKey';
import { TTheme } from '@pages/main/types/type';
import { useQueryClient } from '@tanstack/react-query';
import { createMutationHook, createQueryHook } from './utils/factory';

// 랜덤 책장 조회
export const useRandomBookshelfQuery = () => {
  return createQueryHook([QUERY_KEY.randomBookShelfInfo], bookshelfRequest.fetchRandomBookshelf, true);
};

// 책장 조회
export const useBookshelfQuery = (id: string | undefined | null) => {
  return createQueryHook<TBookshelfFetchRes, Error>(
    [QUERY_KEY.bookShelfInfo, id],
    () => bookshelfRequest.fetchBookshelf(id as string),
    !!id,
  );
};

// 책장 공개 여부 변경
export const useBookshelfPublicityUpdateMutation = () => {
  const queryClient = useQueryClient();
  return createMutationHook<boolean, boolean>(
    isOpen => bookshelfRequest.updateBookshelfPublicity(isOpen),
    [() => queryClient.invalidateQueries({ queryKey: [QUERY_KEY.bookShelfInfo] })],
    '책장 공개 설정이 변경되었습니다.',
  );
};

// 책장 배경 사진 변경
export const useBookshelfBackgroundUpdateMutation = () => {
  const queryClient = useQueryClient();
  return createMutationHook<number, number>(
    number => bookshelfRequest.updateBookshelfBackground(number),
    [() => queryClient.invalidateQueries({ queryKey: [QUERY_KEY.bookShelfInfo] })],
    '책장 배경 사진이 변경되었습니다.',
  );
};

// 책장 테마 변경
export const useBookshelfThemeUpdateMutation = () => {
  const queryClient = useQueryClient();
  return createMutationHook<TTheme, TTheme>(
    theme => bookshelfRequest.updateBookshelfTheme(theme),
    [() => queryClient.invalidateQueries({ queryKey: [QUERY_KEY.bookShelfInfo] })],
    '책장 테마가 변경되었습니다.',
  );
};

// 책장 소개 변경
export const useBookshelfIntroductionUpdateMutation = () => {
  const queryClient = useQueryClient();
  return createMutationHook<string, string>(
    introduction => bookshelfRequest.updateBookshelfIntroduction(introduction),
    [() => queryClient.invalidateQueries({ queryKey: [QUERY_KEY.bookShelfInfo] })],
    '책장 소개가 변경되었습니다.',
  );
};
