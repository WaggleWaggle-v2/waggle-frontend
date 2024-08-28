import { ReactNode } from 'react';
import styled from 'styled-components';

interface TSettingTemplateProps {
  children: ReactNode;
  step: number;
  title: string;
}

const SettingTemplate = ({ children, step, title }: TSettingTemplateProps) => {
  const stepStr = step === 1 ? '하나' : step === 2 ? '둘' : '셋';

  return (
    <S.Container>
      <S.Step>{stepStr}.</S.Step>
      <S.Title>{title}</S.Title>
      {children}
    </S.Container>
  );
};

export default SettingTemplate;

const S = {
  Container: styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 464px;
  `,

  Step: styled.p`
    font-family: 'EBSHunminjeongeum';
    color: var(--green600);
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  `,

  Title: styled.h1`
    font-family: 'EBSHunminjeongeum';
    color: var(--gray900);
    font-weight: 900;
    font-size: 3.2rem;
  `,
};
