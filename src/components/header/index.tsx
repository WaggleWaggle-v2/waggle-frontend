import { useRef, useState } from 'react';
import KebabIcon from '@components/icons/KebabIcon';
import SymbolLogoIcon from '@components/icons/SymbolLogoIcon';
import { useUserQuery } from '@hooks/reactQuery/useQueryUser';
import usePageWidth from '@hooks/usePageWidth';
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
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const handleToggleNav = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const handleCloseNav = () => {
    setIsOpen(false);
  };

  const { data: userInfo } = useUserQuery();

  return (
    <>
      {!isPc && (
        <MobileNav nickName={userInfo?.nickname} isOpen={isOpen} handleClose={handleCloseNav} headerRef={headerRef} />
      )}
      <S.Container ref={headerRef}>
        <button
          type="button"
          onClick={() => {
            navigate('/');
          }}
          style={{ cursor: 'pointer' }}>
          <SymbolLogoIcon width={isPc ? 162 : 110} color={!isPc ? '#44523f' : ''} />
        </button>
        <S.ButtonStyle type="button" onClick={handleToggleNav}>
          <KebabIcon style={S.KebabIconStyle} color={'#44523F'} width={24} height={24} />
        </S.ButtonStyle>

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
