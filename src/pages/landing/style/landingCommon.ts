import houseImg from '@assets/images/house.png';
import treeImg from '@assets/images/tree.png';
import typography from '@assets/images/typography-short.png';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import styled from 'styled-components';

export const Main = styled.div`
  position: relative;
  top: -${HEADER_HEIGHT.PC};
  height: 100vh;
  padding: ${HEADER_HEIGHT.PC} 2rem 3rem;
  background: url(${typography}), linear-gradient(180deg, rgba(231, 221, 204, 0.75) 85%, #f6f3ee 100%);
  background-size: contain;
  background-position: left top;

  @media ${device.tablet} {
    top: -${HEADER_HEIGHT.MOBILE};
  }

  &::before {
    content: '';
    min-width: 14.5rem;
    min-height: 12.5rem;
    background-image: url(${treeImg});
    background-size: cover;
    position: absolute;
    bottom: 6.4rem;
    left: 0;

    @media ${device.tablet} {
      top: calc(4.5rem + ${HEADER_HEIGHT.MOBILE});
      bottom: auto;
    }

    @media ${device.mobile} {
      min-width: 10rem;
      min-height: 8rem;
    }
  }

  &::after {
    content: '';
    min-width: 10rem;
    min-height: 11rem;
    background-image: url(${houseImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left 0.5rem bottom;
    position: absolute;
    top: calc(30.4rem + ${HEADER_HEIGHT.MOBILE});
    right: 0;
    display: none;

    @media ${device.tablet} {
      display: block;
    }

    @media ${device.mobile} {
      top: calc(23rem + ${HEADER_HEIGHT.MOBILE});
      min-width: 6rem;
      min-height: 9rem;
    }
  }

  @media ${device.tablet} {
    margin-top: ${HEADER_HEIGHT.MOBILE};
  }
`;

export const Layout = styled.div`
  margin: 0 auto;
  height: calc(100% - 17rem);
`;
