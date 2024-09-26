import doubleArrowIcon from '@assets/icons/double-under-arrow.svg';
import { useRandomBookshelfQuery } from '@hooks/reactQuery/useQueryBookshelf';
import { useUserQuery } from '@hooks/reactQuery/useQueryUser';
import usePageWidth from '@hooks/usePageWidth';
import { device, size } from '@styles/breakpoints';
import { getCookie } from '@utils/cookie';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BookshelfSection from './components/BookshelfSection';
import DescriptionSection from './components/DescriptionSection';
import LandingPC from './components/LandingPC';
import TitleSection from './components/TitleSection';
import { KingSejong } from './mockData';
import { Layout as BaseLayout, Main } from './style/landingCommon';
import { shakeAndBlink } from './style/shakeAndFlashAnimation';

const Landing = () => {
  const accessToken = getCookie('accessToken');
  const navigate = useNavigate();
  const pageWidth = usePageWidth();
  const isPc = pageWidth > size.tablet;
  const { data: randomCardData, refetch } = useRandomBookshelfQuery();
  const { data: userData } = useUserQuery();

  const handleClickLandingButton = () => {
    if (accessToken) {
      navigate(`/bookshelf/${userData?.id}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      {!isPc ? (
        <>
          <S.Main>
            <S.Layout>
              <TitleSection />
              <DescriptionSection />
              <S.StartButton type="button" onClick={handleClickLandingButton}>
                와글와글 시작하겠소
              </S.StartButton>
              <S.ArrowIcon src={doubleArrowIcon} alt="아래로 스크롤 해보세요" />
            </S.Layout>
          </S.Main>
          {randomCardData && (
            <BookshelfSection randomCardData={randomCardData} kingData={KingSejong} refetch={refetch} />
          )}
        </>
      ) : (
        randomCardData && <LandingPC randomCardData={randomCardData} kingData={KingSejong} refetch={refetch} />
      )}
    </>
  );
};

export default Landing;

const S = {
  // Layout
  Main,
  Layout: styled(BaseLayout)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    height: 100%;
  `,
  LandingSubContainer: styled.div`
    @media ${device.tablet} {
      max-width: 43rem;
      width: 100%;
    }
  `,
  //Element Style
  StartButton: styled.button`
    font-family: 'EBSHunminjeongeum';
    width: 100%;
    height: 5rem;
    border-radius: 0.6rem;
    background-color: var(--green600);
    color: #fff;
    text-align: center;
    cursor: pointer;
    flex-shrink: 0;

    @media ${device.tablet} {
      max-width: 43rem;
    }

    &:hover,
    &:active {
      background-color: var(--green700);
    }
  `,
  ArrowIcon: styled.img`
    width: 2rem;
    height: 2rem;
    animation: ${shakeAndBlink} 2s infinite;
  `,
};
