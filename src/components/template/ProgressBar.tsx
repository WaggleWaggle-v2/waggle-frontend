import styled from 'styled-components';

interface TProgressBarProp {
  totalStep: number;
  currentStep: number;
}

const ProgressBar = ({ totalStep, currentStep }: TProgressBarProp) => {
  return (
    <S.Container $totalStep={totalStep} $currentStep={currentStep}>
      <S.CurrentStep $currentStep={currentStep} />
    </S.Container>
  );
};

export default ProgressBar;

const S = {
  Container: styled.div<{ $totalStep: number; $currentStep: number }>`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1rem;
    background: var(--Color-Green-100, #d1e1ce);

    display: grid;
    grid-template-columns: repeat(${({ $totalStep }) => $totalStep}, 1fr);
  `,

  CurrentStep: styled.div<{ $currentStep: number }>`
    background: var(--Primary-600, #6c9460);
    grid-column-start: 1;
    grid-column-end: ${({ $currentStep }) => $currentStep + 1};
  `,
};
