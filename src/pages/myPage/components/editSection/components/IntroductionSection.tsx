import { useEffect } from 'react';
import { MAX_LENGTH } from '@constants/maxLength';
import { useBookshelfIntroductionUpdateMutation } from '@hooks/reactQuery/useQueryBookshelf';
import useInputValue from '@hooks/useInputText';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import { SaveButton } from '../style/commStyle';

const IntroductionSection = ({ introduction }: { introduction: string | null }) => {
  const { value: introductionValue, handleChangeValue, handleSetValue } = useInputValue();
  const patchIntroduction = useBookshelfIntroductionUpdateMutation();

  const handlePatchIntroduction = () => {
    patchIntroduction.mutate(introductionValue);
  };

  useEffect(() => {
    handleSetValue(introduction ? introduction : '');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.IntroductionForm>
      <S.IntroductionInput
        maxLength={100}
        placeholder="소개글을 작성해주세요."
        value={introductionValue}
        onChange={handleChangeValue}
      />
      <S.TextLength>
        ({introductionValue.length} / {MAX_LENGTH.BOOKSHELF_INTRODUCTION})
      </S.TextLength>
      <S.SaveButton type="button" disabled={introduction === introductionValue} onClick={handlePatchIntroduction}>
        변경사항 저장하기
      </S.SaveButton>
    </S.IntroductionForm>
  );
};

export default IntroductionSection;

const S = {
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
  `,
  TextLength: styled.p`
    color: var(--gray500);
    font-family: 'Pretendard';
    font-size: 1.4rem;
    font-weight: 500;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  `,
  SaveButton,
};
