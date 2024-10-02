import { ReactNode } from 'react';
import usePageWidth from '@hooks/usePageWidth';
import { device, size } from '@styles/breakpoints';
import { zIndex } from '@styles/zIndex';
import styled, { css, keyframes } from 'styled-components';

interface TToastProps {
  children: ReactNode;
  show: boolean;
}

function Toast({ children, show }: TToastProps) {
  const pageWidth = usePageWidth();
  const sentences = typeof children === 'string' ? children.split('. ') : [children];

  return (
    <S.Container $show={show}>
      {pageWidth > size.tablet
        ? children
        : sentences.map((sentence, index) => (
            <div key={index}>
              {sentence}
              {index !== sentences.length - 1 && '.'}
            </div>
          ))}
    </S.Container>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);

    }
    to {
      opacity: 0.8;
      transform: translateY(0); 
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0.8;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-30px);
  }
`;

const S = {
  Container: styled.div<{ $show: boolean }>`
    font-family: 'Pretendard';
    display: ${({ $show }) => ($show ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    left: calc(50% - 50rem / 2);
    top: 70px;
    align-items: center;
    justify-content: center;
    background-color: var(--black);
    color: var(--white);
    opacity: 0.8;
    padding: 1.4rem 2.4rem;
    z-index: ${zIndex.toast};
    border-radius: 0.6rem;
    line-height: 150%;
    width: 50rem;
    font-size: 2rem;
    ${({ $show }) =>
      $show &&
      css`
        animation: ${css`
          ${fadeIn} 0.2s ease-in-out, ${fadeOut} 0.2s 2.8s ease-in-out forwards
        `};
      `}

    @media ${device.mobile} {
      font-size: 1.6rem;
      left: calc(50% - 90vw / 2);
      width: 90vw;
    }
  `,
};
export default Toast;
