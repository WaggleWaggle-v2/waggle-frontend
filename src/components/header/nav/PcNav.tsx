import { useState } from 'react';
import closeIcon from '@assets/icons/cross-line.svg';
import kebabIcon from '@assets/icons/kebab.svg';
import styled from 'styled-components';
import { NavItem, TitleText } from './style/navStyle';
import UserInfo from './components/UserInfo';
import NavCategory from './components/NavCategory';
import { device } from '@styles/breakpoints';

const PcNav = ({ isLogin, nickName }: { isLogin: boolean; nickName?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuToggle() {
    setIsOpen(isOpen => !isOpen);
  }

  return (
    <S.Label $isOpen={isOpen} $isLogin={isLogin}>
      <S.LabelTop>
        {isOpen ? (
          <S.Container isLogin={isLogin}>
            <S.NavItem>
              <S.CloseIcon onClick={handleMenuToggle} src={closeIcon} alt="네비게이션 바 닫기" />
            </S.NavItem>
            <UserInfo isLogin={isLogin} nickName={nickName} />
            <NavCategory isLogin={isLogin} />
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
      $isOpen ? ($isLogin ? 'translateY(rem)' : 'translateY(-6rem)') : 'translateY(-35rem)'};
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

    &:before {
      content: '';
      position: absolute;
      bottom: calc(-4rem);
      border-width: 4rem 8rem 0 8rem;
      border-style: solid;
      border-color: #071b34 transparent transparent;
    }
  `,

  LabelBottom: styled.div`
    position: absolute;
    width: 16.2rem;
    background-color: #486080;
    height: 1rem;

    &:before {
      content: '';
      position: absolute;
      bottom: calc(-4rem);
      border-width: 4rem 8rem 0 8rem;
      border-style: solid;
      border-color: #486080 transparent transparent;
    }
  `,

  Container: styled.ul<{ isLogin?: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: #071b34;
    padding: 0 1.3rem;
    height: ${({ isLogin }) => (isLogin ? '42rem' : '39.6rem')};
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
