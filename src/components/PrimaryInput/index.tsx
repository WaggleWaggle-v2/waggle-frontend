/* eslint-disable no-unused-vars */
import { FormEventHandler, useRef } from 'react';
import styled from 'styled-components';
import { adjustTextareaHeight } from './utils/adjustTextareaHeight';

interface TPrimaryInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  invalidMsg: string;
}

const PrimaryInput = (props: TPrimaryInputProps) => {
  const { placeholder, value, onChange, invalidMsg } = props;
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const onInput: FormEventHandler<HTMLTextAreaElement> = e => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const inputValue = (e.target as HTMLTextAreaElement).value;
    if (inputValue.match(/^\s+/)) {
      textarea.value = '';
      return;
    }
    onChange(inputValue);
    adjustTextareaHeight(textareaRef);
  };

  const onBlur = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const trimmedValue = textarea.value.trim();
    onChange(trimmedValue);
    adjustTextareaHeight(textareaRef);
  };

  return (
    <S.Container>
      <S.TextArea
        $isInvalid={!!invalidMsg}
        placeholder={placeholder}
        value={value}
        onInput={onInput}
        onBlur={onBlur}
        ref={textareaRef}
      />
      {invalidMsg && <S.InvalidMsg>{invalidMsg}</S.InvalidMsg>}
    </S.Container>
  );
};

export default PrimaryInput;

const S = {
  Container: styled.div`
    position: relative;
  `,

  TextArea: styled.textarea<{ $isInvalid: boolean }>`
    border-bottom: ${({ $isInvalid }) => ($isInvalid ? '#E75752' : '#bebebe')} 1px solid;

    color: #434343;
    background-color: transparent;
    width: 100%;
    display: block;
    outline: none;
    resize: none;
    overflow: hidden;
    font-size: 1.8rem;
    padding: 2.15rem 0.6rem;
    height: 6.4rem;
    line-height: 150%;

    &:focus {
      border-bottom: ${({ $isInvalid }) => ($isInvalid ? '#E75752 1px' : '#6c9460 2px')} solid;
    }

    &::placeholder {
      color: #bebebe;
      font-size: 1.4rem;
    }
  `,

  InvalidMsg: styled.p`
    position: absolute;
    bottom: -2.2rem;
    font-size: 1.4rem;
    color: #e75752;
  `,
};
