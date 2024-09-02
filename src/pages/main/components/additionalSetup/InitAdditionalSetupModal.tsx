/* eslint-disable no-unused-vars */
import closeIcon from '@assets/icons/modal-close.svg';
import PrimaryButton from '@components/PrimaryButton';
import ModalTemplate from '@components/template/ModalTemplate';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

interface TInitAdditionalSetupModalProps {
  setDoSetup: (doSetup: boolean) => void;
  setIsOpen: (value: boolean) => void;
}

const InitAdditionalSetupModal = ({ setDoSetup, setIsOpen }: TInitAdditionalSetupModalProps) => {
  return (
    <ModalTemplate setIsOpen={setIsOpen} isInit>
      <S.MainText>
        <p>추가 꾸미기를&nbsp;</p>
        <p>진행하겠소?</p>
      </S.MainText>

      <S.ButtonWrapper>
        <S.PublicityResetText>마이페이지에서 재설정이 가능합니다.</S.PublicityResetText>
        <PrimaryButton onClick={() => setDoSetup(true)}>추가 꾸미기 하러 가기</PrimaryButton>
      </S.ButtonWrapper>

      <S.CloseIcon src={closeIcon} onClick={() => setIsOpen(false)} alt="모달 닫기 아이콘" />
    </ModalTemplate>
  );
};

export default InitAdditionalSetupModal;

const S = {
  MainText: styled.div`
    font-family: 'EBSHunminjeongeum';
    font-weight: 700;
    text-align: center;
    line-height: 150%;
    font-size: 2.8rem;
    margin-top: 1rem;
    margin-bottom: 3.6rem;
    background-color: var(--background);
    display: flex;
    justify-content: center;
    @media ${device.mobile} {
      margin-bottom: 3.8rem;
      flex-direction: column;
    }
  `,

  ButtonWrapper: styled.div`
    position: relative;
    @media ${device.mobile} {
      font-size: 1.6rem;
    }
  `,

  PublicityResetText: styled.p`
    font-family: 'Pretendard';
    bottom: 6.4rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    color: var(--gray600);
    width: 100%;
    text-align: center;
    @media ${device.mobile} {
      bottom: 5.2rem;
    }
  `,

  CloseIcon: styled.img`
    width: 2.9rem;
    height: 2.9rem;
    cursor: pointer;
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    @media ${device.mobile} {
    }
  `,
};
