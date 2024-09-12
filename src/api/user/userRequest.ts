import axios from '@api/axios';
import { isAxiosError } from 'axios';

const userRequest = {
  // 유저 정보 조회
  fetchUser: async () => {
    try {
      const { data } = await axios.get(`member/info/me`);
      return data;
    } catch (error) {
      return error;
    }
  },

  // 유저 닉네임 변경
  updateUserNickname: async (nickname: string) => {
    try {
      const { data } = await axios.patch(`member/info/set/nickname`, { nickname });
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

  // 추가 정보 입력
  createUsernameAndPublicity: async (nickname: string, isOpen: boolean) => {
    try {
      const { data } = await axios.post(`member/init`, { nickname, isOpen });
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

export default userRequest;
