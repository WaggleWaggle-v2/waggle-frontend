import { ReactNode } from 'react';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import styled, { useTheme } from 'styled-components';

interface TPreviewProps {
  children: ReactNode;
  noTablet?: boolean | undefined;
}

const Preview = ({ children, noTablet }: TPreviewProps) => {
  const theme = useTheme();
  return <S.Container $noTablet={noTablet}>{children}</S.Container>;
};

export default Preview;

const S = {
  Container: styled.div<{ $noTablet: boolean | undefined }>`
    background-color: ${props => props.theme.previewBg};
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 4rem;

    @media ${device.tablet} {
      height: calc(100dvh - ${HEADER_HEIGHT.MOBILE});
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
