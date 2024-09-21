import { TBookshelfFetchRes } from '@api/bookshelf/bookshelfRequest.type';
import RightArrowIcon from '@components/icons/RightArrowIcon';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import BookshelfImageSection from './components/BookshelfImageSection';
import BookshelfThemeSection from './components/BookshelfThemeSection/BookshelfThemeSection';
import IntroductionSection from './components/IntroductionSection';
import OpenScopeSection from './components/OpenScopeSection';
import { Description, SaveButton, SettingOne, SettingTitle } from './style/commStyle';

interface TEditSection {
  bookshelfData: TBookshelfFetchRes;
}

const EditSection = ({ bookshelfData }: TEditSection) => {
  const { introduction, backgroundImageUrl, nickname, open, bookshelfType } = bookshelfData;

  return (
    <S.Container>
      <S.ImageIntroduction>
        <BookshelfImageSection backgroundImageUrl={backgroundImageUrl} nickname={nickname} />
        <IntroductionSection introduction={introduction} />
      </S.ImageIntroduction>
      <OpenScopeSection open={open} />
      <BookshelfThemeSection bookshelfType={bookshelfType} />
      <S.DeleteAccountContainer>
        <S.DeleteAccount>탈퇴</S.DeleteAccount>
        <RightArrowIcon width={12} height={12} color={'#9F9F9F'} />
      </S.DeleteAccountContainer>
    </S.Container>
  );
};

export default EditSection;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    height: 100%;
    width: 100%;
  `,
  ImageIntroduction: styled.div`
    display: flex;
    align-items: center;
    height: 18rem;
    gap: 4rem;

    @media ${device.mobile} {
      flex-direction: column;
      height: auto;
    }
  `,
  // DeleteAcCount
  DeleteAccountContainer: styled.button`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer;
    margin-left: auto;
  `,
  DeleteAccount: styled.p`
    color: var(--gray500);
    text-align: center;
    font-family: Pretendard;
    font-size: 1.4rem;
    font-weight: 600;
    text-decoration-line: underline;
  `,
  SaveButton,
  SettingOne,
  Description,
  SettingTitle,
};
