import { SetStateAction, useEffect, useState } from 'react';
import PrimaryInput from '@components/PrimaryInput';
import { MAX_LENGTH } from '@constants/maxLength';
import { useUserQuery } from '@hooks/reactQuery/useQueryUser';
import { createRandomNickName } from '@pages/main/utils/create-random-nickname';
import { isCompleteKoreanWord } from '@pages/setup/utils/isCompleteKoreanWord';
import styled from 'styled-components';

interface TSetSenderProps {
  sender: string;
  setSender: React.Dispatch<SetStateAction<string>>;
  setIsDisabled: React.Dispatch<SetStateAction<boolean>>;
}

const SetSender = ({ sender, setSender, setIsDisabled }: TSetSenderProps) => {
  const [invalidMsg, setInvalidMsg] = useState('');
  const { data } = useUserQuery();

  useEffect(() => {
    if (data?.nickname) {
      setSender(data.nickname);
      setIsDisabled(false);
    }
  }, [data?.nickname, setIsDisabled, setSender]);

  const handleInputChange = (value: string) => {
    setSender(value);
    if (value === '') {
      setInvalidMsg('');
      setIsDisabled(true);
    } else if (value.length > MAX_LENGTH.NICKNAME) {
      setInvalidMsg('최대 6글자만 사용할 수 있습니다.');
      setIsDisabled(true);
    } else if (isCompleteKoreanWord(value)) {
      setInvalidMsg('한글만 사용할 수 있습니다.');
      setIsDisabled(true);
    } else {
      setInvalidMsg('');
      setIsDisabled(false);
    }
  };

  const handleRandomNameClick = () => {
    const newNickName = createRandomNickName();
    setSender(newNickName);
  };

  return (
    <S.Container>
      <PrimaryInput
        placeholder="어떤 호명으로 등록되고 싶은가?"
        onChange={handleInputChange}
        invalidMsg={invalidMsg}
        value={sender}
      />
      <S.RandomNameButton onClick={handleRandomNameClick}>무작위 호명 받겠소 ↻</S.RandomNameButton>
    </S.Container>
  );
};

export default SetSender;

const S = {
  Container: styled.div`
    margin: 5rem 0;
    height: 40rem;
    gap: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
  `,

  RandomNameButton: styled.button`
    cursor: pointer;
    padding: 0.9rem 2rem;
    color: var(--green600);
    border: 1px solid var(--green600);
    border-radius: 0.6rem;
    margin-top: 1.6rem;
    align-self: flex-end;
  `,
};
