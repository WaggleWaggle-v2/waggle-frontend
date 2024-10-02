import { ReactNode } from 'react';
import arrowIcon from '@assets/icons/right-top-arrow.svg';
import ShelfDecoration from '@components/shelfDecoration/ShelfDecoration';
import { KING } from '@constants/kingSejong';
import LandingButton from '@pages/landing/components/LandingButton';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface TSecondLanding {
  children: ReactNode;
}

const SecondLandingLayout = (props: TSecondLanding) => {
  const { children } = props;
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Layout>
        {children}
        <S.ButtonContainer>
          <>
            <ShelfDecoration>ㅅ</ShelfDecoration>
            <ShelfDecoration>ㅈ</ShelfDecoration>
            <ShelfDecoration>ㄷ</ShelfDecoration>
            <ShelfDecoration>ㅇ</ShelfDecoration>
            <LandingButton
              buttonType={'green'}
              icon={arrowIcon}
              fontSize="2.8rem"
              onClick={() => {
                navigate(`bookshelf/${KING.uuid}`);
              }}>
              세종대왕님께 <br /> 감사인사 전하오.
            </LandingButton>
          </>
        </S.ButtonContainer>
      </S.Layout>
    </S.Container>
  );
};

export default SecondLandingLayout;

const S = {
  Container: styled.div`
    width: 100dvw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Layout: styled.div`
    max-width: 86rem;
    max-height: 67rem;
    display: flex;
    gap: 8rem;
    align-items: center;
  `,
  ButtonContainer: styled.div`
    max-width: 31rem;
    height: min-content;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 2;
    justify-content: space-between;
  `,
};
