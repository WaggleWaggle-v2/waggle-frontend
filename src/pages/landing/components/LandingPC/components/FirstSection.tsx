import arrowIcon from '@assets/icons/right-top-arrow.svg';
import houseImg from '@assets/images/house.png';
import treeImg from '@assets/images/tree.png';
import ShelfDecoration from '@components/shelfDecoration/ShelfDecoration';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DescriptionSection from '../../DescriptionSection';
import LandingButton from '../../LandingButton';
import TitleSection from '../../TitleSection';
import { Main as BaseMain, ButtonContainer, Layout } from '../style/commonPC';

const FirstSection = () => {
  const navigate = useNavigate();
  return (
    <S.Main>
      <S.Layout>
        <TitleSection />
        <DescriptionSection />
        <S.ButtonContainer>
          <>
            <ShelfDecoration>ㅎ</ShelfDecoration>
            <ShelfDecoration>ㄱ</ShelfDecoration>
            <LandingButton
              buttonType={'green'}
              icon={arrowIcon}
              onClick={() => {
                navigate('/login');
              }}>
              와글와글2 <br /> 시작하겠소.
            </LandingButton>
            <ShelfDecoration>ㄴ</ShelfDecoration>
            <S.House src={houseImg} />
          </>
        </S.ButtonContainer>
      </S.Layout>
    </S.Main>
  );
};

export default FirstSection;

const S = {
  Main: styled(BaseMain)`
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
  House: styled.img`
    object-fit: contain;
    width: 10.8rem;
    margin-left: auto;
  `,
  Layout,
  ButtonContainer,
};
