import axios from 'axios';
import { TKaKaoToken } from './KakaoTokenType';

const getKakaoToken = async (code: string): Promise<TKaKaoToken> => {
  const response = await axios.post(
    'https://kauth.kakao.com/oauth/token',
    {
      grant_type: 'authorization_code',
      client_id: `${import.meta.env.VITE_KAKAO_API_KEY}`,
      redirect_uri: `${import.meta.env.VITE_KAKAO_LOCAL_REDIRECT_URL}?type=kakao`,
      code: code,
      client_secret: `${import.meta.env.VITE_KAKAO_SECRET_KEY}`,
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    },
  );

  return response.data;
};

export default getKakaoToken;
