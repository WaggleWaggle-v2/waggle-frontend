/* eslint-disable no-unused-vars */
import { FormEventHandler, useRef, useState } from 'react';
import { adjustTextareaHeight } from '@components/PrimaryTextarea/utils/adjustTextareaHeight';
import { MAX_LENGTH } from '@constants/maxLength';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

interface TPrimaryTextareaProps {
  placeholder: string;
  onChange: (value: string) => void;
  invalidMsg: string;
}

const PrimaryTextarea = (props: TPrimaryTextareaProps) => {
  const { placeholder, onChange, invalidMsg } = props;
  const [legnth, setLength] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const onInput: FormEventHandler<HTMLTextAreaElement> = e => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    let inputValue = (e.target as HTMLTextAreaElement).value;

    inputValue = inputValue.replace(/\s{2,}/g, ' ');

    if (inputValue.length > MAX_LENGTH) {
      inputValue = inputValue.slice(0, MAX_LENGTH); // Trim the value
    }

    if (inputValue.match(/^\s+/)) {
      textarea.value = '';
      return;
    }
    onChange(inputValue);
    adjustTextareaHeight(textareaRef);
    setLength(inputValue.length);
  };

  const onBlur = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const trimmedValue = textarea.value.trim();
    onChange(trimmedValue);
    adjustTextareaHeight(textareaRef);
  };

  const handleInputKeyDown = (e: { key: string; preventDefault: () => void }) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const inputValue = textarea.value;
    const cursorPosition = textarea.selectionStart;

    if (e.key === ' ' && inputValue[cursorPosition - 1] === ' ') {
      e.preventDefault();
    }

    if (inputValue.length >= MAX_LENGTH && e.key !== 'Backspace' && e.key !== 'Delete') {
      e.preventDefault();
    }

    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <S.Container>
      <S.TextArea
        onKeyDown={handleInputKeyDown}
        $isInvalid={!!invalidMsg}
        placeholder={placeholder}
        onInput={onInput}
        onBlur={onBlur}
        ref={textareaRef}
        maxLength={MAX_LENGTH}
      />
      {invalidMsg && <S.InvalidMsg>{invalidMsg}</S.InvalidMsg>}
      <S.LetterCount $isInvalid={!!invalidMsg}>({legnth}/100)</S.LetterCount>
    </S.Container>
  );
};

export default PrimaryTextarea;

const S = {
  Container: styled.div`
    font-family: 'Pretendard';
    position: relative;
  `,

  TextArea: styled.textarea<{ $isInvalid: boolean }>`
    border-bottom: ${({ $isInvalid }) => ($isInvalid ? 'var(--red400)' : 'var(--gray400)')} 0.1rem solid;
    color: var(--gray800);
    background-color: transparent;
    width: 100%;
    display: block;
    outline: none;
    resize: none;
    overflow: hidden;
    font-size: 2rem;
    font-weight: 400;
    padding: 1rem;
    height: 4.4rem;
    line-height: 150%;
    @media ${device.mobile} {
      font-size: 1.6rem;
    }
    &:focus {
      border-bottom: ${({ $isInvalid }) => ($isInvalid ? 'var(--red400) 0.1rem' : 'var(--green600) 0.2rem')} solid;
    }
    &::placeholder {
      color: var(--gray400);
      font-size: 1.6rem;
      font-weight: 100;
    }
  `,

  InvalidMsg: styled.p`
    position: absolute;
    bottom: -2.2rem;
    font-size: 1.4rem;
    color: var(--red400);
  `,
  LetterCount: styled.p<{ $isInvalid: boolean }>`
    position: absolute;
    bottom: -2.2rem;
    right: 0;
    font-size: 1.4rem;
    color: ${({ $isInvalid }) => ($isInvalid ? 'var(--red400)' : 'var(--button-active)')};
  `,
};
