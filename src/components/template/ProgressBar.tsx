import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface TProgressBarProp {
  totalStep: number;
  currentStep: number;
}

const ProgressBar = ({ totalStep, currentStep }: TProgressBarProp) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const newWidth = (100 / totalStep) * currentStep;
    setWidth(newWidth);
  }, [currentStep, totalStep]);

  return (
    <S.Container>
      <S.CurrentStep $currentStep={currentStep} $totalStep={totalStep} $width={width} />
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
    background: var(--Color-Green-100, #d1e1ce);
    overflow: hidden;
  `,

  CurrentStep: styled.div<{ $currentStep: number; $totalStep: number; $width: number }>`
    background: var(--Primary-600, #6c9460);
    width: ${({ $width }) => $width}%;
    transition: width 0.5s;
    height: 1rem;
  `,
};
