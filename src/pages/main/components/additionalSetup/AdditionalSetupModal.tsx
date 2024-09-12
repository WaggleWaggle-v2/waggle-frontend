/* eslint-disable no-unused-vars */
import { Dispatch, useState } from 'react';
import ModalTemplate from '@components/template/ModalTemplate';
import ProgressBar from '@components/template/ProgressBar';
import SettingTemplate from '@components/template/SettingTemplate';
import { ADDITIONAL_SETUP_TOTAL_STEP } from '@constants/setupTotalStep';
import {
  useBookshelfBackgroundUpdateMutation,
  useBookshelfIntroductionUpdateMutation,
  useBookshelfThemeUpdateMutation,
} from '@hooks/reactQuery/useQueryBookshelf';
import { TTheme } from '@pages/main/types/type';
import styled from 'styled-components';
import SetIntro from './SetIntro';
import SetProfile from './SetProfile';
import SetTheme from './SetTheme';

interface TAdditionalSetupModalProps {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

const AdditionalSetupModal = ({ setIsOpen }: TAdditionalSetupModalProps) => {
  const [step, setStep] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);
  const [profile, setProfile] = useState(1);
  const [theme, setTheme] = useState<TTheme>('WHITE');
  const [intro, setIntro] = useState('');

  const backgroundMutation = useBookshelfBackgroundUpdateMutation();
  const themeMutation = useBookshelfThemeUpdateMutation();
  const introductionMutation = useBookshelfIntroductionUpdateMutation();

  const handleUpdateBackground = async () => {
    try {
      await backgroundMutation.mutateAsync(profile);
      setStep(step => step + 1);
      setIsDisabled(true);
    } catch (error) {
      console.error('Failed to update user information:', error);
    }
  };

  const handleUpdateTheme = async () => {
    try {
      await themeMutation.mutateAsync(theme);
      setStep(step => step + 1);
      setIsDisabled(true);
    } catch (error) {
      console.error('Failed to update user information:', error);
    }
  };

  const handleUpdateIntroduction = async () => {
    try {
      await introductionMutation.mutateAsync(intro);
      setIsOpen(false);
    } catch (error) {
      console.error('Failed to update user information:', error);
    }
  };

  return (
    <S.Container>
      <ModalTemplate setIsOpen={setIsOpen} setStep={setStep} step={step}>
        {step === 1 && (
          <SettingTemplate
            step={step}
            titleTop="나를 표현할&nbsp;"
            titleBottom="삽화를 고르시오"
            handleButtonClick={handleUpdateBackground}
            isDisabled={false}>
            <SetProfile profile={profile} setProfile={setProfile} />
          </SettingTemplate>
        )}

        {step === 2 && (
          <SettingTemplate
            step={step}
            titleTop="배경을 선택해 주시오"
            handleButtonClick={handleUpdateTheme}
            isDisabled={false}>
            <SetTheme theme={theme} setTheme={setTheme} />
          </SettingTemplate>
        )}

        {step === 3 && (
          <SettingTemplate
            step={step}
            titleTop="나의 책장을&nbsp;"
            titleBottom="자랑해보시오"
            handleButtonClick={handleUpdateIntroduction}
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
  `,
};
