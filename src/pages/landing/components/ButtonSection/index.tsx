import buttonFrame from '@assets/icons/book-button-frame.svg';
import restoreIcon from '@assets/icons/restore.svg';
import arrowIcon from '@assets/icons/right-top-arrow.svg';
import houseImg from '@assets/images/house.png';
import styled from 'styled-components';
import LandingButton from './components/LandingButton';

const ButtonSection = ({ page }: { page: number }) => {
  return (
    <S.ButtonContainer>
      {page === 1 && (
        <>
          <S.ButtonFrame $buttonFrame={buttonFrame}>ㅎ</S.ButtonFrame>
          <S.ButtonFrame $buttonFrame={buttonFrame}> ㄱ</S.ButtonFrame>
          <LandingButton type={'green'} icon={arrowIcon}>
            와글와글2 <br /> 시작하겠소.
          </LandingButton>
          <S.ButtonFrame $buttonFrame={buttonFrame}>ㄴ</S.ButtonFrame>
          <S.House src={houseImg} />
        </>
      )}
      {page === 2 && (
        <>
          <S.ButtonFrame $buttonFrame={buttonFrame}>ㅅ</S.ButtonFrame>
          <S.ButtonFrame $buttonFrame={buttonFrame}>ㅈ</S.ButtonFrame>
          <S.ButtonFrame $buttonFrame={buttonFrame}>ㄷ</S.ButtonFrame>
          <S.ButtonFrame $buttonFrame={buttonFrame}>ㅇ</S.ButtonFrame>
          <LandingButton type={'green'} icon={arrowIcon} fontSize="2.8rem">
            세종대왕님께 <br /> 감사인사 전하오.
          </LandingButton>
        </>
      )}
      {page === 3 && (
        <>
          <S.ButtonFrame $buttonFrame={buttonFrame}>ㅇ</S.ButtonFrame>
          <S.ButtonFrame $buttonFrame={buttonFrame}>ㄱ</S.ButtonFrame>
          <LandingButton type={'beige'} icon={restoreIcon} fontSize="2.8rem">
            다른 책장 <br /> 추천 받겠소
          </LandingButton>
          <S.ButtonFrame $buttonFrame={buttonFrame}>ㄱ</S.ButtonFrame>
          <S.ButtonFrame $buttonFrame={buttonFrame}>ㅇ</S.ButtonFrame>
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
  ButtonFrame: styled.div<{ $buttonFrame: string }>`
    background-image: url(${({ $buttonFrame }) => $buttonFrame});
    background-repeat: no-repeat;
    background-size: cover;
    width: 15rem;
    height: 15rem;
    font-size: 11rem;
    font-family: 'ChosunCentennial';
    color: #c0aa87;
    display: flex;
    align-items: center;
    justify-content: center;
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
