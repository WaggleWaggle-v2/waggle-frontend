/* eslint-disable no-unused-vars */
import { SetStateAction, useState } from 'react';
import PrimaryTextarea from '@components/PrimaryTextarea';
import { MAX_LENGTH } from '@constants/maxLength';
import { isCompleteKoreanWord } from '@pages/setup/utils/isCompleteKoreanWord';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

interface TSetIntroProps {
  setIntro: (intro: string) => void;
  setIsDisabled: React.Dispatch<SetStateAction<boolean>>;
}

const SetIntro = ({ setIntro, setIsDisabled }: TSetIntroProps) => {
  const [invalidMsg, setInvalidMsg] = useState('');

  const handleInputChange = (value: string) => {
    setIntro(value);
    if (value === '') {
      setInvalidMsg('');
      setIsDisabled(true);
    } else if (value.length > MAX_LENGTH.BOOKSHELF_INTRODUCTION) {
      setInvalidMsg('최대 100글자만 사용할 수 있습니다.');
      setIsDisabled(true);
    } else if (isCompleteKoreanWord(value)) {
      setInvalidMsg('한글만 사용할 수 있습니다.');
      setIsDisabled(true);
    } else {
      setInvalidMsg('');
      setIsDisabled(false);
    }
  };

  return (
    <S.Container>
      <PrimaryTextarea
        placeholder="나의 책장을 소개하는 글을 적으시오."
        onChange={handleInputChange}
        invalidMsg={invalidMsg}
        maxLength={MAX_LENGTH.BOOKSHELF_INTRODUCTION}
      />
    </S.Container>
  );
};

export default SetIntro;

const S = {
  Container: styled.div`
    width: calc(76.8rem - 4.8rem * 2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 28.5rem;
    margin-bottom: 14rem;
    @media ${device.mobile} {
      height: auto;
      width: 100%;
      margin-top: 4rem;
      margin-bottom: 12rem;
    }
  `,
};
