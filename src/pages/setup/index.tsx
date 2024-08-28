import { useState } from 'react';
import doorCloseIcon from '@assets/icons/door-close.svg';
import doorOpenIcon from '@assets/icons/door-open.svg';
import PrimaryButton from '@components/PrimaryButton';
import PrimaryInput from '@components/PrimaryInput';
import SettingTemplate from '@components/template/SettingTemplate';
import styled from 'styled-components';

const SetUp = () => {
  const [inputValue, setInputValue] = useState('');
  const [invalidMsg, setInvalidMsg] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
    if (value === '') {
      setInvalidMsg('글자를 적으셔야 하옵니다');
    } else {
      setInvalidMsg('');
    }
  };

  const handleButtonClick = () => {};

  return (
    <S.Container>
      <SettingTemplate step={1} title="호패를 만드시오">
        <S.InputWrapper>
          <PrimaryInput
            placeholder="호명은 6글자 이하, 한글만 사용 가능해요."
            value={inputValue}
            onChange={handleInputChange}
            invalidMsg={invalidMsg}
          />
        </S.InputWrapper>
        <PrimaryButton onClick={handleButtonClick}>다음</PrimaryButton>
      </SettingTemplate>

      <SettingTemplate step={2} title="공개 하겠소?">
        <S.InputWrapper>
          <img src={doorOpenIcon} />
          <img src={doorCloseIcon} />
        </S.InputWrapper>
        <PrimaryButton onClick={handleButtonClick}>나만의 책장 만들기</PrimaryButton>
      </SettingTemplate>
    </S.Container>
  );
};

export default SetUp;
const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `,

  InputWrapper: styled.div`
    margin: 4rem 0 6rem;
  `,
};
