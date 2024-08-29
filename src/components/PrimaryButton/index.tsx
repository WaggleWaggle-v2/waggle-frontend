import { ReactNode, useEffect, useState } from 'react';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

interface TPrimaryButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const PrimaryButton = ({ children, disabled, onClick }: TPrimaryButtonProps) => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.visualViewport) {
        const visualViewport = window.visualViewport;
        const heightDiff = window.innerHeight - visualViewport.height;
        if (heightDiff > 100) {
          // 키보드가 올라온 것으로 판단하는 기준값 설정
          setIsKeyboardVisible(true);
          setBottomOffset(heightDiff); // 키보드 크기만큼 bottom offset 설정
        } else {
          setIsKeyboardVisible(false);
          setBottomOffset(0); // 키보드가 내려가면 offset 초기화
        }
      }
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize);
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <S.Container
      $isDisabled={disabled as boolean}
      disabled={disabled}
      onClick={onClick}
      $isKeyboardVisible={isKeyboardVisible}
      $bottomOffset={bottomOffset}>
      {children}
    </S.Container>
  );
};

export default PrimaryButton;

const S = {
  Container: styled.button<{ $isDisabled: boolean; $isKeyboardVisible: boolean; $bottomOffset: number }>`
    background-color: ${({ $isDisabled }) => ($isDisabled ? 'var(--green200)' : 'var(--button-active)')};
    cursor: ${({ $isDisabled }) => ($isDisabled ? 'normal' : 'pointer')};
    color: white;
    text-align: center;
    width: 100%;
    line-height: 3rem;
    font-size: 2rem;
    padding: 1.4rem 0;
    border-radius: 0.6rem;
    @media ${device.mobile} {
      font-size: 1.6rem;
      padding: 1.2rem 0;
    }
  `,
};
