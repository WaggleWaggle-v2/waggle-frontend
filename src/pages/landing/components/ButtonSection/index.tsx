import restoreIcon from '@assets/icons/restore.svg';
import arrowIcon from '@assets/icons/right-top-arrow.svg';
import houseImg from '@assets/images/house.png';
import styled from 'styled-components';
import LandingButton from './components/LandingButton';
import ShelfDecoration from './components/ShelfDecoration';

const ButtonSection = ({ page }: { page: number }) => {
  return (
    <S.ButtonContainer>
      {page === 1 && (
        <>
          <ShelfDecoration>ㅎ</ShelfDecoration>
          <ShelfDecoration>ㄱ</ShelfDecoration>
          <LandingButton type={'green'} icon={arrowIcon}>
            와글와글2 <br /> 시작하겠소.
          </LandingButton>
          <ShelfDecoration>ㄴ</ShelfDecoration>
          <S.House src={houseImg} />
        </>
      )}
      {page === 2 && (
        <>
          <ShelfDecoration>ㅅ</ShelfDecoration>
          <ShelfDecoration>ㅈ</ShelfDecoration>
          <ShelfDecoration>ㄷ</ShelfDecoration>
          <ShelfDecoration>ㅇ</ShelfDecoration>
          <LandingButton type={'green'} icon={arrowIcon} fontSize="2.8rem">
            세종대왕님께 <br /> 감사인사 전하오.
          </LandingButton>
        </>
      )}
      {page === 3 && (
        <>
          <ShelfDecoration>ㅇ</ShelfDecoration>
          <ShelfDecoration>ㄱ</ShelfDecoration>
          <LandingButton type={'beige'} icon={restoreIcon} fontSize="2.8rem">
            다른 책장 <br /> 추천 받겠소
          </LandingButton>
          <ShelfDecoration>ㄱ</ShelfDecoration>
          <ShelfDecoration>ㅇ</ShelfDecoration>
        </>
      )}
    </S.ButtonContainer>
  );
};

export default ButtonSection;
const S = {
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

  //Element Style
  House: styled.img`
    object-fit: contain;
    width: 10.8rem;
    margin-left: auto;
  `,
};
