import { SetStateAction, useState } from 'react';
import PrimaryTextarea from '@components/PrimaryTextarea';
import { MAX_LENGTH } from '@constants/maxLength';
import { isCompleteKoreanWord } from '@pages/setup/utils/isCompleteKoreanWord';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

interface TSetPostProps {
  setPost: React.Dispatch<SetStateAction<string>>;
  setIsDisabled: React.Dispatch<SetStateAction<boolean>>;
}

const SetPost = ({ setPost, setIsDisabled }: TSetPostProps) => {
  const [invalidMsg, setInvalidMsg] = useState('');

  const handleInputChange = (value: string) => {
    setPost(value);
    if (value === '') {
      setInvalidMsg('');
      setIsDisabled(true);
    } else if (value.length > MAX_LENGTH.BOOK_LETTER) {
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
        placeholder="책장에 들어갈 편지를 작성해보세요!"
        onChange={handleInputChange}
        invalidMsg={invalidMsg}
        maxLength={MAX_LENGTH.BOOK_LETTER}
      />
    </S.Container>
  );
};

export default SetPost;

const S = {
  Container: styled.div`
    width: 100%;
    margin: 5rem 0;
    height: 40rem;
    display: flex;
    flex-direction: column;
    @media ${device.tablet} {
    }
    @media ${device.mobile} {
    }
  `,
};
