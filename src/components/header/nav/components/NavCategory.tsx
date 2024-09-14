import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import { NavItem } from '../style/navStyle';

const NavCategory = ({ isLogin }: { isLogin: boolean }) => {
  return (
    <>
      <S.NavItem>
        <S.MenuBox>
          <S.MenuTitle as="button" type="button" disabled={isLogin ? false : true}>
            마이페이지
          </S.MenuTitle>
          <S.MenuTitle as="button" type="button">
            유니어스
          </S.MenuTitle>
          <S.MenuTitle as="button" type="button">
            문의하기
          </S.MenuTitle>
        </S.MenuBox>
      </S.NavItem>
      {isLogin && (
        <S.NavItem>
          <S.MenuTitle style={{ color: '#BDBDBD' }}>로그아웃</S.MenuTitle>
        </S.NavItem>
      )}
    </>
  );
};

export default NavCategory;

export const MenuTitle = styled.p<{ disabled?: boolean }>`
  color: #fff;
  font-family: 'Pretendard';
  font-size: 1.6rem;
  font-weight: 700;
  margin: 2rem 0;
  display: inline;

  ${({ disabled }) => !disabled && 'cursor: pointer'};

  @media ${device.tablet} {
    color: var(--black900);
  }

  &:disabled {
    color: var(--gray400);
  }
`;

const S = {
  MenuBox: styled.div`
    display: flex;
    flex-direction: column;
  `,
  MenuTitle,
  NavItem,
};
