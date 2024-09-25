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
  ButtonSubText?: string;
  handleButtonClick: () => void;
  isDisabled: boolean;
  isPreview?: boolean | undefined;
}

const SettingTemplate = ({
  children,
  step,
  titleTop,
  titleBottom,
  handleButtonClick,
  isDisabled,
  isPreview,
  buttonText = '다음',
  ButtonSubText,
}: TSettingTemplateProps) => {
  const stepStr = step === 1 ? '하나' : step === 2 ? '둘' : step === 3 ? '셋' : step === 4 ? '넷' : '마지막이오';

  return (
    <S.Container $isPreview={isPreview}>
      <div>
        <S.Step>{stepStr}.</S.Step>
        <S.Title>
          <p>{titleTop}</p>
          <p>{titleBottom}</p>
        </S.Title>
        <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
      </div>
      <S.ButtonWrapper>
        {!isDisabled && <S.ButtonSubText>{ButtonSubText}</S.ButtonSubText>}
        <PrimaryButton disabled={isDisabled} onClick={handleButtonClick}>
          {buttonText}
        </PrimaryButton>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default SettingTemplate;

const S = {
  Container: styled.section<{ $isPreview: boolean | undefined }>`
    padding: 5rem 4.8rem 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 46.4rem;
    height: fit-content;
    @media ${device.tablet} {
      margin-top: calc(${HEADER_HEIGHT.MOBILE});
      height: calc(100vh - ${HEADER_HEIGHT.MOBILE});
      min-width: 0;
      width: ${({ $isPreview }) => !$isPreview && '100%'};
    }
    @media ${device.mobile} {
      display: flex;
      width: 100vw;
      min-width: 0;
      margin-top: calc(5.4rem);
      height: calc(100% - 20rem);
      padding: 4rem 2rem;
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

  ChildrenWrapper: styled.div`
    display: flex;
    @media ${device.mobile} {
      display: flex;
      flex-direction: column-reverse;
    }
  `,

  ButtonWrapper: styled.div`
    position: relative;
    width: 100%;

    @media ${device.tablet} {
      background: linear-gradient(to top, var(--background) 90%, transparent 100%);
      font-size: 1.6rem;
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: 4rem 2rem 2rem;
    }
  `,

  ButtonSubText: styled.p`
    position: absolute;
    bottom: 5.4rem;
    font-family: 'Pretendard';
    margin-bottom: 1rem;
    font-size: 1.4rem;
    color: var(--gray600);
    width: 100%;
    text-align: center;
    line-height: 130%;
    @media ${device.tablet} {
      width: calc(100% - 4rem);
      bottom: 7rem;
    }
  `,
};
