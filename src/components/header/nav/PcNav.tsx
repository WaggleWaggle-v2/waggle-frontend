import { useRef } from 'react';
import closeIcon from '@assets/icons/cross-line.svg';
import kebabIcon from '@assets/icons/kebab.svg';
import navBottomImg from '@assets/images/nav-bottom.svg';
import useOutsideClick from '@hooks/useOutsideClick';
import useToggle from '@hooks/useToggle';
import styled from 'styled-components';
import NavCategory from './components/NavCategory';
import UserInfo from './components/UserInfo';
import { TNavProps } from './NavType';
import { NavItem, TitleText } from './style/navStyle';

const PcNav = ({ nickName }: TNavProps) => {
  const { isTrue: isOpen, handleToggle: handleMenuToggle, handleSetFalse: handleMenuClose } = useToggle();
  const navRef = useRef<HTMLDivElement>(null);
  useOutsideClick(navRef, handleMenuClose);

  return (
    <S.Label $isOpen={isOpen} $isLogin={!!nickName} ref={navRef}>
      <S.LabelTop>
        {isOpen ? (
          <S.Container $isLogin={!!nickName}>
            <S.NavItem>
              <S.CloseIcon onClick={handleMenuToggle} src={closeIcon} alt="네비게이션 바 닫기" />
            </S.NavItem>
            <UserInfo nickName={nickName} handleCloseMenu={handleMenuClose} />
            <NavCategory isLogin={!!nickName} handleCloseMenu={handleMenuClose} />
          </S.Container>
        ) : (
          <S.Container>
            <S.KebabIcon onClick={handleMenuToggle} src={kebabIcon} alt="메뉴 열기" />
          </S.Container>
        )}
      </S.LabelTop>
      <S.LabelBottom />
    </S.Label>
  );
};

export default PcNav;

const S = {
  Label: styled.div<{ $isOpen: boolean; $isLogin: boolean }>`
    position: relative;
    transform: ${({ $isOpen, $isLogin }) =>
      $isOpen ? ($isLogin ? 'translateY(-1.25rem)' : 'translateY(-7.5rem)') : 'translateY(-35rem)'};
    transition: transform 0.3s;
  `,
  LabelTop: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 16.2rem;
    z-index: 1;
    background-color: #071b34;
    min-height: 7rem;
  `,
  LabelBottom: styled.div`
    min-width: 16.2rem;
    height: 3.6rem;
    background-image: url(${navBottomImg});
    background-size: cover;
    position: relative;

    &::after {
      content: '';
      min-width: 16.2rem;
      min-height: 2rem;
      background-color: #071b34;
      position: absolute;
      z-index: -1;
      top: -1.5rem;
    }
  `,
  Container: styled.ul<{ $isLogin?: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: #071b34;
    padding: 0 1.3rem;
    height: ${({ $isLogin }) => ($isLogin ? '42rem' : '39.6rem')};
  `,
  KebabIcon: styled.img`
    width: 2.4rem;
    height: 1.8rem;
    margin-bottom: 1.2rem;
    cursor: pointer;
  `,
  CloseIcon: styled.img`
    width: 2.4rem;
    aspect-ratio: 1 / 1;
    margin: 0 auto;
    cursor: pointer;
  `,
  ArrowIcon: styled.img`
    width: 1.5rem;
    aspect-ratio: 1 /1;
  `,
  LoginButton: styled(NavItem)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `,
  OpenMenuBox: styled.div`
    display: flex;
    flex-direction: column;
  `,
  NavItem,
  TitleText,
};
