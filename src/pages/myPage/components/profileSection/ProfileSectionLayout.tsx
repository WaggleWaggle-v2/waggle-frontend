import { ReactNode } from 'react';
import { device } from '@styles/breakpoints';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GoBackButton from './components/GoBackButton';
import GoBookshelfButton from './components/GoBookshelfButton';

interface TProfileSectionLayout {
  children: ReactNode;
  userNickName: string;
  isNotDefaultSetting: boolean;
  userId: string | undefined;
}

const ProfileSectionLayout = (props: TProfileSectionLayout) => {
  const { children, userNickName, isNotDefaultSetting, userId } = props;
  const navigate = useNavigate();

  return (
    <S.ProfileSection>
      <div>
        <S.TitleText>
          <span style={{ color: 'var(--green600)' }}>{userNickName}</span>님,
        </S.TitleText>
        {children}
      </div>
      {isNotDefaultSetting ? (
        <GoBackButton
          onClick={() => {
            navigate('/myPage');
          }}
        />
      ) : (
        <GoBookshelfButton
          onClick={() => {
            navigate(`/bookshelf/${userId}`);
          }}
        />
      )}
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
