import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const shelfDecoration = ({ children }: PropsWithChildren) => {
  return (
    <>
      <S.Wrapper>
        <S.Button>
          <S.ConsonantText>{children}</S.ConsonantText>
          <S.SubBox></S.SubBox>
        </S.Button>
      </S.Wrapper>
    </>
  );
};

export default shelfDecoration;

const S = {
  Wrapper: styled.div`
    position: relative;
    width: 15rem;
    aspect-ratio: 1 / 1;
    border: 0.1rem solid #d3c2a5;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 4.5rem;
      height: 1px;
      background-color: #d3c2a5;
      transform: rotate(-28deg);
      transform-origin: bottom left;
      z-index: 0;
    }
  `,
  Button: styled.div`
    aspect-ratio: 1 / 1;
    position: relative;
    transition: background-color 0.3s ease-in-out;
  `,
  SubBox: styled.div`
    width: 11rem;
    height: 12.8rem;
    border-left: 0.1rem solid #d3c2a5;
    border-bottom: 0.1rem solid #d3c2a5;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  `,
  ConsonantText: styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 11rem;
    font-family: 'ChosunCentennial';
    color: #c0aa87;
  `,
};
