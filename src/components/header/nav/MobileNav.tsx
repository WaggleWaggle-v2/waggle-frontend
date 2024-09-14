import kingHatImage from '@assets/images/king-hat.png';
import RightArrowIcon from '@components/icons/RightArrowIcon';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { zIndex } from '@styles/zIndex';
import styled from 'styled-components';
import NavCategory, { MenuTitle } from './components/NavCategory';
import UserInfo from './components/UserInfo';
import { TNavProps } from './NavType';
import { NavItem, TitleText } from './style/navStyle';

const MobileNav = ({ isLogin, nickName }: TNavProps) => {
  return (
    <S.Container>
      <UserInfo isLogin={isLogin} nickName={nickName} />
      <NavCategory isLogin={isLogin} />
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
  Container: styled.nav`
    position: fixed;
    height: calc(100dvh - ${HEADER_HEIGHT.MOBILE});
    bottom: 0;
    left: 0;
    background-color: var(--white);
    z-index: ${zIndex.navSection};
    padding: 3rem 2rem;

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
