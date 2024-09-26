import { TUserFetchRes } from '@api/user/userRequest.type';
import { TSetting } from '@pages/myPage/constant/settingList';
import { TMockData } from '@pages/myPage/mockData';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import GoBackButton from './components/GobackButton';
import RenameButton from './components/RenameButton';

interface TProfileSection {
  handleSetDefault: () => void;
  handleOpenModal: () => void;
  userInfo: TUserFetchRes;
  settingType: TSetting;
  kingData: TMockData;
}

const ProfileSection = (props: TProfileSection) => {
  const { handleSetDefault, handleOpenModal, userInfo, settingType, kingData } = props;
  return (
    <S.ProfileSection>
      {userInfo && (
        <div>
          <S.TitleText>
            <span style={{ color: 'var(--green600)' }}>{userInfo.nickname}</span>님,
          </S.TitleText>
          {settingType === 'default' || settingType === 'edit' ? (
            <S.TitleText>안녕하시오.</S.TitleText>
          ) : (
            <>
              <S.TitleText>
                책장을 이만큼 <br /> {settingType === 'receive' ? '받았다오.' : '보냈다오.'}
              </S.TitleText>
              <S.SubText>
                총 <span style={{ color: 'var(--red500)', textDecoration: 'underline' }}>{kingData.count}</span>
                개를
                {settingType === 'receive' ? '받았소.' : '보냈소.'}
              </S.SubText>
            </>
          )}
          {(settingType === 'default' || settingType === 'edit') && <RenameButton onClick={handleOpenModal} />}
        </div>
      )}
      {settingType !== 'default' && <GoBackButton onClick={handleSetDefault} />}
    </S.ProfileSection>
  );
};

export default ProfileSection;

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
};
