import { useBookshelfQuery } from '@hooks/reactQuery/useQueryBookshelf';
import { useUserQuery } from '@hooks/reactQuery/useQueryUser';
import useToggle from '@hooks/useToggle';
import GoBackButton from '@pages/myPage/components/profileSection/components/GoBackButton';
import RenameButton from '@pages/myPage/components/profileSection/components/RenameButton';
import RenameModal from '@pages/myPage/components/renameModal';
import BookshelfThemeSection from '@pages/myPage/pages/editBookshelf/components/BookshelfThemeSection';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BookshelfImageSection from './components/BookshelfImageSection';
import IntroductionSection from './components/IntroductionSection';
import OpenScopeSection from './components/OpenScopeSection';

const EditBookshelf = () => {
  const navigate = useNavigate();
  const { isTrue: isHover, handleSetTrue: handleSetHover, handleSetFalse: handleDisHover } = useToggle();
  const {
    isTrue: isOpenRenameModal,
    handleSetTrue: hadnleOpenRenameModal,
    handleSetFalse: handleCloseRenameModal,
  } = useToggle();
  const { data: userInfo } = useUserQuery();
  const { data: myBookShelf } = useBookshelfQuery(userInfo?.id);

  return (
    <>
      {isOpenRenameModal && (
        <RenameModal
          handleCloseModal={handleCloseRenameModal}
          beforeNickName={userInfo?.nickname ? userInfo.nickname : ''}
        />
      )}
      <S.PageContainer>
        <S.Container>
          <S.ProfileContainer>
            <div>
              <S.TitleText>
                <S.NickNameText>{userInfo?.nickname}</S.NickNameText>님
              </S.TitleText>
              <S.TitleText>안녕하시오.</S.TitleText>
              <RenameButton onClick={hadnleOpenRenameModal} />
            </div>
            <GoBackButton
              onClick={() => {
                navigate('/myPage');
              }}
            />
          </S.ProfileContainer>
          <S.EditContainer>
            <S.ImageIntroduction>
              <BookshelfImageSection
                backgroundimageurl={myBookShelf?.backgroundImageUrl}
                ishover={isHover}
                onMouseEnter={handleSetHover}
                onMouseLeave={handleDisHover}
              />
              <IntroductionSection introduction={myBookShelf?.introduction} />
            </S.ImageIntroduction>
            <OpenScopeSection open={myBookShelf?.open} />
            <BookshelfThemeSection bookshelfType={myBookShelf?.bookshelfType} />
          </S.EditContainer>
        </S.Container>
      </S.PageContainer>
    </>
  );
};

export default EditBookshelf;

const S = {
  PageContainer: styled.div`
    width: 100dvw;
    height: calc(100dvh - ${HEADER_HEIGHT.PC});
    margin-top: ${HEADER_HEIGHT.PC};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${device.tablet} {
      height: calc(100dvh - ${HEADER_HEIGHT.MOBILE});
      margin-top: ${HEADER_HEIGHT.MOBILE};
      align-items: flex-start;
    }
  `,
  Container: styled.div`
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
      gap: 4rem;
      align-items: flex-start;
      padding: 4rem 2rem;
    }

    @media ${device.mobile} {
      width: 100%;
      gap: 2.7rem;
    }
  `,
  // ProfileSection
  ProfileContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
  NickNameText: styled.span`
    color: var(--green600);
  `,

  // Edit
  EditContainer: styled.div`
    max-width: 58.2rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    height: 100%;
    width: 100%;

    @media ${device.tablet} {
      max-width: 100%;
    }
  `,
  ImageIntroduction: styled.div`
    display: flex;
    align-items: center;
    height: 18rem;
    gap: 4rem;
    position: relative;
    margin-bottom: 2rem;

    @media ${device.mobile} {
      flex-direction: column;
      height: auto;
    }
  `,
};
