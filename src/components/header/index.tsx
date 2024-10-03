import { useRef } from 'react';
import closeIcon from '@assets/icons/modal-close.svg';
import KebabIcon from '@components/icons/KebabIcon';
import SymbolLogoIcon from '@components/icons/SymbolLogoIcon';
import { useUserQuery } from '@hooks/reactQuery/useQueryUser';
import useAnimationClose from '@hooks/useAnimationClose';
import usePageWidth from '@hooks/usePageWidth';
import useToggle from '@hooks/useToggle';
import usePageStore from '@stores/useStore';
import { device, size } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { zIndex } from '@styles/zIndex';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MobileNav from './nav/MobileNav';
import PcNav from './nav/PcNav';

const Header = () => {
  const navigate = useNavigate();
  const pageWidth = usePageWidth();
  const isPc = pageWidth > size.tablet;
  const { isTrue: isOpen, handleSetTrue: handleOpenNav, handleSetFalse: handleCloseNav } = useToggle();
  const { handleAnimationEnd, handleClosing, isClose, handleOpenPortal } = useAnimationClose({
    handleDeletePortal: handleCloseNav,
    handleSetOpen: handleOpenNav,
  });
  const headerRef = useRef<HTMLElement | null>(null);
  const { data: userInfo } = useUserQuery();
  const setInitialPage = usePageStore(state => state.setInitialPage); // 전역 상태 랜딩 페이지 초기화

  return (
    <>
      {!isPc && isOpen && (
        <MobileNav
          nickName={userInfo?.nickname}
          isOpen={isOpen}
          closeAnimation={{ handleAnimationEnd, isClose, handleClosing }}
          headerRef={headerRef}
        />
      )}
      <S.Container ref={headerRef}>
        <button
          type="button"
          onClick={() => {
            navigate('/');
            setInitialPage();
          }}
          style={{ cursor: 'pointer' }}>
          <SymbolLogoIcon width={isPc ? 162 : 110} color={!isPc ? '#44523f' : ''} />
        </button>
        {isOpen ? (
          <S.ButtonStyle type="button" onClick={handleClosing}>
            <img src={closeIcon} alt="닫기" />
          </S.ButtonStyle>
        ) : (
          <S.ButtonStyle type="button" onClick={handleOpenPortal}>
            <KebabIcon style={S.KebabIconStyle} color={'#44523F'} width={24} height={24} />
          </S.ButtonStyle>
        )}
        {pageWidth > size.tablet && <PcNav nickName={userInfo?.nickname} />}
      </S.Container>
    </>
  );
};
export default Header;

const KebabIconStyle = `
cursor : pointer;
display : none;

@media ${device.tablet}{
display : block;
}
`;

const S = {
  Container: styled.header`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    z-index: ${zIndex.header};
    height: ${HEADER_HEIGHT.PC};
    padding: 1.1rem 3.6rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    @media ${device.tablet} {
      background-color: rgba(246, 243, 238, 0.3);
      backdrop-filter: blur(0.4rem);
      padding: 1.1rem 1.6rem;
      height: ${HEADER_HEIGHT.MOBILE};
      align-items: center;
    }
  `,
  AlarmIcon: styled.img`
    display: none;
    width: 2.4rem;
    aspect-ratio: 1 / 1;

    @media ${device.tablet} {
      display: block;
    }
  `,
  KebabIconStyle,
  ButtonStyle: styled.button`
    ${KebabIconStyle};
  `,
};
