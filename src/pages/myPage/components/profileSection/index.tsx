import { TUserFetchRes } from '@api/user/userRequest.type';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import RenameButton from './components/RenameButton';
import ProfileSectionLayout from './ProfileSectionLayout';

interface TProfileSection {
  handleOpenModal: () => void;
  userInfo: TUserFetchRes | undefined;
}

const ProfileSection = (props: TProfileSection) => {
  const { handleOpenModal, userInfo } = props;
  const userNickName = userInfo?.nickname ? userInfo.nickname : 'ㅇㅇㅇㅇㅇㅇ';

  return (
    <ProfileSectionLayout userId={userInfo?.id} isNotDefaultSetting={false} userNickName={userNickName}>
      <S.TitleText>안녕하시오.</S.TitleText>
      <RenameButton onClick={handleOpenModal} />
    </ProfileSectionLayout>
  );
};

export default ProfileSection;

const S = {
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
