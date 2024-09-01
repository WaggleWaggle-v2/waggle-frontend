import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import styled from 'styled-components';
import AdditionalSetup from './components/AdditionalSetup';
import { PROFILE_IMAGES } from './constants/profile-images';

const Main = () => {
  const isNewUser = true;
  const userProfileUrl = PROFILE_IMAGES[0].url;
  const userName = '홍길동동동동';
  const userIntro =
    '아버지를 아버지라 부르지 못하고 형을 형이라 부르지 못하는데 호부호형을 허한들 무슨 소용이 있습니까! 아버지를 아버지라 부르지 못하고 형을 형이라 부르지 못하는데 호부호형을';

  return (
    <S.Container>
      {isNewUser && <AdditionalSetup />}
      <S.MainUserInfo>
        <img src={userProfileUrl} alt="유저 책장 배경 사진" />
        <S.MainIntro>1</S.MainIntro>
      </S.MainUserInfo>
    </S.Container>
  );
};

export default Main;

const S = {
  Container: styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left;
    position: relative;
    height: calc(100vh);
    @media ${device.tablet} {
      /* padding-top: ${HEADER_HEIGHT.MOBILE}; */
    }
  `,

  MainUserInfo: styled.div`
  `,

  MainIntro: styled.div`
  `,
};
