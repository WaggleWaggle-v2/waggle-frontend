import { useEffect } from 'react';
import RightArrowIcon from '@components/icons/RightArrowIcon';
import { useBookshelfQuery } from '@hooks/reactQuery/useQueryBookshelf';
import { useUserQuery } from '@hooks/reactQuery/useQueryUser';
import useToggle from '@hooks/useToggle';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { getCookie } from '@utils/cookie';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProfileSection from './components/profileSection';
import RenameModal from './components/renameModal';
import SETTING_LIST, { TSetting } from './constant/settingList';

const MyPage = () => {
  const { data: userInfo } = useUserQuery();
  const { isTrue: isOpen, handleSetTrue: handleOpenModal, handleSetFalse: handleCloseModal } = useToggle();
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = getCookie('accessToken');
    if (!accessToken) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      {isOpen && (
        <RenameModal handleCloseModal={handleCloseModal} beforeNickName={userInfo?.nickname ? userInfo.nickname : ''} />
      )}
      <S.PageContainer $settingType={'default'}>
        <S.Container $settingType={'default'}>
          <ProfileSection handleOpenModal={handleOpenModal} userInfo={userInfo} />
          <S.SettingSection>
            {SETTING_LIST.map((menu, index) => (
              <S.SettingButton
                key={menu.title}
                onClick={() => {
                  navigate(`/myPage/${menu.url}`);
                }}>
                <S.SettingText $num={index + 1}>{menu.title}</S.SettingText>
                <RightArrowIcon color={'#222'} width={11} height={26} />
              </S.SettingButton>
            ))}
          </S.SettingSection>
        </S.Container>
      </S.PageContainer>
    </>
  );
};

export default MyPage;

const S = {
  // layout
  PageContainer: styled.div<{ $settingType: TSetting }>`
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
      ${({ $settingType }) =>
        $settingType !== 'default' &&
        `
        align-items : flex-start;
      `}
    }

    @media ${device.mobile} {
    }
  `,
  Container: styled.div<{ $settingType: TSetting }>`
    max-width: 110rem;
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    padding: 0 2rem;
    width: 100%;

    @media ${device.tablet} {
      max-width: 59rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4rem;
      width: 100%;
      ${({ $settingType }) =>
        $settingType !== 'default' &&
        `
        align-items : flex-start;
        padding : 4rem 2rem;
      `}
    }

    @media ${device.mobile} {
      width: 100%;
      gap: 2.7rem;
    }
  `,
  SettingSection: styled.div`
    width: 58.2rem;
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
      width: 100%;
    }
  `,
  SettingButton: styled.button`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.7rem 1rem;
    width: 100%;
    cursor: pointer;

    &:not(&:last-child) {
      padding-bottom: 3.5rem;
    }

    &::after {
      content: '';
      min-width: 100%;
      min-height: 0.1rem;
      background-color: var(--gray300);
      position: absolute;
      bottom: 0;
    }

    &:active {
      background-color: var(--brown100);
    }
  `,
  SettingText: styled.p<{ $num: number }>`
    color: var(--gray900);
    font-family: 'EBSHunminjeongeum';
    font-size: 4.2rem;

    @media ${device.mobile} {
      font-size: 2.4rem;
    }

    &::before {
      content: '0${({ $num }) => $num}. ';
      color: var(--gray900);
      font-size: 2.8rem;

      @media ${device.mobile} {
        font-size: 1.8rem;
      }
    }
  `,
};
