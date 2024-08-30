import { useState } from 'react';
import PrimaryButton from '@components/PrimaryButton';
import SettingTemplate from '@components/template/SettingTemplate';
import { device } from '@styles/breakpoints';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SetNickname from './components/SetNickname';
import SetPublicity from './components/SetPublicity';
import { TPublicity } from './types/type';
import { USER_SETUP_TOTAL_STEP } from './constants/totalStepNumber';

const SetUp = () => {
  const [step, setStep] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);
  const [nickname, setNickname] = useState('');
  const [publicity, setPublicity] = useState<TPublicity>(null);
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    setStep(step + 1);
  };
  const handleSubmitButtonClick = () => {
    console.log(nickname, publicity);
    navigate('/main');
  };

  return (
    <S.Container>
      {step === 1 && (
        <SettingTemplate step={step} title="호패를 만드시오" totalStep={USER_SETUP_TOTAL_STEP}>
          <SetNickname setNickname={setNickname} setIsDisabled={setIsDisabled} />
          <S.ButtonWrapper>
            {!isDisabled && <S.PublicityResetText>마이페이지에서 재설정이 가능합니다.</S.PublicityResetText>}
            <PrimaryButton disabled={isDisabled} onClick={handleNextButtonClick}>
              다음
            </PrimaryButton>
          </S.ButtonWrapper>
        </SettingTemplate>
      )}

      {step === 2 && (
        <SettingTemplate step={step} title="공개 하겠소?" totalStep={USER_SETUP_TOTAL_STEP}>
          <SetPublicity setPublicity={setPublicity} publicity={publicity} />
          <S.ButtonWrapper>
            {publicity && <S.PublicityResetText>마이페이지에서 재설정이 가능합니다.</S.PublicityResetText>}
            <PrimaryButton disabled={isDisabled} onClick={handleSubmitButtonClick}>
              나의 책장 만들기
            </PrimaryButton>
          </S.ButtonWrapper>
        </SettingTemplate>
      )}
    </S.Container>
  );
};

export default SetUp;
const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `,

  ButtonWrapper: styled.div`
    position: relative;
    @media ${device.mobile} {
      font-size: 1.6rem;
      position: fixed;
      bottom: 2rem;
      right: 0;
      left: 0;
      margin: 0 2rem;
      width: auto;
    }
  `,

  PublicityResetText: styled.p`
    font-family: 'Pretendard';
    position: absolute;
    bottom: 6.4rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    color: var(--gray600);
    width: 100%;
    text-align: center;
    @media ${device.mobile} {
      bottom: 5.2rem;
    }
  `,
};
