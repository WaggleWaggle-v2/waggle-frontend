/* eslint-disable no-unused-vars */
import { useState } from 'react';
import ModalTemplate from '@components/template/ModalTemplate';
import SettingTemplate from '@components/template/SettingTemplate';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import SetIntro from './SetIntro';
import SetProfile from './SetProfile';
import SetTheme from './SetTheme';
import ProgressBar from '@components/template/ProgressBar';
import { ADDITIONAL_SETUP_TOTAL_STEP } from '@constants/setupTotalStep';

interface TAdditionalSetupModalProps {
  setIsOpen: (value: boolean) => void;
}

const AdditionalSetupModal = ({ setIsOpen }: TAdditionalSetupModalProps) => {
  const [step, setStep] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);
  const [profile, setProfile] = useState('');
  const [theme, setTheme] = useState('');
  const [intro, setIntro] = useState('');

  const handleNextButtonClick = () => {
    setStep(step => step + 1);
    setIsDisabled(true);
  };

  const handleSubmitButtonClick = () => {
    console.log(profile);
    console.log(theme);
    console.log(intro);
    location.reload();
  };

  return (
    <S.Container>
      <S.Nav>GNB</S.Nav>
      <ModalTemplate setIsOpen={setIsOpen}>
        {step === 1 && (
          <SettingTemplate
            step={step}
            titleTop="나를 표현할&nbsp;"
            titleBottom="삽화를 고르시오"
            handleButtonClick={handleNextButtonClick}
            isDisabled={isDisabled}>
            <SetProfile profile={profile} setProfile={setProfile} setIsDisabled={setIsDisabled} />
          </SettingTemplate>
        )}

        {step === 2 && (
          <SettingTemplate
            step={step}
            titleTop="배경을 선택해 주시오"
            handleButtonClick={handleNextButtonClick}
            isDisabled={isDisabled}>
            <SetTheme theme={theme} setTheme={setTheme} setIsDisabled={setIsDisabled} />
          </SettingTemplate>
        )}

        {step === 3 && (
          <SettingTemplate
            step={step}
            titleTop="나의 책장을&nbsp;"
            titleBottom="자랑해보시오"
            handleButtonClick={handleSubmitButtonClick}
            isDisabled={isDisabled}
            buttonText="나의 책장 보러가기">
            <SetIntro setIntro={setIntro} setIsDisabled={setIsDisabled} />
          </SettingTemplate>
        )}
      </ModalTemplate>
      <ProgressBar totalStep={ADDITIONAL_SETUP_TOTAL_STEP} currentStep={step} />
    </S.Container>
  );
};

export default AdditionalSetupModal;

const S = {
  Container: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    height: 100vh;
  `,

  Nav: styled.nav`
    @media ${device.mobile} {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      background-color: var(--background);
      border-bottom: 0.1rem solid var(--green600);
      width: 100%;
      height: 5.4rem;
      z-index: 101;
    }
  `,
};
