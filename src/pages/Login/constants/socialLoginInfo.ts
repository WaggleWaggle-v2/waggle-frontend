import googleLogo from '@assets/icons/social-login/symbol-google.svg';
import kakaoLogo from '@assets/icons/social-login/symbol-kakao.svg';
import naverLogo from '@assets/icons/social-login/symbol-naver.svg';

export const SOCIAL_LOGIN_INFO = [
  {
    name: '카카오톡',
    logo: kakaoLogo,
    background: '#FAE100',
    color: '#371D1E',
  },
  {
    name: '네이버',
    logo: naverLogo,
    background: '#00C300',
    color: '#FFFFFF',
  },
  {
    name: '구글',
    logo: googleLogo,
    background: '#FFFFFF',
    color: '#222222',
  },
] as const;
