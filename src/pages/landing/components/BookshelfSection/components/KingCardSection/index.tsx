import { PropsWithChildren } from 'react';
import { BookShelfSection, BookShelfTitle, FigureContainer } from '../../style/commonStyle';

const KingCardSectionLayout = ({ children }: PropsWithChildren) => {
  return (
    <S.BookShelfSection className="thanks">
      <S.BookShelfTitle>
        세종대왕님께 <br />
        감사인사 전하오.
      </S.BookShelfTitle>
      <S.FigureContainer>{children}</S.FigureContainer>
    </S.BookShelfSection>
  );
};

export default KingCardSectionLayout;

const S = {
  BookShelfSection,
  BookShelfTitle,
  FigureContainer,
};
