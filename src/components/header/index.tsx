import { useState } from 'react';
import alarmIcon from '@assets/icons/alarm.svg';
import KebabIcon from '@components/icons/KebabIcon';
import SymbolLogoIcon from '@components/icons/SymbolLogoIcon';
import { useUserQuery } from '@hooks/reactQuery/useQueryUser';
import usePageWidth from '@hooks/usePageWidth';
import { device, size } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { zIndex } from '@styles/zIndex';
import styled from 'styled-components';
import MobileNav from './nav/MobileNav';
import PcNav from './nav/PcNav';

const Header = () => {
  const pageWidth = usePageWidth();
  const isPc = pageWidth > size.tablet;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleNav = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const { data: userInfo } = useUserQuery();

  return (
    <>
      {!isPc && <MobileNav nickName={userInfo?.nickname} isOpen={isOpen} />}
      <S.Container>
        <button type="button" onClick={handleToggleNav}>
          <KebabIcon style={S.KebabIconStyle} color={'#44523F'} width={24} height={24} />
        </button>
        <SymbolLogoIcon width={isPc ? 162 : 110} color={!isPc ? '#44523f' : ''} />
        {pageWidth > size.tablet && <PcNav nickName={userInfo?.nickname} />}
        <S.AlarmIcon src={alarmIcon} alt={'알림'} />
      </S.Container>
    </>
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
    padding: 1.1rem 3.6rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    @media ${device.tablet} {
      background-color: rgba(246, 243, 238);
      backdrop-filter: blur(0.9rem);

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
  KebabIconStyle: `
    cursor : pointer;
    display : none;

    @media ${device.tablet}{
    display : block;
    }
  `,
};
