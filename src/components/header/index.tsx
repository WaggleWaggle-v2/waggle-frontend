import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { zIndex } from '@styles/zIndex';
import styled from 'styled-components';
import Nav from './nav';
import SymbolLogo from '@components/icons/SymbolLogo';

const Header = () => {
  return (
    <S.Container>
      <SymbolLogo width={162} />
      <Nav isLogin={false} nickName={'홍길동동동동'} />
    </S.Container>
  );
};
export default Header;

const S = {
  Container: styled.header`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    z-index: ${zIndex.header};
    height: ${HEADER_HEIGHT.PC};
    padding: 0 3.6rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    @media ${device.tablet} {
      height: ${HEADER_HEIGHT.MOBILE};
      align-items: center;
    }
  `,
};
