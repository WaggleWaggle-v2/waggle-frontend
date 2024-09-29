import { keyframes } from 'styled-components';

export const shakeAndBlink = keyframes`
0% {
  opacity: 1;
  transform: translateY();
}
25% {
  opacity: 0.5;
  transform: translateY(0.5rem);
}
50% {
  opacity: 1;
  transform: translateY(0);
}
75% {
  opacity: 0.5;
  transform: translateY(0.5rem);
}
100% {
  opacity: 1;
}
`;
