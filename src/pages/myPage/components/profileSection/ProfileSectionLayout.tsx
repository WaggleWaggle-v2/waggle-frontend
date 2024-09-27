import { ReactNode } from 'react';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import GoBackButton from './components/GoBackButton';

interface TProfileSectionLayout {
  children: ReactNode;
  userNickName: string;
  isNotDefaultSetting: boolean;
  handleSetDefault: () => void;
}

const ProfileSectionLayout = (props: TProfileSectionLayout) => {
  const { children, userNickName, isNotDefaultSetting, handleSetDefault } = props;
  return (
    <S.ProfileSection>
      <div>
        <S.TitleText>
          <span style={{ color: 'var(--green600)' }}>{userNickName}</span>님,
        </S.TitleText>
        {children}
      </div>
      {isNotDefaultSetting && <GoBackButton onClick={handleSetDefault} />}
    </S.ProfileSection>
  );
};

export default ProfileSectionLayout;

const S = {
  ProfileSection: styled.div<{ $isList?: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: ${({ $isList }) => ($isList ? 'space-between' : 'flex-start')};
    gap: 4rem;
    min-width: 40rem;
    position: relative;

    @media ${device.tablet} {
      width: 100%;
    }

    @media ${device.mobile} {
      min-width: 100%;
    }
  `,
  // text
  TitleText: styled.p`
    color: var(--gray900);
    font-family: 'EBSHunminjeongeum';
    font-size: 4.6rem;
    line-height: 6rem;
    font-weight: 700;

    @media ${device.mobile} {
      font-size: 2.4rem;
      line-height: 3.5rem;
    }
  `,
};
