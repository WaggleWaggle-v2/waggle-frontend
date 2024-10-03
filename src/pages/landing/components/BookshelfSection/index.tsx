import { TBookshelfFetchRes } from '@api/bookshelf/bookshelfRequest.type';
import { KING } from '@constants/kingSejong';
import { useBookshelfQuery } from '@hooks/reactQuery/useQueryBookshelf';
import { QueryObserverResult } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BookshelfSectionLayout from './BookshelfSectionLayout';
import BookshelfCard from '../BookshelfCard';
import KingCardSectionLayout from './components/KingCardSection';
import RandomCardSectionLayout from './components/RandomCardSection';
import SkeletonBookshelfCard from '../BookshelfCard/components/SkeletonBookshelfCard';

interface TBookShelf {
  randomCardData: TBookshelfFetchRes[] | undefined;
  refetch: () => Promise<QueryObserverResult<Error>>;
}

const BookshelfSection = ({ randomCardData, refetch }: TBookShelf) => {
  const navigate = useNavigate();
  const skeletonArray = new Array(3).fill({});
  const { data: kingData } = useBookshelfQuery(KING.uuid);

  if (!kingData || !randomCardData) {
    return (
      <BookshelfSectionLayout>
        <KingCardSectionLayout>
          <SkeletonBookshelfCard isKing={true} />
        </KingCardSectionLayout>
        <RandomCardSectionLayout refetch={refetch}>
          {skeletonArray.map((_, i) => (
            <SkeletonBookshelfCard key={i} isKing={false} />
          ))}
        </RandomCardSectionLayout>
      </BookshelfSectionLayout>
    );
  }

  return (
    <BookshelfSectionLayout>
      <KingCardSectionLayout>
        <S.CardButton
          onClick={() => {
            navigate(`/bookshelf/${kingData.id}`);
          }}>
          <BookshelfCard cardData={kingData} isKing={true} />
        </S.CardButton>
      </KingCardSectionLayout>
      <RandomCardSectionLayout refetch={refetch}>
        {randomCardData.map(book => (
          <S.CardButton
            key={book.id}
            onClick={() => {
              navigate(`/bookshelf/${book.id}`);
            }}>
            <BookshelfCard cardData={book} />
          </S.CardButton>
        ))}
      </RandomCardSectionLayout>
    </BookshelfSectionLayout>
  );
};

export default BookshelfSection;

const S = {
  CardButton: styled.button`
    cursor: pointer;
  `,
};
