import { useEffect } from 'react';
import leftArrowIcon from '@assets/icons/left-arrow-tail.svg';
import rewriteIcon from '@assets/icons/rewrite.svg';
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
                      총 <span style={{ color: 'var(--red500)', textDecoration: 'underline' }}>{mockData.count}</span>
                      개를
                      {settingType === 'receive' ? '받았소.' : '보냈소.'}
                    </S.SubText>
                  </>
                )}
                {(settingType === 'default' || settingType === 'edit') && (
                  <S.RenameButton type="button" onClick={handleOpenModal}>
                    <img src={rewriteIcon} alt={'닉네임 변경하기'} />
                  </S.RenameButton>
                )}
              </div>
            )}
            {settingType !== 'default' && (
              <S.GoBackButton type="button" onClick={handleSetDefault}>
                <S.GoBackIcon src={leftArrowIcon} alt="뒤로 가기" /> 뒤로 가기
              </S.GoBackButton>
            )}
          </S.ProfileSection>
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
  // button
  RenameButton: styled.button`
    cursor: pointer;
    width: 3.1rem;
    height: 3.1rem;
    margin-top: 2rem;

    @media ${device.tablet} {
      position: absolute;
      right: 0;
      bottom: 0;
    }

    @media ${device.mobile} {
      width: 2.3rem;
      height: 2.3rem;
      margin-bottom: 1rem;
    }
  `,

  GoBackButton: styled.button`
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: 1.1rem;
    cursor: pointer;

    color: var(--gray500);
    font-family: Pretendard;
    font-size: 2.4rem;
    font-weight: 700;
    @media ${device.mobile} {
      font-size: 1.5rem;
    }
  `,
  GoBackIcon: styled.img`
    width: 3rem;
    height: 3rem;

    @media ${device.mobile} {
      width: 1.5rem;
      height: 1.5rem;
    }
  `,

  /** SettingSection*/
};
