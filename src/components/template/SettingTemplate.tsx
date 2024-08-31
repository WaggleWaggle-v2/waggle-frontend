import { ReactNode } from 'react';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

interface TSettingTemplateProps {
  children: ReactNode;
  step: number;
  totalStep: number;
  title: string;
}

const SettingTemplate = ({ children, step, title, totalStep }: TSettingTemplateProps) => {
  const stepStr = step === 1 ? '하나' : step === 2 ? '둘' : '셋';

  return (
    <S.Container>
      <S.Step>{stepStr}.</S.Step>
      <S.Title>{title}</S.Title>
      {children}
      <ProgressBar totalStep={totalStep} currentStep={step} />
    </S.Container>
  );
};

export default SettingTemplate;

const S = {
  Container: styled.section`
    position: relative;
    min-width: 46.4rem;
    @media ${device.mobile} {
      width: 100%;
      min-width: 0;
      margin: 2rem;
    }
  `,

  Step: styled.p`
    font-family: 'EBSHunminjeongeum';
    color: var(--green600);
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  `,

  Title: styled.h1`
    font-family: 'EBSHunminjeongeum';
    font-weight: 900;
    font-size: 3.2rem;
  `,
};
