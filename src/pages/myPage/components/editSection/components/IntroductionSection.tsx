import { ChangeEvent, useEffect, useState } from 'react';
import kingHatIcon from '@assets/icons/king-hat.svg';
import { MAX_LENGTH } from '@constants/maxLength';
import { useBookshelfIntroductionUpdateMutation } from '@hooks/reactQuery/useQueryBookshelf';
import { isCompleteKoreanWord } from '@pages/setup/utils/isCompleteKoreanWord';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import { SaveButton } from '../style/commStyle';

const IntroductionSection = ({ introduction }: { introduction: string | null | undefined }) => {
  const [value, setValue] = useState('');
  const [invalidateMsg, setInvalidateMsg] = useState('함 당당하게 써보구려!');
  const [isError, setIsError] = useState(false);
  const handleFetchIntroduction = useBookshelfIntroductionUpdateMutation();

  useEffect(() => {
    if (introduction) {
      setValue(introduction);
    }
  }, [introduction]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;

    setValue(newValue);
    if (newValue === '') {
      setInvalidateMsg('함 당당하게 써보구려!');
      setIsError(false);
    } else if (newValue.length > MAX_LENGTH.BOOKSHELF_INTRODUCTION) {
      setInvalidateMsg('최대 100글자만 사용할 수 있소!');
      setIsError(true);
    } else if (!isCompleteKoreanWord(newValue)) {
      setInvalidateMsg('외국어 보다 한글은 어떠시오.');
      setIsError(true);
    } else {
      setInvalidateMsg('멋진 소개를 가지고 있구려!');
      setIsError(false);
    }
  };

  return (
    <S.Container>
      <S.InvalidateHat>
        <S.HatIcon src={kingHatIcon} />
        <S.InvalidateText $isError={isError}>{invalidateMsg}</S.InvalidateText>
      </S.InvalidateHat>
      <S.IntroductionForm>
        <S.IntroductionInput
          maxLength={MAX_LENGTH.BOOKSHELF_INTRODUCTION}
          placeholder="소개글을 작성해주세요."
          value={value}
          onChange={handleChange}
        />
        <S.TextLength>
          ({value.length} / {MAX_LENGTH.BOOKSHELF_INTRODUCTION})
        </S.TextLength>
        <S.SaveButton
          type="button"
          disabled={introduction === value}
          onClick={() => {
            handleFetchIntroduction.mutate(value);
          }}>
          변경사항 저장하기
        </S.SaveButton>
      </S.IntroductionForm>
    </S.Container>
  );
};

export default IntroductionSection;

const S = {
  Container: styled.div`
    position: relative;
    height: 100%;
    width: 100%;
  `,
  //Introduction
  IntroductionForm: styled.form`
    border: 0.1rem solid var(--gray300);
    border-radius: 0.6rem;
    padding: 1rem 1.5rem 5.5rem;
    height: 100%;
    position: relative;
    flex-grow: 1;

    @media ${device.mobile} {
      width: 100%;
      height: 17.4rem;
    }
  `,
  IntroductionLabel: styled.label`
    border: 0.1rem solid var(--gray300);
    border-radius: 0.6rem;
    padding: 1rem 1.5rem 5.5rem;
    height: 100%;
    position: relative;
  `,
  IntroductionInput: styled.textarea`
    resize: none;
    width: 100%;
    height: 100%;
    color: #000;
    font-family: 'Pretendard';
    line-height: 2rem;
    min-width: 31.5rem;

    @media ${device.mobile} {
      min-width: 0;
    }
  `,
  TextLength: styled.p`
    color: var(--gray500);
    font-family: 'Pretendard';
    font-size: 1.4rem;
    font-weight: 500;
    position: absolute;
    bottom: 2rem;
    left: 2rem;
  `,
  InvalidateHat: styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    position: absolute;
    top: -3.3rem;

    @media ${device.tablet} {
      top: auto;
      bottom: -3.8rem;
    }
  `,
  InvalidateText: styled.p<{ $isError: boolean }>`
    color: ${({ $isError }) => ($isError ? '#E75852' : '#909090')};
    font-family: 'EBSHunminjeongeum';
    font-size: 1.5rem;
    font-weight: 600;
  `,
  HatIcon: styled.img`
    width: 2.5rem;
    height: 2.3rem;
  `,
  SaveButton,
};
