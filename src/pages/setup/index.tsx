import { useState } from 'react';
import PrimaryButton from '@components/PrimaryButton';
import SettingTemplate from '@components/template/SettingTemplate';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SetNickname from './components/SetNickname';
import SetPublicity from './components/SetPublicity';
import { TPublicity } from './types/type';

const SetUp = () => {
  const [step, setStep] = useState(1);
  const [nickname, setNickname] = useState('');
  const [publicity, setPublicity] = useState<TPublicity>(null);
  const navigate = useNavigate();

  const [isDisabled, setIsDisabled] = useState(true);

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
        <SettingTemplate step={step} title="호패를 만드시오">
          <SetNickname setNickname={setNickname} setIsDisabled={setIsDisabled} />
          {!isDisabled && <S.PublicityResetText>마이페이지에서 재설정이 가능합니다.</S.PublicityResetText>}
          <PrimaryButton disabled={isDisabled} onClick={handleNextButtonClick}>
            다음
          </PrimaryButton>
        </SettingTemplate>
      )}

      {step === 2 && (
        <SettingTemplate step={step} title="공개 하겠소?">
          <SetPublicity setPublicity={setPublicity} publicity={publicity} />
          {publicity && <S.PublicityResetText>마이페이지에서 재설정이 가능합니다.</S.PublicityResetText>}
          <PrimaryButton disabled={isDisabled} onClick={handleSubmitButtonClick}>
            나만의 책장 만들기
          </PrimaryButton>
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

  PublicityResetText: styled.p`
    position: absolute;
    bottom: 6.4rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    color: var(--gray600);
    width: 100%;
    text-align: center;
  `,
};
