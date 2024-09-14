import RightArrowIcon from '@components/icons/RightArrowIcon';
import usePageWidth from '@hooks/usePageWidth';
import { device, size } from '@styles/breakpoints';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TNavProps } from '../NavType';
import { NavItem, TitleText as BaseTitleText } from '../style/navStyle';

const UserInfo = ({ isLogin, nickName }: TNavProps) => {
  const navigate = useNavigate();
  const pageWidth = usePageWidth();
  const isPC = pageWidth > size.tablet;
  return (
    <>
      {isLogin ? (
        <S.NavItem
          $position={`
                  display : flex;
                  flex-direction : column;
                  gap : 1rem;
                `}>
          <S.TitleText>안녕하신가~!</S.TitleText>
          <S.UserNickName>
            {nickName} <S.TitleText>님</S.TitleText>
          </S.UserNickName>
        </S.NavItem>
      ) : (
        <S.NavItem>
          <S.NavTitleBox as="div">
            <S.NavTitleText onClick={() => navigate('/login')}>로그인하세요</S.NavTitleText>
            <RightArrowIcon color={!isPC ? '#000' : '#fff'} />
          </S.NavTitleBox>
        </S.NavItem>
      )}
    </>
  );
};

export default UserInfo;

const S = {
  NavTitleBox: styled(BaseTitleText)`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `,
  NavTitleText: styled.p`
    color: var(--white);
    font-family: 'EBSHMJESaeron';
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: -0.3rem;

    @media ${device.tablet} {
      color: var(--black);
      font-size: 2.2rem;
    }
  `,
  NavItem,
  TitleText: styled(BaseTitleText)`
    @media ${device.tablet} {
      color: var(--black);
    }
  `,
  UserNickName: styled(BaseTitleText)`
    color: #e75852;

    @media ${device.tablet} {
      color: var(--green600);
    }
  `,
};
