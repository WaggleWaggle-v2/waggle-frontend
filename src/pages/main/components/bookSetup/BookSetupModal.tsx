/* eslint-disable no-unused-vars */
import { Dispatch, useState } from 'react';
import ModalTemplate from '@components/template/ModalTemplate';
import ProgressBar from '@components/template/ProgressBar';
import SettingTemplate from '@components/template/SettingTemplate';
import { BOOK_SETUP_TOTAL_STEP } from '@constants/setupTotalStep';
import {
  useBookshelfBackgroundUpdateMutation,
  useBookshelfIntroductionUpdateMutation,
  useBookshelfThemeUpdateMutation,
} from '@hooks/reactQuery/useQueryBookshelf';
import usePageWidth from '@hooks/usePageWidth';
import { TTheme } from '@pages/main/types/type';
import { device, size } from '@styles/breakpoints';
import styled from 'styled-components';
import Preview from './Preview';
import SetStickers from './SetStickers';
import SetIntro from '../additionalSetup/SetIntro';
import SetProfile from '../additionalSetup/SetProfile';
import SetTheme from '../additionalSetup/SetTheme';

interface TAdditionalSetupModalProps {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

const BookSetupModal = ({ setIsOpen }: TAdditionalSetupModalProps) => {
  const pageWidth = usePageWidth();
  const [step, setStep] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);
  //   const [profile, setProfile] = useState(1);
  //   const [theme, setTheme] = useState<TTheme>('WHITE');
  //   const [intro, setIntro] = useState('');
  const [type, setType] = useState<'SMALL' | 'BIG'>('SMALL');
  const [canvas, setCanvas] = useState();
  const [post, setPost] = useState<string>('');
  const [sender, setSender] = useState<string>('');
  const [publicity, setPublicity] = useState<boolean>(true);

  //   const backgroundMutation = useBookshelfBackgroundUpdateMutation();
  //   const themeMutation = useBookshelfThemeUpdateMutation();
  //   const introductionMutation = useBookshelfIntroductionUpdateMutation();

  //   const handleUpdateBackground = async () => {
  //     try {
  //       await backgroundMutation.mutateAsync(profile);
  //       setStep(step => step + 1);
  //       setIsDisabled(true);
  //     } catch (error) {
  //       console.error('Failed to update user information:', error);
  //     }
  //   };

  const handleTest = async () => {
    setStep(step => step + 1);
  };

  return (
    <S.Container>
      <ModalTemplate setIsOpen={setIsOpen} setStep={setStep} step={step}>
        {step === 1 && (
          <SettingTemplate
            step={step}
            titleTop="책장 크기를&nbsp;"
            titleBottom="선택해주시오."
            handleButtonClick={handleTest}
            isDisabled={false}>
            {/* <SetProfile profile={profile} setProfile={setProfile} /> */}
            <SetStickers />
          </SettingTemplate>
        )}

        {step === 2 && (
          <S.SettingWrapper>
            <SettingTemplate
              step={step}
              titleTop="책장을 꾸며주시오."
              handleButtonClick={handleTest}
              isDisabled={false}>
              {/* <SetTheme theme={theme} setTheme={setTheme} /> */}
              <SetStickers />
              {pageWidth <= size.mobile && <Preview />}
            </SettingTemplate>
            {pageWidth > size.mobile && <Preview />}
          </S.SettingWrapper>
        )}

        {step === 3 && (
          <SettingTemplate
            step={step}
            titleTop="마음을 전하시오."
            handleButtonClick={handleTest}
            isDisabled={false}
            buttonText="나의 책장 보러가기">
            {/* <SetIntro setIntro={setIntro} setIsDisabled={setIsDisabled} /> */}
            <SetStickers />
          </SettingTemplate>
        )}

        {step === 4 && (
          <SettingTemplate
            step={step}
            titleTop="이름을 남겨주시오."
            handleButtonClick={handleTest}
            isDisabled={false}
            buttonText="나의 책장 보러가기">
            {/* <SetIntro setIntro={setIntro} setIsDisabled={setIsDisabled} /> */}
            <SetStickers />
          </SettingTemplate>
        )}

        {step === 5 && (
          <SettingTemplate
            step={step}
            titleTop="방명록을 공개하겠소?"
            handleButtonClick={handleTest}
            isDisabled={false}
            buttonText="나의 책장 보러가기">
            {/* <SetIntro setIntro={setIntro} setIsDisabled={setIsDisabled} /> */}
            <SetStickers />
          </SettingTemplate>
        )}
      </ModalTemplate>
      <ProgressBar totalStep={BOOK_SETUP_TOTAL_STEP} currentStep={step} />
    </S.Container>
  );
};

export default BookSetupModal;

const S = {
  Container: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
  `,

  SettingWrapper: styled.div`
    display: flex;
    height: 100vh;
  `,
};
