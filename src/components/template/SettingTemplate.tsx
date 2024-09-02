import { ReactNode } from 'react';
import PrimaryButton from '@components/PrimaryButton';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import styled from 'styled-components';

interface TSettingTemplateProps {
  children: ReactNode;
  step: number;
  titleTop: string;
  titleBottom?: string;
  buttonText?: string;
  handleButtonClick: () => void;
  isDisabled: boolean;
}

const SettingTemplate = ({
  children,
  step,
  titleTop,
  titleBottom,
  handleButtonClick,
  isDisabled,
  buttonText = '다음',
}: TSettingTemplateProps) => {
  const stepStr = step === 1 ? '하나' : step === 2 ? '둘' : '셋';

  return (
    <S.Container>
      <S.Step>{stepStr}.</S.Step>
      <S.Title>
        <p>{titleTop}</p>
        <p>{titleBottom}</p>
      </S.Title>
      {children}
      <S.ButtonWrapper>
        {!isDisabled && <S.PublicityResetText>마이페이지에서 재설정이 가능합니다.</S.PublicityResetText>}
        <PrimaryButton disabled={isDisabled} onClick={handleButtonClick}>
          {buttonText}
        </PrimaryButton>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default SettingTemplate;

const S = {
  Container: styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    @media ${device.tablet} {
      margin-top: calc(${HEADER_HEIGHT.MOBILE} + 10rem);
      padding-bottom: 10.2rem;
      height: fit-content;
    }
    @media ${device.mobile} {
      display: flex;
      width: 100%;
      min-width: 0;
      margin: 2rem;
      margin-top: calc(5.4rem + 3.8rem);
    }
  `,

  Step: styled.p`
    font-family: 'EBSHunminjeongeum';
    color: var(--green600);
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  `,

  Title: styled.h1`
    display: flex;
    font-family: 'EBSHunminjeongeum';
    font-weight: 900;
    font-size: 3.2rem;
    @media ${device.mobile} {
      flex-direction: column;
      gap: 1rem;
    }
  `,

  ButtonWrapper: styled.div`
    position: relative;
    @media ${device.tablet} {
      /* margin-bottom: 6.4rem; */
    }
    @media ${device.tablet} {
      background: linear-gradient(to top, var(--background) 90%, transparent 100%);
      font-size: 1.6rem;
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: 4rem 2rem 2rem;
      width: auto;
    }
  `,

  PublicityResetText: styled.p`
    position: absolute;
    top: -2.4rem;
    font-family: 'Pretendard';
    margin-bottom: 1rem;
    font-size: 1.4rem;
    color: var(--gray600);
    width: 100%;
    text-align: center;
    @media ${device.tablet} {
      width: calc(100% - 4rem);
      top: 1.7rem;
    }
  `,
};
