import { ButtonHTMLAttributes } from 'react';
import LeftArrowIcon from '@components/icons/LeftArrowIcon';
import usePageWidth from '@hooks/usePageWidth';
import { device, size } from '@styles/breakpoints';
import styled from 'styled-components';

interface TGoBackButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const GoBackButton = (props: TGoBackButton) => {
  const pageWidth = usePageWidth();
  const isPc = pageWidth > size.tablet;
  return (
    <S.GoBackButton type="button" {...props}>
      <LeftArrowIcon color={isPc ? '#9F9F9F' : '#fff'} width={isPc ? 30 : 20} /> <S.GoBackText>뒤로 가기</S.GoBackText>
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

    @media ${device.tablet} {
      position: fixed;
      z-index: 1;
      bottom: 2rem;
      left: 2rem;
      background-color: var(--green600);
      padding: 1rem;
      border-radius: 50%;
    }

    @media ${device.mobile} {
      font-size: 1.5rem;
    }
  `,
  GoBackText: styled.p`
    @media ${device.tablet} {
      display: none;
    }
  `,
};
