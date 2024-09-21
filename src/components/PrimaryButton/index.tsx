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
    <S.Container disabled={disabled} onClick={onClick}>
      {children}
    </S.Container>
  );
};

export default PrimaryButton;

const S = {
  Container: styled.button`
    font-family: 'EBSHunminjeongeum';
    background-color: var(--button-active);
    cursor: pointer;
    color: white;
    text-align: center;
    width: 100%;
    line-height: 3rem;
    font-size: 2rem;
    padding: 1.4rem 0;
    border-radius: 0.6rem;

    &:hover {
      background-color: var(--green700);
    }

    &:active {
      background-color: var(--green800);
    }

    &:disabled {
      cursor: default;
      background-color: var(--green200);
    }

    @media ${device.mobile} {
      font-size: 1.6rem;
      padding: 1.2rem 0;
    }
  `,
};
