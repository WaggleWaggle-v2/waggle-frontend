import { useEffect, useState } from 'react';
import backIcon from '@assets/icons/left-arrow.svg';
import Header from '@components/header';
import ProgressBar from '@components/template/ProgressBar';
import SettingTemplate from '@components/template/SettingTemplate';
import { USER_SETUP_TOTAL_STEP } from '@constants/setupTotalStep';
import { useUsernameAndPublicityCreateMutation, useUserQuery } from '@hooks/reactQuery/useQueryUser';
import usePageWidth from '@hooks/usePageWidth';
import { device, size } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { zIndex } from '@styles/zIndex';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SetNickname from './components/SetNickname';
import SetPublicity from './components/SetPublicity';

const SetUp = () => {
  const [step, setStep] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);
  const [nickname, setNickname] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const pageWidth = usePageWidth();

  const mutation = useUsernameAndPublicityCreateMutation();
  const { data } = useUserQuery();

  const handleNextButtonClick = () => {
    setStep(step => step + 1);
  };

  const handleSubmitButtonClick = async () => {
    try {
      await mutation.mutateAsync({ nickname, isOpen });
      navigate(`/bookshelf/${data?.id}`, { state: 'setup' });
    } catch (error) {
      console.error('Failed to update user information:', error);
    }
  };

  useEffect(() => {
    if (data?.userState === 'VERIFIED') {
      navigate(`/bookshelf/${data.id}`, { state: 'setup' });
    }
  }, [data]);

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
            <SetPublicity setPublicity={setIsOpen} publicity={isOpen} />
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
    background-color: var(--background);
    z-index: calc(${zIndex.header} + 1);
  `,
  Body: styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100dvh;
    @media ${device.tablet} {
      height: calc(90dvh - ${HEADER_HEIGHT.MOBILE});
    }
  `,
  GoBackIcon: styled.img`
    cursor: pointer;
  `,
};
