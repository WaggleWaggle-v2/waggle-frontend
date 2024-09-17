import typography from '@assets/images/typography-short.png';
import styled from 'styled-components';

export const Main = styled.div`
  height: 100dvh;
  min-width: 100dvw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: url(${typography}), linear-gradient(180deg, rgba(231, 221, 204, 0.75) 85%, #f6f3ee 100%);
  background-size: contain;
  background-position: left top;
  scroll-snap-align: start;
`;

export const Layout = styled.div`
  max-width: 86rem;
  display: grid;
  grid-template-columns: 1fr 31rem;
  grid-column-gap: 11rem;
  height: 100%;
  max-height: 67rem;
  padding-top: 14%;
  margin-bottom: auto;
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
