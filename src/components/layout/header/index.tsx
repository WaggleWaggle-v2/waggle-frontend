import styled from 'styled-components';
import Nav from './nav';
import { device } from '@styles/breakpoints';

const Header = () => {
  return (
    <S.Container>
      <S.MainLogo src="/src/assets/images/symbol-logo.png" alt="메인 로고" />
      <Nav />
    </S.Container>
  );
};
export default Header;

const S = {
  Container: styled.header`
    max-width: 102.4rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media ${device.tablet} {
    }
  `,
  MainLogo: styled.img`
    width: 16.2rem;
    object-fit: contain;
  `,
};
