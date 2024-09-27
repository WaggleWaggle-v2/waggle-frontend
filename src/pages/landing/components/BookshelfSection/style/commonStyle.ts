import { device } from '@styles/breakpoints';
import styled from 'styled-components';

export const BookShelfSection = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  width: 100%;

  @media ${device.mobile} {
    gap: 3.2rem;
  }
`;

export const BookShelfTitle = styled.h3`
  color: var(--gray900);
  text-align: center;
  font-family: 'EBSHMJESaeron';
  font-size: 2.4rem;
  line-height: 150%;
  font-weight: bold;
  margin-bottom: 0.8rem;
`;

export const FigureContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
