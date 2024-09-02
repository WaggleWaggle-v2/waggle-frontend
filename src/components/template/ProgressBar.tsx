import { useState, useEffect } from 'react';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { zIndex } from '@styles/zIndex';
import styled from 'styled-components';

interface TProgressBarProp {
  totalStep: number;
  currentStep: number;
}

const ProgressBar = ({ totalStep, currentStep }: TProgressBarProp) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth((100 / totalStep) * currentStep);
  }, [currentStep, totalStep]);

  return (
    <S.Container>
      <S.CurrentStep $width={width} />
    </S.Container>
  );
};

export default ProgressBar;

const S = {
  Container: styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1rem;
    background: var(--button-disabled);
    z-index: ${zIndex.modal + 1};
    @media ${device.tablet} {
      position: fixed;
      top: ${HEADER_HEIGHT.MOBILE};

      bottom: none;
      height: 0.5rem;
    }
  `,

  CurrentStep: styled.div<{ $width: number }>`
    background: var(--button-active);
    width: ${({ $width }) => $width}%;
    transition: width 0.5s ease-in-out;
    height: 1rem;

    @media ${device.tablet} {
      height: 0.5rem;
    }
  `,
};
