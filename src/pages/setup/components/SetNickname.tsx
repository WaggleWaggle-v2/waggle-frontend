/* eslint-disable no-unused-vars */
import { useState } from 'react';
import PrimaryInput from '@components/PrimaryInput';
import styled from 'styled-components';
import { isCompleteKoreanWord } from '../utils/isCompleteKoreanWord';

interface TSetNicknameProps {
  setNickname: (value: string) => void;
  setIsDisabled: (value: boolean) => void;
}

const SetNickname = ({ setNickname, setIsDisabled }: TSetNicknameProps) => {
  const [invalidMsg, setInvalidMsg] = useState('');

  const handleInputChange = (value: string) => {
    setNickname(value);
    if (value === '') {
      setInvalidMsg('');
      setIsDisabled(true);
    } else if (value.length > 6) {
      setInvalidMsg('최대 6글자만 사용할 수 있습니다.');
      setIsDisabled(true);
    } else if (isCompleteKoreanWord(value)) {
      setInvalidMsg('호명은 한글만 사용할 수 있습니다.');
      setIsDisabled(true);
    } else {
      setInvalidMsg('');
      setIsDisabled(false);
    }
  };

  return (
    <S.Container>
      <PrimaryInput
        placeholder="호명은 6글자 이하, 한글만 사용 가능해요."
        onChange={handleInputChange}
        invalidMsg={invalidMsg}
      />
    </S.Container>
  );
};

export default SetNickname;

const S = {
  Container: styled.div`
    margin: 4rem 0 6rem;
    width: 100%;
  `,
};
