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
    <S.ButtonBox $type={type}>
      <S.ButtonTextBox $fontSize={fontSize} $type={type} className="text-box">
        <S.ButtonIcon src={icon} />
        {children}
      </S.ButtonTextBox>
    </S.ButtonBox>
  );
};

export default LandingButton;

const S = {
  ButtonBox: styled.button<{ $type: TType }>`
    display: grid;
    grid-template-columns: 4.2rem 1fr;
    grid-template-rows: 14rem 2.3rem;
    width: 100%;
    background-color: ${({ $type }) => ($type === 'green' ? 'var(--green600)' : '#e8dfcf')};
    cursor: pointer;
    border: 0.1rem solid ${({ $type }) => ($type === 'green' ? 'var(--white)' : 'var(--green600)')};
    transition: background-color 0.3s ease-in-out;

    &:hover .text-box {
      color: var(--white);
      border-color: var(--white);
    }

    &:hover {
      background-color: var(--green600);
      transition: background-color 0.3s ease-in-out;
      border-color: var(--white);
    }

    &::before {
      content: '';

      clip-path: polygon(0 0, 100% 0%, 100% 86%, 0% 100%);
      top: 0;
      left: 0;
      grid-row-start: 1;
      grid-row-end: 3;
      background-color: red;
    }

    &::after {
      content: '';
      margin-left: -4.2rem;
      clip-path: polygon(14% 0, 100% 0%, 100% 100%, 0 100%);
      top: 0;
      left: 0;
      grid-row-start: 2;
      grid-row-end: 3;
      background-color: blue;
    }
  `,
  ButtonTextBox: styled.div<{ $fontSize?: string; $type: TType }>`
    border: 0.1rem solid ${({ $type }) => ($type === 'green' ? 'var(--white)' : 'var(--green600)')};
    padding: 1.5rem 1.8rem;
    color: ${({ $type }) => ($type === 'green' ? 'var(--white)' : 'var(--green600)')};
    font-family: 'EBSHMJESaeron';
    font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : '3.2rem')};
    line-height: 130%;
  `,
  ButtonIcon: styled.img`
    width: 2.2rem;
    height: 2.2rem;
    margin-left: auto;
  `,
};
