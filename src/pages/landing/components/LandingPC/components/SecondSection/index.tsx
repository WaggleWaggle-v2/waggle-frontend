import { TBookshelfFetchRes } from '@api/bookshelf/bookshelfRequest.type';
import SecondSectionLayout from './SecondSectionLayout';
import KingSejongCard from '../KingSejongCard/KingSejongCard';
import SkeletonKingSejongCard from '../KingSejongCard/SkeletonKingSejongCard';

interface TSecondSection {
  kingData: TBookshelfFetchRes | undefined;
}

const SecondSection = ({ kingData }: TSecondSection) => {
  if (!kingData) {
    return (
      <SecondSectionLayout>
        <SkeletonKingSejongCard />
      </SecondSectionLayout>
    );
  }

  return (
    <SecondSectionLayout>
      <KingSejongCard kingData={kingData} />
    </SecondSectionLayout>
  );
};

export default SecondSection;
