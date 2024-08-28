import { SOCIAL_LOGIN_INFO } from '@pages/Login/constants/socialLoginInfo';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

const SocialLoginButtonList = () => {
  return (
    <S.Container>
      <S.Title>
        간편 로그인으로 <strong>와글와글</strong>을 이용해 보세요!
      </S.Title>
      <S.LoginList>
        {SOCIAL_LOGIN_INFO.map(social => (
          <S.LoginItem key={social.name} $background={social.background}>
            <S.LogoImage src={social.logo} alt="소셜 로그인 아이콘" />
            <S.Name $color={social.color}>{social.name}</S.Name>
          </S.LoginItem>
        ))}
      </S.LoginList>
    </S.Container>
  );
};

export default SocialLoginButtonList;

const S = {
  Container: styled.div`
    width: 46.4rem;
    @media ${device.tablet} {
      width: 35.6rem;
    }
    @media ${device.mobile} {
      width: 100%;
      position: fixed;
      bottom: 0;
      padding: 3.2rem 2rem;
    }
  `,

  Title: styled.p`
    font-size: 2.4rem;
    text-align: center;
    margin-bottom: 1.6rem;
    font-family: 'Pretendard';
    color: var(--gray800);

    @media ${device.tablet} {
      font-size: 1.6rem;
      margin-bottom: 1.1rem;
    }
    @media ${device.mobile} {
      font-size: 4vw;
    }
  `,

  LoginList: styled.ul`
    font-family: 'EBSHunminjeongeum';
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,

  LoginItem: styled.li<{ $background: string }>`
    background-color: ${({ $background }) => $background};
    height: 6.4rem;
    position: relative;
    padding: 1.6rem 2rem;
    display: flex;
    border-radius: 0.6rem;
    cursor: pointer;
    @media ${device.tablet} {
      height: 5rem;
    }
  `,

  LogoImage: styled.img`
    position: absolute;
    width: 3.2rem;
    height: 3.2rem;
    top: calc(50% - 1.6rem);
    left: calc(2rem);
    @media ${device.tablet} {
      width: 2.4rem;
      height: 2.4rem;
      top: calc(50% - 1.2rem);
      left: calc(2rem);
    }
  `,

  Name: styled.span<{ $color: string }>`
    color: ${({ $color }) => $color};
    font-size: 2.4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    @media ${device.tablet} {
      font-size: 1.8rem;
    }
  `,
};
