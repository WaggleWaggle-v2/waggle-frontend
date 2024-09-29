import { device } from '@styles/breakpoints';
import { deleteCookie } from '@utils/cookie';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { NavItem } from '../style/navStyle';

const NavCategory = ({ isLogin, handleCloseMenu }: { isLogin: boolean; handleCloseMenu: () => void }) => {
  const navigate = useNavigate();
  return (
    <>
      <S.NavItem>
        <S.MenuBox>
          <S.MenuTitle
            as="button"
            type="button"
            disabled={isLogin ? false : true}
            onClick={() => {
              navigate('/myPage');
              handleCloseMenu();
            }}>
            마이페이지
          </S.MenuTitle>
          <S.MenuTitle as="button" type="button">
            유니어스
          </S.MenuTitle>
          <S.MenuTitle as="button" type="button">
            <Link to="https://forms.gle/B7YEc53PPeFGSJZb6" target="_blank">
              문의하기
            </Link>
          </S.MenuTitle>
        </S.MenuBox>
      </S.NavItem>
      {isLogin && (
        <S.NavItem>
          <S.MenuTitle
            style={{ color: '#BDBDBD' }}
            onClick={() => {
              deleteCookie('accessToken');
              navigate('/login');
            }}>
            로그아웃
          </S.MenuTitle>
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
    color: #455263;
    @media ${device.tablet} {
      color: var(--gray400);
    }
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
