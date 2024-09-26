import { SetStateAction, useState } from 'react';
import hatIcon from '@assets/icons/king-hat.svg';
import { MAX_LENGTH } from '@constants/maxLength';
import { isCompleteKoreanWord } from '@pages/setup/utils/isCompleteKoreanWord';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import Textarea from '../Textarea';

interface TSetPostProps {
  setPost: React.Dispatch<SetStateAction<string>>;
  setIsDisabled: React.Dispatch<SetStateAction<boolean>>;
}

const SetPost = ({ setPost, setIsDisabled }: TSetPostProps) => {
  const [invalidMsg, setInvalidMsg] = useState('함 당당하게 써보구려!');
  const [msgColor, setMsgColor] = useState('#909090');

  const handleInputChange = (value: string) => {
    setPost(value);
    if (value === '') {
      setInvalidMsg('함 당당하게 써보구려!');
      setIsDisabled(true);
      setMsgColor('#909090');
    } else if (value.length > MAX_LENGTH.BOOK_LETTER) {
      setInvalidMsg(`최대 ${MAX_LENGTH.BOOK_LETTER}글자만 사용할 수 있소.`);
      setIsDisabled(true);
      setMsgColor('#E75852');
    } else if (!isCompleteKoreanWord(value)) {
      setInvalidMsg('외국어 보다 한글은 어떠시오.');
      setIsDisabled(true);
      setMsgColor('#E75852');
    } else {
      setInvalidMsg('함 당당하게 써보구려!');
      setIsDisabled(false);
      setMsgColor('#909090');
    }
  };

  return (
    <S.Container>
      <S.InvalidMsg $color={msgColor}>
        <img src={hatIcon} alt="모자 아이콘" />
        <p>{invalidMsg}</p>
      </S.InvalidMsg>
      <Textarea
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
    margin: 6rem 0;
    height: 37rem;
    display: flex;
    flex-direction: column;
    position: relative;
    @media ${device.tablet} {
      margin-bottom: 10rem;
    }
  `,

  InvalidMsg: styled.div<{ $color: string }>`
    font-family: 'EBSHunminjeongeum';
    color: ${({ $color }) => $color};
    display: flex;
    align-items: center;
    gap: 1rem;
    position: absolute;
    top: -4rem;
    font-size: 1.5rem;
  `,
};
