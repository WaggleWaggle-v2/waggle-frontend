import { ButtonHTMLAttributes } from 'react';
import leftArrowIcon from '@assets/icons/left-arrow-tail.svg';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

interface TGoBackButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const GoBackButton = (props: TGoBackButton) => {
  return (
    <S.GoBackButton type="button" {...props}>
      <S.GoBackIcon src={leftArrowIcon} alt="뒤로 가기" /> 뒤로 가기
    </S.GoBackButton>
  );
};

export default GoBackButton;

const S = {
  GoBackButton: styled.button`
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: 1.1rem;
    cursor: pointer;

    color: var(--gray500);
    font-family: Pretendard;
    font-size: 2.4rem;
    font-weight: 700;
    @media ${device.mobile} {
      font-size: 1.5rem;
    }
  `,
  GoBackIcon: styled.img`
    width: 3rem;
    height: 3rem;

    @media ${device.mobile} {
      width: 1.5rem;
      height: 1.5rem;
    }
  `,
};
