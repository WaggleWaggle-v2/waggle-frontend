import { ReactNode } from 'react';
import styled from 'styled-components';

interface TLandingButton {
  icon: string;
  children: ReactNode;
  type: TType;
  fontSize?: string;
}

type TType = 'green' | 'beige';

const LandingButton = ({ icon, children, type, fontSize }: TLandingButton) => {
  return (
    <S.Wrapper $type={type}>
      <S.Button $type={type} className="button-box">
        <S.SubBox $type={type} $fontSize={fontSize} className="button-content">
          <S.ButtonIcon src={icon} />
          {children}
        </S.SubBox>
      </S.Button>
    </S.Wrapper>
  );
};

export default LandingButton;

const S = {
  Wrapper: styled.div<{ $type: TType }>`
    position: relative;
    width: 100%;
    aspect-ratio: 2 / 1;
    border: 0.1rem solid ${({ $type }) => ($type === 'green' ? 'var(--white)' : 'var(--green600)')};
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${({ $type }) => ($type === 'green' ? 'var(--white)' : 'var(--green600)')};
      transform: rotate(-31deg);
      transform-origin: bottom left;
      z-index: 0;
    }

    &:hover .button-content {
      background-color: ${({ $type }) => ($type === 'green' ? 'var(--green800)' : 'var(--green200)')};
      transition: background-color 0.2s ease-in-out;
    }

    &:hover .button-box {
      background-color: ${({ $type }) => ($type === 'green' ? 'var(--green800)' : 'var(--green200)')};
      transition: background-color 0.2s ease-in-out;
    }
  `,
  Button: styled.div<{ $type: TType }>`
    aspect-ratio: 2 / 1;
    background-color: ${({ $type }) => ($type === 'green' ? 'var(--green600)' : '#E8DFCF')};
    position: relative;
    transition: background-color 0.3s ease-in-out;
  `,

  SubBox: styled.div<{ $type: TType; $fontSize?: string }>`
    width: 27rem;
    height: 13rem;
    background-color: ${({ $type }) => ($type === 'green' ? 'var(--green600)' : '#E8DFCF')};
    border-bottom: 1px solid ${({ $type }) => ($type === 'green' ? 'var(--white)' : 'var(--green600)')};
    border-left: 0.1rem solid ${({ $type }) => ($type === 'green' ? 'var(--white)' : 'var(--green600)')};
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    padding: 1.5rem 1.8rem;
    color: ${({ $type }) => ($type === 'green' ? 'var(--white)' : 'var(--green600)')};
    font-family: 'EBSHMJESaeron';
    font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : '3.2rem')};
    line-height: 130%;
    transition: background-color 0.2s ease-in-out;
  `,
  ButtonIcon: styled.img`
    width: 2.2rem;
    height: 2.2rem;
    margin-left: auto;
  `,
};
