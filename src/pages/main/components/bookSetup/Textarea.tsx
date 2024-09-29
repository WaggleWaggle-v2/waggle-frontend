import { FormEventHandler, useRef, useState } from 'react';
import styled from 'styled-components';

/* eslint-disable no-unused-vars */
interface TTextareaProps {
  placeholder: string;
  onChange: (value: string) => void;
  maxLength: number;
}

const Textarea = (props: TTextareaProps) => {
  const { placeholder, onChange, maxLength } = props;
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
  };

  return (
    <S.Container>
      <S.TextArea
        onKeyDown={handleInputKeyDown}
        placeholder={placeholder}
        onInput={onInput}
        onBlur={onBlur}
        ref={textareaRef}
        maxLength={maxLength}
      />
      <S.LetterCount>
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
    background-color: ${props => props.theme.textAreaBg};
    border-radius: 2rem;
    padding: 1.6rem 2rem;
  `,

  TextArea: styled.textarea`
    color: ${props => props.theme.textAreaText};
    background-color: transparent;
    width: 100%;
    display: block;
    outline: none;
    resize: none;
    overflow-y: auto;
    font-weight: 400;
    padding: 1rem;
    max-height: 40rem;
    height: 36rem;
    line-height: 150%;
    font-size: 1.6rem;

    &::placeholder {
      color: var(--gray400);
      font-size: 1.6rem;
      font-weight: 100;
    }

    &::-webkit-scrollbar {
      width: 0.6rem;
    }
    &::-webkit-scrollbar-track {
      background-color: var(--gray200);
      border-radius: 0.2rem;
    }
    &::-webkit-scrollbar-thumb {
      cursor: pointer;
      border-radius: 0.2rem;
      background-color: var(--brown200);
    }
  `,

  LetterCount: styled.p`
    position: absolute;
    bottom: -2.2rem;
    right: 0;
    font-size: 1.4rem;
    color: var(--button-active);
  `,
};
