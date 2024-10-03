import { KING } from '@constants/kingSejong';
import { useBookshelfQuery } from '@hooks/reactQuery/useQueryBookshelf';
import KingSejongCard from '@pages/landing/components/LandingPC/components/KingSejongCard/KingSejongCard';
import SecondLandingLayout from './SecondLandingLayout';
import SkeletonKingSejongCard from '../KingSejongCard/SkeletonKingSejongCard';

const SecondLanding = () => {
  const { data: KingSejong } = useBookshelfQuery(KING.uuid);

  if (!KingSejong) {
    return (
      <SecondLandingLayout>
        <SkeletonKingSejongCard />
      </SecondLandingLayout>
    );
  }

  return (
    <SecondLandingLayout>
      <KingSejongCard kingData={KingSejong} />
    </SecondLandingLayout>
  );
};

export default SecondLanding;
