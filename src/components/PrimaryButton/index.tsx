import { ReactNode, useState } from 'react';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

interface TPrimaryButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  color?: string | undefined;
}

const PrimaryButton = ({ children, disabled, onClick, color }: TPrimaryButtonProps) => {
  const [isTemporarilyDisabled, setIsTemporarilyDisabled] = useState(false);

  const handleClick = () => {
    if (disabled || isTemporarilyDisabled) return;

    if (onClick) {
      onClick();
    }

    setIsTemporarilyDisabled(true);
    setTimeout(() => {
      setIsTemporarilyDisabled(false);
    }, 700);
  };

  return (
    <S.Container disabled={disabled || isTemporarilyDisabled} onClick={handleClick} $backgroundColor={color}>
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

    &:hover {
      background-color: ${({ $backgroundColor, theme }) =>
        $backgroundColor ? theme.invalidBtnHover : 'var(--green700)'};
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
