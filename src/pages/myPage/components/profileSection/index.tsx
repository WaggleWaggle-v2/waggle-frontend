import { TUserFetchRes } from '@api/user/userRequest.type';
import { TSetting } from '@pages/myPage/constant/settingList';
import { TMockData } from '@pages/myPage/mockData';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import RenameButton from './components/RenameButton';
import ProfileSectionLayout from './ProfileSectionLayout';

interface TProfileSection {
  handleSetDefault: () => void;
  handleOpenModal: () => void;
  userInfo: TUserFetchRes | undefined;
  settingType: TSetting;
  kingData: TMockData;
}

const ProfileSection = (props: TProfileSection) => {
  const { handleSetDefault, handleOpenModal, userInfo, settingType, kingData } = props;
  const userNickName = userInfo?.nickname ? userInfo.nickname : 'ㅇㅇㅇㅇㅇㅇ';

  switch (settingType) {
    case 'default': {
      return (
        <ProfileSectionLayout
          userId={userInfo?.id}
          isNotDefaultSetting={false}
          handleSetDefault={handleSetDefault}
          userNickName={userNickName}>
          <S.TitleText>안녕하시오.</S.TitleText>
          <RenameButton onClick={handleOpenModal} />
        </ProfileSectionLayout>
      );
    }
    case 'edit': {
      return (
        <ProfileSectionLayout
          userId={userInfo?.id}
          handleSetDefault={handleSetDefault}
          userNickName={userNickName}
          isNotDefaultSetting={true}>
          <S.TitleText>안녕하시오.</S.TitleText>
        </ProfileSectionLayout>
      );
    }
    case 'send': {
      return (
        <ProfileSectionLayout
          userId={userInfo?.id}
          handleSetDefault={handleSetDefault}
          userNickName={userNickName}
          isNotDefaultSetting={true}>
          <S.TitleText>
            책장을 이만큼 <br />
            보냈다오
          </S.TitleText>
          <S.SubText>
            총 <S.Count>{kingData.count}</S.Count>개를 보냈소.
          </S.SubText>
        </ProfileSectionLayout>
      );
    }
    case 'receive': {
      return (
        <ProfileSectionLayout
          userId={userInfo?.id}
          handleSetDefault={handleSetDefault}
          userNickName={userNickName}
          isNotDefaultSetting={true}>
          <S.TitleText>
            책장을 이만큼 <br />
            받았다오
          </S.TitleText>
          <S.SubText>
            총 <S.Count>{kingData.count}</S.Count>개를 받았소.
          </S.SubText>
        </ProfileSectionLayout>
      );
    }
  }
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
  SubText: styled.p`
    color: #000;
    font-family: 'EBSHunminjeongeum';
    font-size: 2.4rem;
    margin-top: 2rem;

    @media ${device.tablet} {
      margin-top: 2rem;
    }
    @media ${device.mobile} {
      margin-top: 1.4rem;
    }
  `,
  Count: styled.span`
    color: var(--red500);
    text-decoration: underline;
  `,
};
