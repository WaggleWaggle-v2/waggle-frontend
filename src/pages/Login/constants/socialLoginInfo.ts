import googleLogo from '@assets/icons/social-login/symbol-google.svg';
import kakaoLogo from '@assets/icons/social-login/symbol-kakao.svg';

const handleGoogleLoginClick = () => {
  window.location.href =
    'https://accounts.google.com/o/oauth2/auth?' +
    `&client_id=${import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}` +
    `&redirect_uri=${import.meta.env.VITE_REDIRECT_URL}` +
    '&response_type=code' +
    '&scope=email profile';
};

const handleKakaoLoginClick = () => {
  window.location.href =
    'https://kauth.kakao.com/oauth/authorize?' +
    `client_id=${import.meta.env.VITE_KAKAO_API_KEY}` +
    `&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URL}` +
    '&response_type=code';
};

export const SOCIAL_LOGIN_INFO = [
  {
    name: '카카오톡',
    logo: kakaoLogo,
    background: '#FAE100',
    color: '#371D1E',
    onClick: handleKakaoLoginClick,
  },
  {
    name: '구글',
    logo: googleLogo,
    background: '#FFFFFF',
    color: '#222222',
    onClick: handleGoogleLoginClick,
  },
] as const;
