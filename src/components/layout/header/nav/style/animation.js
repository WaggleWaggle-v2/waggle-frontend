import { keyframes } from 'styled-components';

export const OpacityDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const OpacityUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(100%);
  }
`;

export const SlideDown = keyframes`
  from {
    transform : translateY(-85%);
  }
  to {
    transform : translateY(0)
  }
`;

export const SlideUp = keyframes`
  from {
    transform : translateY(80%);
  }
  to {
    transform: translateY(0);
  }
`;
