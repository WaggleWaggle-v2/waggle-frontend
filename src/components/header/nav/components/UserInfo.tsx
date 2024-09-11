import rightArrowIcon from '@assets/icons/right-arrow.svg';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { NavItem, TitleText } from '../style/navStyle';

interface TUserInfoProps {
  isLogin: boolean;
  nickName: string | undefined;
}

const UserInfo = ({ isLogin, nickName }: TUserInfoProps) => {
  const navigate = useNavigate();
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
          <S.TitleText $color={'#E75852'}>
            {nickName} <S.TitleText>님</S.TitleText>
          </S.TitleText>
        </S.NavItem>
      ) : (
        <S.NavItem>
          <S.NavTitleBox as="div">
            <S.NavTitleText onClick={() => navigate('/login')}>로그인하세요</S.NavTitleText>
            <img src={rightArrowIcon} alt="로그인 하기" />
          </S.NavTitleBox>
        </S.NavItem>
      )}
    </>
  );
};

export default UserInfo;

const S = {
  NavTitleBox: styled(TitleText)`
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
  `,
  NavItem,
  TitleText,
};
