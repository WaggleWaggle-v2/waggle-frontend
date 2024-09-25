import { FormEventHandler, useRef, useState } from 'react';
import { adjustTextareaHeight } from '@components/PrimaryTextarea/utils/adjustTextareaHeight';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

/* eslint-disable no-unused-vars */
interface TTextareaProps {
  placeholder: string;
  onChange: (value: string) => void;
  invalidMsg: string;
  maxLength: number;
}

const Textarea = (props: TTextareaProps) => {
  const { placeholder, onChange, invalidMsg, maxLength } = props;
  const [legnth, setLength] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const onInput: FormEventHandler<HTMLTextAreaElement> = e => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    let inputValue = (e.target as HTMLTextAreaElement).value;

    inputValue = inputValue.replace(/\s{2,}/g, ' ');

    if (inputValue.length > maxLength) {
      inputValue = inputValue.slice(0, maxLength);
    }

    if (inputValue.match(/^\s+/)) {
      textarea.value = '';
      return;
    }
    onChange(inputValue);
    // adjustTextareaHeight(textareaRef);
    setLength(inputValue.length);
  };

  const onBlur = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const trimmedValue = textarea.value.trim();
    onChange(trimmedValue);
    // adjustTextareaHeight(textareaRef);
  };

  const handleInputKeyDown = (e: { key: string; preventDefault: () => void }) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const inputValue = textarea.value;
    const cursorPosition = textarea.selectionStart;

    if (e.key === ' ' && inputValue[cursorPosition - 1] === ' ') {
      e.preventDefault();
    }

    if (inputValue.length >= maxLength && e.key !== 'Backspace' && e.key !== 'Delete') {
      e.preventDefault();
    }

    // if (e.key === 'Enter') {
    //   e.preventDefault();
    // }
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
        maxLength={maxLength}
      />
      {invalidMsg && <S.InvalidMsg>{invalidMsg}</S.InvalidMsg>}
      <S.LetterCount $isInvalid={!!invalidMsg}>
        ({legnth}/{maxLength})
      </S.LetterCount>
    </S.Container>
  );
};

export default Textarea;

const S = {
  Container: styled.div`
    font-family: 'Pretendard';
    position: relative;
    height: 40rem;
    background-color: var(--white);
    border-radius: 2rem;
    padding: 1.6rem 2rem;
    &::-webkit-scrollbar {
      display: none;
    }
  `,

  TextArea: styled.textarea<{ $isInvalid: boolean }>`
    color: var(--gray800);
    background-color: transparent;
    width: 100%;
    display: block;
    outline: none;
    resize: none;
    /* overflow-y: auto; */
    overflow: hidden;
    font-weight: 400;
    padding: 1rem;
    max-height: 40rem;
    height: 36rem;
    line-height: 150%;

    @media ${device.mobile} {
      font-size: 1.6rem;
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
