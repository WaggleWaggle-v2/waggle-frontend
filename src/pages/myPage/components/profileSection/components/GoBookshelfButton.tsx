import { ButtonHTMLAttributes } from 'react';
import homeIcon from '@assets/icons/home.svg';
import LeftArrowIcon from '@components/icons/LeftArrowIcon';
import usePageWidth from '@hooks/usePageWidth';
import { device, size } from '@styles/breakpoints';
import styled from 'styled-components';

interface TGoBookshelfButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const GoBookshelfButton = (props: TGoBookshelfButton) => {
  const pageWidth = usePageWidth();
  const isPc = pageWidth > size.tablet;
  return (
    <S.GoBackButton type="button" {...props}>
      {isPc ? (
        <>
          <LeftArrowIcon color={'#9F9F9F'} width={30} /> <S.GoBackText>책장으로 가기</S.GoBackText>
        </>
      ) : (
        <S.HomeIcon src={homeIcon} alt={'내 책장으로 가기'} />
      )}
    </S.GoBackButton>
  );
};

export default GoBookshelfButton;

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
  HomeIcon: styled.img`
    width: 2rem;
    height: 2rem;
  `,
};
