import { RefObject, useRef } from 'react';
import kingHatImage from '@assets/images/king-hat.png';
import RightArrowIcon from '@components/icons/RightArrowIcon';
import { KING } from '@constants/kingSejong';
import { TCloseHandler } from '@hooks/useAnimationClose';
import useOutsideClick from '@hooks/useOutsideClick';
import { XSlideIn, XSlideOut } from '@styles/animation/slideAnimation';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { zIndex } from '@styles/zIndex';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavCategory, { MenuTitle } from './components/NavCategory';
import UserInfo from './components/UserInfo';
import { TNavProps } from './NavType';
import { NavItem, TitleText } from './style/navStyle';

interface TMobileNav extends TNavProps {
  isOpen: boolean;
  closeAnimation: TCloseHandler;
  headerRef: RefObject<HTMLElement>;
}

const MobileNav = (props: TMobileNav) => {
  const {
    nickName,
    closeAnimation: { handleAnimationEnd, handleClosing, isClose },
    headerRef,
  } = props;
  const navRef = useRef<HTMLElement | null>(null);
  useOutsideClick(navRef, handleClosing, headerRef);
  const navigate = useNavigate();

  return (
    <S.Container $isClose={isClose} ref={navRef} onAnimationEnd={handleAnimationEnd}>
      <UserInfo nickName={nickName} handleCloseMenu={handleClosing} />
      <NavCategory isLogin={nickName ? true : false} handleCloseMenu={handleClosing} />
      <S.KingContainer
        type="button"
        onClick={() => {
          navigate(`/bookshelf/${KING.uuid}`);
        }}>
        <S.KingImg src={kingHatImage} alt={'세종대왕 모자'} />
        <S.KingBody>
          <MenuTitle>
            세종대왕님께 <br /> 감사의 말 전하기
          </MenuTitle>
          <RightArrowIcon color={'#000'} />
        </S.KingBody>
      </S.KingContainer>
    </S.Container>
  );
};

export default MobileNav;

const S = {
  Container: styled.nav<{ $isClose: boolean }>`
    position: fixed;
    height: calc(100dvh - ${HEADER_HEIGHT.MOBILE});
    bottom: 0;
    right: 0;
    background-color: var(--white);
    z-index: ${zIndex.navSection};
    padding: 3rem 2rem;
    transition: transform 0.3s ease;
    animation: ${({ $isClose }) => ($isClose ? XSlideOut : XSlideIn)} 0.5s forwards;
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
      width: 25rem;
    }

    @media ${device.mobile} {
      width: 19rem;
    }
  `,
  KingContainer: styled.button`
    cursor: pointer;
    @media ${device.tablet} {
      width: 21rem;
      margin-top: auto;
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
  KingImg: styled.img`
    min-width: 2.9rem;
    min-height: 2.6rem;
  `,
};
