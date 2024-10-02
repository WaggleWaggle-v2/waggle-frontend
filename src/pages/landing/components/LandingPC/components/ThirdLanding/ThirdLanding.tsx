import { MouseEvent } from 'react';
import { TBookshelfFetchRes } from '@api/bookshelf/bookshelfRequest.type';
import BookshelfCard from '@pages/landing/components/BookshelfCard';
import SkeletonBookshelfCard from '@pages/landing/components/BookshelfCard/components/SkeletonBookshelfCard';
import { QueryObserverResult } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import ThirdLandingLayout from './ThirdLandingLayout';

interface TThirdLanding {
  randomCardData: TBookshelfFetchRes[] | undefined;
  refetch: () => Promise<QueryObserverResult<Error>>;
}

const ThirdLanding = (props: TThirdLanding) => {
  const { randomCardData, refetch } = props;
  const navigate = useNavigate();
  const redirectBookshelf = (event: MouseEvent<HTMLButtonElement>) => {
    navigate(`/bookshelf/${event.currentTarget.id}`);
  };

  if (!randomCardData) {
    return (
      <ThirdLandingLayout refetch={refetch}>
        {[...Array(3)].map((_, index) => (
          <SkeletonBookshelfCard isKing={false} key={index} />
        ))}
      </ThirdLandingLayout>
    );
  }

  return (
    <ThirdLandingLayout refetch={refetch}>
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
    </ThirdLandingLayout>
  );
};

export default ThirdLanding;
