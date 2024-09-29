import axios from '@api/axios';
import { isAxiosError } from 'axios';

const bookRequest = {
  //책 조회
  fetchBook: async (id: string, cursor: number | null) => {
    try {
      const { data } = await axios.get(`member/book/get?uuid=${id}&cursor=${cursor}`);
      return data;
    } catch (error) {
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

  // 받은 & 남긴 책장 조회
  fetchReceivedSendBookshelf: async (sortType: 'asc' | 'desc', type: 'receive' | 'send', cursorId?: number) => {
    try {
      const { data } = await axios.get(
        `member/mybook/${type}?order=${sortType}${cursorId ? `&cursorId=${cursorId}` : ''} `,
      );
      return data;
    } catch (error) {
      return error;
    }
  },
} as const;

export default bookRequest;
