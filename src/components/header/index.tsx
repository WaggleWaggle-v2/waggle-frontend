import { useEffect, useState } from 'react';
import goBackIcon from '@assets/icons/left-arrow.svg';
import { device, size } from '@styles/breakpoints';
import { zIndex } from '@styles/zIndex';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './nav';
import CloseIcon from '@components/icons/CloseIcon';
import MainLogo from '@/assets/images/symbol-logo.png';

const Header = () => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const newPageWidth = window.innerWidth;
      if (newPageWidth !== pageWidth) setPageWidth(newPageWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <S.Container>
      {(pathname === '/setup' || pathname === '/') && pageWidth <= size.tablet ? (
        <>
          <S.GoBackIcon src={goBackIcon} alt="뒤로 가기" />
          <CloseIcon width={19} height={19} color={'#626262'} />
        </>
      ) : (
        <>
          <S.MainLogo src={MainLogo} alt="메인 로고" />
          <Nav isLogin={true} nickName={'홍길동동동동'} />
        </>
      )}
    </S.Container>
  );
};
export default Header;

const S = {
  Container: styled.header`
    width: 100%;
    grid-area: 'a';
    display: flex;
    justify-content: space-between;
    padding: 0 3.5rem;
    z-index: ${zIndex.header};
    background-color: var(--background);

    @media ${device.tablet} {
      align-items: center;
      padding: 0 3rem;
    }
  `,

  MainLogo: styled.img`
    width: 16.2rem;
    object-fit: contain;

    @media ${device.tablet} {
    }
  `,

  GoBackIcon: styled.img`
    width: 1rem;
    height: 2rem;
    cursor: pointer;
  `,
};
