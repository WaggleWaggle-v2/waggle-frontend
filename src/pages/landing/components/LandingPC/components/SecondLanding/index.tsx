import KingSejongCard from '@pages/landing/components/LandingPC/components/KingSejongCard/KingSejongCard';
import { KingSejong } from '@pages/landing/mockData';
import SecondLandingLayout from './SecondLandingLayout';
// import SecondSectionLayout from '@pages/landing/components/LandingPC/components/SecondSection/SecondSectionLayout';
// import SkeletonKingSejongCard from '@pages/landing/components/LandingPC/components/KingSejongCard/SkeletonKingSejongCard';

const SecondLanding = () => {
  // if (!kingData) {
  //   return (
  //     <SecondSectionLayout>
  //       <SkeletonKingSejongCard />
  //     </SecondSectionLayout>
  //   );
  // }

  return (
    <SecondLandingLayout>
      <KingSejongCard kingData={KingSejong} />
    </SecondLandingLayout>
  );
};

export default SecondLanding;
