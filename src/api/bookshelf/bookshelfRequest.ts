import axios from '@api/axios';
import { TTheme } from '@pages/main/types/type';
import { isAxiosError } from 'axios';

const bookshelfRequest = {
  // 랜덤 책장 조회
  fetchRandomBookshelf: async () => {
    try {
      const { data } = await axios.get('member/bookshelf/get/random');
      return data;
    } catch (error) {
      return error;
    }
  },
  // 책장 조회
  fetchBookshelf: async (id: string) => {
    try {
      const { data } = await axios.get(`member/bookshelf/get?user=${id}`);
      return data;
    } catch (error) {
      return error;
    }
  },

  // 책장 공개 여부 설정
  updateBookshelfPublicity: async (isOpen: boolean) => {
    try {
      const { data } = await axios.patch(`member/bookshelf/set/revelation`, { isOpen });
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          throw {
            errorMessage: error.response.data.errorMessage || 'errorMessage',
            errorCode: error.response.data.errorCode || 'UNKNOWN_ERROR',
            statusCode: error.response.status,
          };
        }
      }
      return error;
    }
  },

  // 책장 배경 사진 변경
  updateBookshelfBackground: async (number: number) => {
    try {
      const { data } = await axios.patch(`member/bookshelf/set/background`, { number });
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          throw {
            errorMessage: error.response.data.errorMessage || 'errorMessage',
            errorCode: error.response.data.errorCode || 'UNKNOWN_ERROR',
            statusCode: error.response.status,
          };
        }
      }
      return error;
    }
  },

  // 책장 테마 변경
  updateBookshelfTheme: async (theme: TTheme) => {
    try {
      const { data } = await axios.patch(`member/bookshelf/set/theme`, { theme });
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          throw {
            errorMessage: error.response.data.errorMessage || 'errorMessage',
            errorCode: error.response.data.errorCode || 'UNKNOWN_ERROR',
            statusCode: error.response.status,
          };
        }
      }
      return error;
    }
  },

  // 책장 소개 변경
  updateBookshelfIntroduction: async (introduction: string) => {
    try {
      const { data } = await axios.patch(`member/bookshelf/set/introduction`, { introduction });
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          throw {
            errorMessage: error.response.data.errorMessage || 'errorMessage',
            errorCode: error.response.data.errorCode || 'UNKNOWN_ERROR',
            statusCode: error.response.status,
          };
        }
      }
      return error;
    }
  },

  // 책 색성
  createBook: async (
    fileInput: File,
    nickname: string,
    isOpen: boolean,
    bookshelfId: string,
    description: string,
    bookType: string,
  ) => {
    const formData = new FormData();

    formData.append('bookImage', fileInput);
    formData.append(
      'request',
      new Blob([JSON.stringify({ bookshelfId, nickname, description, isOpen, bookType })], {
        type: 'application/json',
      }),
    );
    try {
      const { data } = await axios.post('member/book/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          throw {
            errorMessage: error.response.data.errorMessage || 'errorMessage',
            errorCode: error.response.data.errorCode || 'UNKNOWN_ERROR',
            statusCode: error.response.status,
          };
        }
      }
      throw error;
    }
  },
} as const;

export default bookshelfRequest;
