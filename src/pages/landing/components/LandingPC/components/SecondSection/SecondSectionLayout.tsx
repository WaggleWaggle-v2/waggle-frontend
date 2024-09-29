import { PropsWithChildren } from 'react';
import arrowIcon from '@assets/icons/right-top-arrow.svg';
import ShelfDecoration from '@components/shelfDecoration/ShelfDecoration';
import { KING } from '@constants/kingSejong';
import LandingButton from '@pages/landing/components/LandingButton';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer, Layout, Main } from '../../style/commonPC';

const SecondSectionLayout = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  return (
    <S.Main>
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
    </S.Main>
  );
};

export default SecondSectionLayout;

const S = {
  Main: styled(Main)``,
  Layout: styled(Layout)`
    grid-template-rows: 1fr;
    align-items: center;
  `,
  ButtonContainer,
};
