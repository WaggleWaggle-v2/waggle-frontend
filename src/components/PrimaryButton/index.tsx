import { ReactNode } from 'react';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

interface TPrimaryButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const PrimaryButton = ({ children, disabled, onClick }: TPrimaryButtonProps) => {
  return (
    <S.Container $isDisabled={disabled as boolean} disabled={disabled} onClick={onClick}>
      {children}
    </S.Container>
  );
};

export default PrimaryButton;

const S = {
  Container: styled.button<{ $isDisabled: boolean }>`
    background-color: ${({ $isDisabled }) => ($isDisabled ? 'var(--green200)' : 'var(--button-active)')};
    cursor: ${({ $isDisabled }) => ($isDisabled ? 'normal' : 'pointer')};
    color: white;
    text-align: center;
    width: 100%;
    line-height: 3rem;
    font-size: 2rem;
    padding: 1.7rem 0;
    border-radius: 0.6rem;
    @media ${device.mobile} {
      font-size: 1.6rem;
      padding: 1.4rem 0;
    }
  `,
};
