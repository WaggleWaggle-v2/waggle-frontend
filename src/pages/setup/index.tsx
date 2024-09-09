import { useState } from 'react';
import ProgressBar from '@components/template/ProgressBar';
import SettingTemplate from '@components/template/SettingTemplate';
import { USER_SETUP_TOTAL_STEP } from '@constants/setupTotalStep';
import { device, size } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SetNickname from './components/SetNickname';
import SetPublicity from './components/SetPublicity';
import { TPublicity } from './types/type';
import Header from '@components/header';
import usePageWidth from '@hooks/usePageWidth';
import backIcon from '@assets/icons/left-arrow.svg';

const SetUp = () => {
  const [step, setStep] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);
  const [nickname, setNickname] = useState('');
  const [publicity, setPublicity] = useState<TPublicity>(null);
  const navigate = useNavigate();
  const pageWidth = usePageWidth();

  const handleNextButtonClick = () => {
    setStep(step => step + 1);
  };
  const handleSubmitButtonClick = () => {
    console.log(nickname, publicity);
    navigate('/');
  };

  return (
    <>
      {pageWidth > size.tablet ? (
        <Header />
      ) : (
        <S.HeaderContainer>
          <S.GoBackIcon
            src={backIcon}
            alt={'뒤로 가기'}
            onClick={() => (step !== 1 ? setStep(prev => prev - 1) : navigate('/login'))}
          />
        </S.HeaderContainer>
      )}
      <S.Body>
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
      </S.Body>
    </>
  );
};

export default SetUp;
const S = {
  HeaderContainer: styled.header`
    position: sticky;
    top: 0;
    padding: 2rem;
    display: flex;
    align-items: center;
    height: ${HEADER_HEIGHT.MOBILE};
  `,
  Body: styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    @media ${device.tablet} {
      height: calc(100vh - ${HEADER_HEIGHT.MOBILE});
    }
    @media ${device.mobile} {
      height: calc(76vh - ${HEADER_HEIGHT.MOBILE});
    }
  `,
  GoBackIcon: styled.img`
    cursor: pointer;
  `,
};
