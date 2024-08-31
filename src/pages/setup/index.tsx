import { useState } from 'react';
import ProgressBar from '@components/template/ProgressBar';
import SettingTemplate from '@components/template/SettingTemplate';
import { USER_SETUP_TOTAL_STEP } from '@constants/setupTotalStep';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SetNickname from './components/SetNickname';
import SetPublicity from './components/SetPublicity';
import { TPublicity } from './types/type';

const SetUp = () => {
  const [step, setStep] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);
  const [nickname, setNickname] = useState('');
  const [publicity, setPublicity] = useState<TPublicity>(null);
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    setStep(step => step + 1);
  };
  const handleSubmitButtonClick = () => {
    console.log(nickname, publicity);
    navigate('/');
  };

  return (
    <S.Container>
      {step === 1 && (
        <SettingTemplate
          step={step}
          titleTop="호패를 만드시오"
          handleButtonClick={handleNextButtonClick}
          isDisabled={isDisabled}>
          <SetNickname setNickname={setNickname} setIsDisabled={setIsDisabled} />
        </SettingTemplate>
      )}

      {step === 2 && (
        <SettingTemplate
          step={step}
          titleTop="공개 하겠소?"
          handleButtonClick={handleSubmitButtonClick}
          isDisabled={isDisabled}>
          <SetPublicity setPublicity={setPublicity} publicity={publicity} />
        </SettingTemplate>
      )}
      <ProgressBar totalStep={USER_SETUP_TOTAL_STEP} currentStep={step} />
    </S.Container>
  );
};

export default SetUp;
const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - ${HEADER_HEIGHT.PC});
    @media ${device.tablet} {
      height: calc(100vh - ${HEADER_HEIGHT.MOBILE});
    }
    @media ${device.mobile} {
      height: calc(76vh - ${HEADER_HEIGHT.MOBILE});
    }
  `,
};
