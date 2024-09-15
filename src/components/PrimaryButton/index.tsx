import { ReactNode } from 'react';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

interface TPrimaryButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  color?: string | undefined;
}

const PrimaryButton = ({ children, disabled, onClick, color }: TPrimaryButtonProps) => {
  return (
    <S.Container disabled={disabled} onClick={onClick} $backgroundColor={color}>
      {children}
    </S.Container>
  );
};

export default PrimaryButton;

const S = {
  Container: styled.button<{ $backgroundColor: string | undefined }>`
    font-family: 'EBSHunminjeongeum';
    background-color: ${({ $backgroundColor }) => $backgroundColor || 'var(--button-active)'};
    cursor: pointer;
    color: white;
    text-align: center;
    width: 100%;
    line-height: 3rem;
    font-size: 2rem;
    padding: 1.4rem 0;
    border-radius: 0.6rem;

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
