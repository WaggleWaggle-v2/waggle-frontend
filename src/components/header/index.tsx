import styled from 'styled-components';
import Nav from './nav';
import { device } from '@styles/breakpoints';

const Header = () => {
  return (
    <S.Container>
      <S.MainLogo src="/src/assets/images/symbol-logo.png" alt="메인 로고" />
      <Nav isLogin={true} nickName={'홍길동동동동'} />
    </S.Container>
  );
};
export default Header;

const S = {
  Container: styled.header`
    width: 100%;
    max-width: 102.4rem;
    margin: 0 auto;
    grid-area: 'a';
    display: flex;
    justify-content: space-between;
    z-index: 20;

    @media ${device.tablet} {
    }
  `,

  MainLogo: styled.img`
    width: 16.2rem;
    object-fit: contain;
    margin-left: 1rem;
  `,
};
