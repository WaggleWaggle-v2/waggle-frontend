import { css, keyframes } from 'styled-components';

export const shining = keyframes`
  0% {
    background-position: -20rem 0;
  }
  100% {
    background-position: 20rem 0;
  }
`;

export const skeletonAnimation = css`
  background: linear-gradient(
    90deg,
    var(--gray300) 0%,
    var(--gray300) 40%,
    rgba(255, 255, 255, 0.5) 50%,
    var(--gray300) 60%,
    var(--gray300) 100%
  );
  
  background-size: 200% 100%;
  animation: ${shining} 1.5s infinite;
  animation-delay: 0s;
`;

export const skeletonAnimationDark = css`
  background: linear-gradient(
    90deg,
    var(--gray800) 0%,
    var(--gray800) 40%,
    rgba(255, 255, 255, 0.3) 50%,
    var(--gray800) 60%,
    var(--gray800) 100%
  );
  background-size: 200% 100%;
  animation: ${shining} 1.5s infinite;
  animation-delay: 0s;
`;
