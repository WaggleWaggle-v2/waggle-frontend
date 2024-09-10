import { keyframes } from 'styled-components';

export const scrollerAnimation = keyframes`
0% { opacity: 0; }
10% { transform: translateY(0); opacity: 1; }
100% { transform: translateY(15px); opacity: 0; }
`;
