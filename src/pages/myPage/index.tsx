import rewriteIcon from '@assets/icons/rewrite.svg';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import styled from 'styled-components';
import SettingListSection from './components/settingListSection';
import { useSettingType } from './hooks/useSettingType';

const MyPage = () => {
  const { settingType, handleSetType } = useSettingType();
  const mockData = {
    nickName: '홍길동동동동',
  };

  switch (settingType) {
    case 'default':
      <SettingListSection handleSetType={handleSetType} />;
      break;
    default:
      <SettingListSection handleSetType={handleSetType} />;
      break;
  }

  return (
    <S.PageContainer>
      <S.Container>
        <S.ProfileSection>
          <S.TitleText>
            <span style={{ color: 'var(--green600)' }}>{mockData.nickName}</span>님,
            <br />
            안녕하시오.
          </S.TitleText>
          <S.RenameButton type="button">
            <img src={rewriteIcon} alt={'닉네임 변경하기'} />
          </S.RenameButton>
        </S.ProfileSection>
        <S.SettingSection>
          <SettingListSection handleSetType={handleSetType} />
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
    width: 100%;

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
      gap: 2.7rem;
    }
  `,

  ProfileSection: styled.div<{ $isList?: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: ${({ $isList }) => ($isList ? 'space-between' : 'flex-start')};
    gap: 4rem;
    min-width: 46.5rem;
    position: relative;

    @media ${device.tablet} {
      width: 100%;
    }

    @media ${device.mobile} {
      min-width: 100%;
    }
  `,

  SettingSection: styled.div`
    width: 58.2rem;

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

    @media ${device.mobile} {
      font-size: 2.4rem;
    }
  `,
  // button
  RenameButton: styled.button`
    cursor: pointer;
    width: 3.1rem;
    height: 3.1rem;

    @media ${device.tablet} {
      position: absolute;
      right: 0;
      bottom: 0;
    }

    @media ${device.mobile} {
      width: 2.3rem;
      height: 2.3rem;
    }
  `,

  /** SettingSection*/
};
