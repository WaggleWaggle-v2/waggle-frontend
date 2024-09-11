import restoreIcon from '@assets/icons/restore.svg';
import arrowIcon from '@assets/icons/right-top-arrow.svg';
import buttonFrame from '@assets/images/book-frame.png';
import houseImg from '@assets/images/house.png';
import styled from 'styled-components';
import LandingButton from './components/LandingButton';

const ButtonSection = ({ page }: { page: number }) => {
  return (
    <S.ButtonContainer>
      {page === 1 && (
        <>
          <S.ButtonFrame>
            <S.ConsonantText>ㅎ</S.ConsonantText>
          </S.ButtonFrame>
          <S.ButtonFrame>
            <S.ConsonantText>ㄱ</S.ConsonantText>
          </S.ButtonFrame>
          <LandingButton type={'green'} icon={arrowIcon}>
            와글와글2 <br /> 시작하겠소.
          </LandingButton>
          <S.ButtonFrame>
            <S.ConsonantText>ㄴ</S.ConsonantText>
          </S.ButtonFrame>
          <S.House src={houseImg} />
        </>
      )}
      {page === 2 && (
        <>
          <S.ButtonFrame>
            <S.ConsonantText>ㅎ</S.ConsonantText>
          </S.ButtonFrame>
          <S.ButtonFrame>
            <S.ConsonantText>ㅈ</S.ConsonantText>
          </S.ButtonFrame>
          <S.ButtonFrame>
            <S.ConsonantText>ㄷ</S.ConsonantText>
          </S.ButtonFrame>
          <S.ButtonFrame>
            <S.ConsonantText>ㅇ</S.ConsonantText>
          </S.ButtonFrame>
          <LandingButton type={'green'} icon={arrowIcon} fontSize="2.8rem">
            세종대왕님께 <br /> 감사인사 전하오.
          </LandingButton>
        </>
      )}
      {page === 3 && (
        <>
          <S.ButtonFrame>
            <S.ConsonantText>ㅇ</S.ConsonantText>
          </S.ButtonFrame>
          <S.ButtonFrame>
            <S.ConsonantText>ㄱ</S.ConsonantText>
          </S.ButtonFrame>
          <LandingButton type={'beige'} icon={restoreIcon} fontSize="2.8rem">
            다른 책장 <br /> 추천 받겠소
          </LandingButton>
          <S.ButtonFrame>
            <S.ConsonantText>ㄱ</S.ConsonantText>
          </S.ButtonFrame>
          <S.ButtonFrame>
            <S.ConsonantText>ㅇ</S.ConsonantText>
          </S.ButtonFrame>
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
  ButtonFrame: styled.div`
    width: 15rem;
    height: 15rem;
    background-image: url(${buttonFrame});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  ConsonantText: styled.p`
    font-size: 11rem;
    font-family: 'ChosunCentennial';
    color: #c0aa87;
  `,
  ButtonText: styled.button`
    font-family: 'EBSHunminjeongeum';
    font-size: 3.2rem;
    line-height: 130%;
    padding: 3.9rem 4.5rem;
    letter-spacing: -0rem;
  `,
  House: styled.img`
    object-fit: contain;
    width: 10.8rem;
    margin-left: auto;
  `,
};
