import { useEffect, useState } from 'react';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { zIndex } from '@styles/zIndex';
import styled from 'styled-components';
import Nav from './nav';
import MainLogo from '@/assets/images/symbol-logo.png';

const Header = () => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

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
      <S.NavWrapper>
        <S.MainLogo src={MainLogo} alt="메인 로고" />
        <Nav isLogin={true} nickName={'홍길동동동동'} />
      </S.NavWrapper>
    </S.Container>
  );
};
export default Header;

const S = {
  Container: styled.header`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    z-index: ${zIndex.header};
    height: ${HEADER_HEIGHT.PC};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    @media ${device.tablet} {
      height: ${HEADER_HEIGHT.MOBILE};
      align-items: center;
    }
  `,

  NavWrapper: styled.div`
    width: 100%;
    height: 100%;
    margin: 0 3.6rem;
    display: flex;
    justify-content: space-between;
    z-index: ${zIndex.header};
    @media ${device.tablet} {
      align-items: center;
    }
  `,

  MainLogo: styled.img`
    width: 16.2rem;
    object-fit: contain;

    @media ${device.tablet} {
    }
  `,
};
