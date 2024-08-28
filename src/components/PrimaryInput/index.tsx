/* eslint-disable no-unused-vars */
import styled from 'styled-components';

interface TPrimaryInputProps {
  placeholder: string;
  onChange: (value: string) => void;
  invalidMsg: string;
}

const PrimaryInput = (props: TPrimaryInputProps) => {
  const { placeholder, onChange, invalidMsg } = props;

  const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    onChange(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };

  return (
    <S.Container>
      <S.Input $isInvalid={!!invalidMsg} placeholder={placeholder} onInput={onInput} onKeyDown={handleKeyDown} />
      {invalidMsg && <S.InvalidMsg>{invalidMsg}</S.InvalidMsg>}
    </S.Container>
  );
};

export default PrimaryInput;

const S = {
  Container: styled.div`
    position: relative;
  `,

  Input: styled.input<{ $isInvalid: boolean }>`
    border-bottom: ${({ $isInvalid }) => ($isInvalid ? 'var(--red400)' : 'var(--gray400)')} 1px solid;
    color: var(--gray800);
    width: 100%;
    font-size: 1.8rem;
    font-weight: 600;
    padding: 2.15rem 0.6rem;
    &:focus {
      border-bottom: ${({ $isInvalid }) => ($isInvalid ? 'var(--red400)' : 'var(--green600)')} 1px solid;
    }
    &::placeholder {
      color: var(--gray400);
      font-size: 1.4rem;
    }
  `,

  InvalidMsg: styled.p`
    position: absolute;
    bottom: -2.2rem;
    font-size: 1.4rem;
    color: var(--red400);
  `,
};
