import typography from '@assets/images/typography-short.png';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import styled from 'styled-components';

export const Main = styled.div`
  height: calc(100dvh - ${HEADER_HEIGHT.PC});
  padding-top: ${HEADER_HEIGHT.PC};
  min-width: 100dvw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${typography}), linear-gradient(180deg, rgba(231, 221, 204, 0.75) 85%, #f6f3ee 100%);
  background-size: contain;
  background-position: left top;
  scroll-snap-align: start;
  position: relative;
  background-color: var(--background);

  @media ${device.tablet} {
    height: calc(100vh - ${HEADER_HEIGHT.MOBILE});
    padding-top: ${HEADER_HEIGHT.MOBILE};
  }
`;

export const Layout = styled.div`
  max-width: 86rem;
  display: grid;
  grid-template-columns: 1fr 31rem;
  grid-column-gap: 11rem;
  max-height: 67rem;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  max-width: 33.4rem;
  height: min-content;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 2;
  justify-content: space-between;
`;
