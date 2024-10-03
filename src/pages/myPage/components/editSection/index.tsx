import { TBookshelfFetchRes } from '@api/bookshelf/bookshelfRequest.type';
import useToggle from '@hooks/useToggle';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import BookshelfImageSection from './components/BookshelfImageSection';
import BookshelfThemeSection from './components/BookshelfThemeSection';
import IntroductionSection from './components/IntroductionSection';
import OpenScopeSection from './components/OpenScopeSection';
import { Description, SaveButton, SettingOne, SettingTitle } from './style/commStyle';

interface TEditSection {
  bookshelfData: TBookshelfFetchRes | undefined;
}

const EditSection = ({ bookshelfData }: TEditSection) => {
  const { isTrue: isHover, handleSetTrue: handleSetHover, handleSetFalse: handleDisHover } = useToggle();

  return (
    <>
      <S.Container>
        <S.ImageIntroduction onMouseEnter={handleSetHover} onMouseLeave={handleDisHover}>
          <BookshelfImageSection backgroundImageUrl={bookshelfData?.backgroundImageUrl} isHover={isHover} />
          <IntroductionSection introduction={bookshelfData?.introduction} />
        </S.ImageIntroduction>
        <OpenScopeSection open={bookshelfData?.open} />
        <BookshelfThemeSection bookshelfType={bookshelfData?.bookshelfType} />
      </S.Container>
    </>
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
    position: relative;

    @media ${device.mobile} {
      flex-direction: column;
      height: auto;
    }
  `,

  SaveButton,
  SettingOne,
  Description,
  SettingTitle,
};
