import { TBookshelfFetchRes } from '@api/bookshelf/bookshelfRequest.type';
import arrowIcon from '@assets/icons/right-top-arrow.svg';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TotalCount from '../../BookshelfCard/components/TotalCount';
import LandingButton from '../../LandingButton';
import ShelfDecoration from '../../ShelfDecoration';
import { Main as BaseMain, Layout as BaseLayout, ButtonContainer } from '../style/commonPC';

interface TSecondSection {
  kingData: TBookshelfFetchRes;
}

const SecondSection = ({ kingData }: TSecondSection) => {
  const navigate = useNavigate();
  return (
    <S.Main>
      <S.Layout>
        <S.KingSeJongCard>
          <S.BookCountLayout>
            <TotalCount totalBookCount={kingData.count} size={'large'} />
          </S.BookCountLayout>
          <S.DescriptionText className="hover-card">{kingData.introduction}</S.DescriptionText>
          <S.CardHover className="hover-card" />
          <S.KinSeJongImg src={kingData.backgroundImageUrl} alt={kingData.nickname} />
        </S.KingSeJongCard>
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
                navigate(`bookshelf/${kingData.id}`);
              }}>
              세종대왕님께 <br /> 감사인사 전하오.
            </LandingButton>
          </>
        </S.ButtonContainer>
      </S.Layout>
    </S.Main>
  );
};

export default SecondSection;

const S = {
  Main: styled(BaseMain)``,
  Layout: styled(BaseLayout)`
    grid-template-rows: 1fr;
    padding-top: 10%;
    align-items: center;
  `,
  KingSeJongCard: styled.div`
    height: 50rem;
    border-radius: 0.6rem;
    overflow: hidden;
    position: relative;

    &:hover .hover-card {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  `,
  CardHover: styled.div`
    position: absolute;
    width: 46.4rem;
    height: 26rem;
    bottom: 0;
    z-index: 1;
    opacity: 0;
    background: linear-gradient(180deg, rgba(34, 34, 34, 0) 15.85%, rgba(34, 34, 34, 0.44) 37.17%, #222 100%);
    mix-blend-mode: multiply;
    transition: opacity 0.3s ease-in-out;
  `,
  KinSeJongImg: styled.img`
    width: 100%;
    height: 100%;
  `,
  DescriptionText: styled.p`
    color: var(--white);
    font-family: 'Pretendard';
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 150%;
    position: absolute;
    bottom: 4rem;
    left: 4rem;
    right: 4rem;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  `,
  BookCountLayout: styled.div`
    position: absolute;
    right: 2rem;
    top: 2rem;
  `,
  ButtonContainer,
};
