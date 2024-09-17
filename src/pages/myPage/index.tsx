import rewriteIcon from '@assets/icons/rewrite.svg';
import RightArrowIcon from '@components/icons/RightArrowIcon';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import styled from 'styled-components';
import SETTING_LIST from './constant/settingList';

const MyPage = () => {
  const mockData = {
    nickName: '홍길동동동동',
  };

  return (
    <S.PageContainer>
      <S.Container>
        <S.ProfileSection>
          <S.TitleText>
            <span style={{ color: 'var(--green600)' }}>{mockData.nickName}</span>님,
            <br />
            안녕하시오.
          </S.TitleText>
          <button type="button">
            <img src={rewriteIcon} alt={'닉네임 변경하기'} />
          </button>
        </S.ProfileSection>
        <S.SettingSection>
          {SETTING_LIST.map((menu, index) => (
            <button type="button" style={{ cursor: 'pointer' }}>
              <S.SettingButton key={menu.title}>
                <S.SettingText $num={index + 1}>{menu.title}</S.SettingText>
                <RightArrowIcon color={'#222'} width={11} height={26} />
              </S.SettingButton>
            </button>
          ))}
        </S.SettingSection>
      </S.Container>
    </S.PageContainer>
  );
};

export default MyPage;

const S = {
  // layout
  PageContainer: styled.div`
    width: 100%;
    height: calc(100vh - ${HEADER_HEIGHT.PC});
    position: relative;
    top: ${HEADER_HEIGHT.PC};
    align-items: flex-start;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${device.tablet} {
      height: calc(100vh - ${HEADER_HEIGHT.MOBILE});
      position: relative;
      top: ${HEADER_HEIGHT.MOBILE};
    }
  `,
  Container: styled.div`
    max-width: 99rem;
    display: flex;
    justify-content: center;
    gap: 6.3rem;
    padding: 0 1.6rem;

    @media ${device.tablet} {
      max-width: 54.2rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4rem;
      width: 100%;
    }

    @media ${device.mobile} {
      max-width: 100%;
      width: 100%;
    }
  `,

  ProfileSection: styled.div<{ $isList?: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: ${({ $isList }) => ($isList ? 'space-between' : 'flex-start')};
    gap: 4rem;
    min-width: 46.5rem;

    @media ${device.tablet} {
      width: 100%;
    }
  `,

  SettingSection: styled.ul`
    width: 58.2rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    @media ${device.tablet} {
      width: 100%;
    }
  `,

  /**ProfileSection */
  // text
  TitleText: styled.p`
    color: var(--gray900);
    font-family: 'EBSHunminjeongeum';
    font-size: 4.6rem;
  `,

  /** SettingSection*/
  SettingButton: styled.li`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.7rem 1rem;
    width: 100%;

    &::after {
      content: '';
      min-width: 100%;
      min-height: 0.1rem;
      background-color: var(--gray300);
      position: absolute;
      bottom: 0;
    }
  `,
  // text
  SettingText: styled.p<{ $num: number }>`
    color: var(--gray900);
    font-family: 'EBSHunminjeongeum';
    font-size: 4.2rem;

    &::before {
      content: '0${({ $num }) => $num}. ';
      color: var(--gray900);
      font-size: 2.8rem;
    }
  `,
};
