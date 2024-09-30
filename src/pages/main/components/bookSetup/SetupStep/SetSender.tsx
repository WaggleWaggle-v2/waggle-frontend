import { SetStateAction, useEffect, useState } from 'react';
import hatIcon from '@assets/icons/king-hat.svg';
import PrimaryInput from '@components/PrimaryInput';
import { MAX_LENGTH } from '@constants/maxLength';
import { useUserQuery } from '@hooks/reactQuery/useQueryUser';
import { createRandomNickName } from '@pages/main/utils/create-random-nickname';
import { isCompleteKoreanWord } from '@pages/setup/utils/isCompleteKoreanWord';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

interface TSetSenderProps {
  sender: string;
  setSender: React.Dispatch<SetStateAction<string>>;
  setIsDisabled: React.Dispatch<SetStateAction<boolean>>;
}

const SetSender = ({ sender, setSender, setIsDisabled }: TSetSenderProps) => {
  const [invalidMsg, setInvalidMsg] = useState('어떤 호명으로 등록되고 싶은가?');
  const [msgColor, setMsgColor] = useState('#909090');
  const { data } = useUserQuery();

  useEffect(() => {
    if (data?.nickname) {
      setSender(data.nickname);
      handleInputChange(data.nickname);
      setIsDisabled(false);
    } else if (sender) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [data?.nickname, setIsDisabled]);

  const handleInputChange = (value: string) => {
    setSender(value);
    if (value === '') {
      setInvalidMsg('어떤 호명으로 등록되고 싶은가?');
      setIsDisabled(true);
      setMsgColor('#909090');
    } else if (value.length > MAX_LENGTH.NICKNAME) {
      setInvalidMsg(`호명은 ${MAX_LENGTH.NICKNAME}자 이하만 가능하오.`);
      setIsDisabled(true);
      setMsgColor('#E75852');
    } else if (!isCompleteKoreanWord(value)) {
      setInvalidMsg('외국어 보다 한글은 어떠시오.');
      setIsDisabled(true);
      setMsgColor('#E75852');
    } else {
      setInvalidMsg('멋진 이름을 가지고 있구려!');
      setIsDisabled(false);
      setMsgColor('var(--green600)');
    }
  };

  const handleRandomNameClick = () => {
    const newNickName = createRandomNickName();
    setSender(newNickName);
    setIsDisabled(false);
  };

  return (
    <S.Container>
      <S.InvalidMsg $color={msgColor}>
        <img src={hatIcon} alt="모자 아이콘" />
        <p>{invalidMsg}</p>
      </S.InvalidMsg>
      <PrimaryInput
        isNoInvalidMsg
        placeholder="호명은 6글자 이하, 한글만 사용 가능해요."
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
    margin-top: 10rem;
    height: 38rem;
    gap: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    @media ${device.mobile} {
      margin-top: 6rem;
    }
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
