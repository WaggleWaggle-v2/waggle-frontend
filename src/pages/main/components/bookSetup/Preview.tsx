import { ReactNode } from 'react';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import styled from 'styled-components';

interface TPreviewProps {
  children: ReactNode;
  noTablet?: boolean | undefined;
}

const Preview = ({ children, noTablet }: TPreviewProps) => {
  return <S.Container $noTablet={noTablet}>{children}</S.Container>;
};

export default Preview;

const S = {
  Container: styled.div<{ $noTablet: boolean | undefined }>`
    background-color: #e5ddcf;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 4rem;

    @media ${device.tablet} {
      margin-top: calc(${HEADER_HEIGHT.MOBILE});
      height: calc(100vh - ${HEADER_HEIGHT.MOBILE});
      width: 50vw;
      display: ${({ $noTablet }) => $noTablet && 'none'};
    }

    @media ${device.mobile} {
      margin-top: 0;
      background-color: transparent;
      width: 100%;
      height: 100%;
      padding: 5rem 0 0;
    }
  `,
};
