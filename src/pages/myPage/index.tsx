import { useEffect } from 'react';
import { useBookshelfQuery } from '@hooks/reactQuery/useQueryBookshelf';
import { useUserQuery } from '@hooks/reactQuery/useQueryUser';
import useToggle from '@hooks/useToggle';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { getCookie } from '@utils/cookie';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BookListSection from './components/bookListSection';
import EditSection from './components/editSection';
import ProfileSection from './components/profileSection';
import RenameModal from './components/renameModal';
import SettingListSection from './components/settingListSection';
import { useSettingType } from './hooks/useSettingType';
import { mockData } from './mockData';

const MyPage = () => {
  const { settingType, handleSetType, handleSetDefault } = useSettingType();
  const { data: userInfo } = useUserQuery();
  const { data: myBookShelf } = useBookshelfQuery(userInfo?.id);
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
      {isOpen && userInfo && (
        <RenameModal handleCloseModal={handleCloseModal} beforeNickName={userInfo.nickname ? userInfo.nickname : ''} />
      )}
      <S.PageContainer>
        <S.Container>
          {userInfo && (
            <ProfileSection
              handleOpenModal={handleOpenModal}
              handleSetDefault={handleSetDefault}
              userInfo={userInfo}
              settingType={settingType}
              kingData={mockData}
            />
          )}
          <S.SettingSection>
            {settingType === 'default' && <SettingListSection handleSetType={handleSetType} />}
            {settingType === 'receive' && <BookListSection bookList={mockData.list} settingType={'receive'} />}
            {settingType === 'present' && <BookListSection bookList={mockData.list} settingType={'present'} />}
            {settingType === 'edit' && myBookShelf && <EditSection bookshelfData={myBookShelf} />}
          </S.SettingSection>
        </S.Container>
      </S.PageContainer>
    </>
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
    padding: 0 2rem;

    @media ${device.tablet} {
      height: calc(100vh - ${HEADER_HEIGHT.MOBILE});
      position: relative;
      top: ${HEADER_HEIGHT.MOBILE};
    }

    @media ${device.mobile} {
    }
  `,
  Container: styled.div`
    max-width: 110rem;
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    padding: 0 1.6rem;
    width: 100%;

    @media ${device.tablet} {
      max-width: 59rem;
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
  SettingSection: styled.div`
    width: 58.2rem;

    @media ${device.tablet} {
      width: 100%;
    }
  `,
};
