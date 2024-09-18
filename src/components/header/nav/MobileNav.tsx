import { RefObject, useRef } from 'react';
import kingHatImage from '@assets/images/king-hat.png';
import RightArrowIcon from '@components/icons/RightArrowIcon';
import useOutsideClick from '@hooks/useOutsideClick';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { zIndex } from '@styles/zIndex';
import styled from 'styled-components';
import NavCategory, { MenuTitle } from './components/NavCategory';
import UserInfo from './components/UserInfo';
import { TNavProps } from './NavType';
import { NavItem, TitleText } from './style/navStyle';

interface TMobileNav extends TNavProps {
  isOpen: boolean;
  handleClose: () => void;
  headerRef: RefObject<HTMLElement>;
}

const MobileNav = ({ nickName, isOpen, handleClose, headerRef }: TMobileNav) => {
  const navRef = useRef<HTMLElement | null>(null);
  useOutsideClick(navRef, handleClose, headerRef);

  return (
    <S.Container $isOpen={isOpen} ref={navRef}>
      <UserInfo nickName={nickName} handleCloseMenu={handleClose} />
      <NavCategory isLogin={nickName ? true : false} handleCloseMenu={handleClose} />
      <S.KingContainer>
        <img src={kingHatImage} alt={'세종대왕 모자'} />
        <S.KingBody>
          <MenuTitle>
            새종대왕님께 <br /> 감사의 말 전하기
          </MenuTitle>
          <RightArrowIcon color={'#000'} />
        </S.KingBody>
      </S.KingContainer>
    </S.Container>
  );
};

export default MobileNav;

const S = {
  Container: styled.nav<{ $isOpen: boolean }>`
    position: fixed;
    height: calc(100dvh - ${HEADER_HEIGHT.MOBILE});
    bottom: 0;
    left: 0;
    background-color: var(--white);
    z-index: ${zIndex.navSection};
    padding: 3rem 2rem;
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0%)' : 'translateX(-100%)')};
    transition: transform 0.3s ease;

    @media ${device.tablet} {
      width: 25rem;
    }

    @media ${device.mobile} {
      width: 19rem;
    }
  `,
  KingContainer: styled.div`
    position: absolute;
    bottom: 11rem;
    cursor: pointer;
    @media ${device.tablet} {
      width: 21rem;
    }
    @media ${device.mobile} {
      width: 15rem;
    }
  `,
  KingBody: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  NavItem,
  TitleText,
  MenuTitle,
};
