import axios from '@api/axios';
import { isAxiosError } from 'axios';

const bookshelfRequest = {
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
} as const;

export default bookshelfRequest;
