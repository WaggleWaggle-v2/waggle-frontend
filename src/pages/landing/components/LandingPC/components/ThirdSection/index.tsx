import { MouseEvent } from 'react';
import { TBookshelfFetchRes } from '@api/bookshelf/bookshelfRequest.type';
import SkeletonBookshelfCard from '@pages/landing/components/BookshelfCard/components/SkeletonBookshelfCard';
import { QueryObserverResult } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import ThirdSectionLayout from './ThirdSectionLayout';
import BookshelfCard from '../../../BookshelfCard';

interface TThirdSection {
  randomCardData: TBookshelfFetchRes[] | undefined;
  refetch: () => Promise<QueryObserverResult<Error>>;
}

const ThirdSection = ({ randomCardData, refetch }: TThirdSection) => {
  const navigate = useNavigate();
  const redirectBookshelf = (event: MouseEvent<HTMLButtonElement>) => {
    navigate(`/bookshelf/${event.currentTarget.id}`);
  };

  if (!randomCardData) {
    return (
      <ThirdSectionLayout refetch={refetch}>
        <SkeletonBookshelfCard isKing={false} />
      </ThirdSectionLayout>
    );
  }

  return (
    <ThirdSectionLayout refetch={refetch}>
      {randomCardData.map(book => (
        <button
          type="button"
          id={String(book.id)}
          onClick={redirectBookshelf}
          style={{ cursor: 'pointer' }}
          key={book.id}>
          <BookshelfCard cardData={book} key={book.id} />
        </button>
      ))}
    </ThirdSectionLayout>
  );
};

export default ThirdSection;
