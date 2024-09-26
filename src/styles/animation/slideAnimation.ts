import { keyframes } from 'styled-components';

// 슬라이드 인 애니메이션
export const XSlideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

// 슬라이드 아웃 애니메이션
export const XSlideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;
