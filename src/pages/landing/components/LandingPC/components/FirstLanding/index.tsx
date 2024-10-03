import arrowIcon from '@assets/icons/right-top-arrow.svg';
import houseImg from '@assets/images/house.png';
import treeImg from '@assets/images/tree.png';
import ShelfDecoration from '@components/shelfDecoration/ShelfDecoration';
import { useUserQuery } from '@hooks/reactQuery/useQueryUser';
import DescriptionSection from '@pages/landing/components/DescriptionSection';
import LandingButton from '@pages/landing/components/LandingButton';
import TitleSection from '@pages/landing/components/TitleSection';
import { getCookie } from '@utils/cookie';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FirstLanding = () => {
  const accessToken = getCookie('accessToken');
  const { data: userData } = useUserQuery();
  const navigate = useNavigate();

  const handleClickLandingButton = () => {
    if (accessToken) {
      navigate(`/bookshelf/${userData?.id}`);
    } else {
      navigate('/login');
    }
  };
  return (
    <S.Container>
      <S.Layout>
        <TitleSection />
        <DescriptionSection />
        <S.ButtonContainer>
          <>
            <ShelfDecoration>ㅎ</ShelfDecoration>
            <ShelfDecoration>ㄱ</ShelfDecoration>
            <LandingButton buttonType={'green'} icon={arrowIcon} onClick={handleClickLandingButton}>
              와글와글2 <br /> 시작하겠소.
            </LandingButton>
            <ShelfDecoration>ㄴ</ShelfDecoration>
            <S.House src={houseImg} />
          </>
        </S.ButtonContainer>
      </S.Layout>
    </S.Container>
  );
};

export default FirstLanding;

const S = {
  Container: styled.div`
    width: 100dvw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: '';
      min-width: 14.5rem;
      min-height: 12.5rem;
      background-image: url(${treeImg});
      background-size: cover;
      position: absolute;
      bottom: 6.4rem;
      left: 0;
    }
  `,
  Layout: styled.div`
    max-width: 86rem;
    display: grid;
    grid-template-columns: 1fr 31rem;
    grid-column-gap: 11rem;
    max-height: 67rem;
  `,
  ButtonContainer: styled.div`
    max-width: 33.4rem;
    height: min-content;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 2;
    justify-content: space-between;
  `,
  House: styled.img`
    object-fit: contain;
    width: 10.8rem;
    margin: 0 auto;
  `,
};
