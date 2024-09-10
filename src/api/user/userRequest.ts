import axios from '@api/axios';
import { isAxiosError } from 'axios';

const userRequest = {
  FetchUserData: async () => {
    try {
      const { data } = await axios.get(`member/info/me`);
      return data;
    } catch (error) {
      return error;
    }
  },
} as const;

export default userRequest;
