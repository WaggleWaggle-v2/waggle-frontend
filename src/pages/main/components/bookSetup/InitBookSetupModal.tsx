/* eslint-disable no-unused-vars */
import { SetStateAction } from 'react';
import closeIcon from '@assets/icons/modal-close.svg';
import PrimaryButton from '@components/PrimaryButton';
import ModalTemplate from '@components/template/ModalTemplate';
import { device } from '@styles/breakpoints';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface TInitBookSetupModalProps {
  setDoSetup: React.Dispatch<SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

const InitBookSetupModal = ({ setDoSetup, setIsOpen }: TInitBookSetupModalProps) => {
  const navigate = useNavigate();
  return (
    <ModalTemplate setIsOpen={setIsOpen} isInit>
      <S.Wrapper>
        <S.MainText>
          <p>방명록을 작성하겠소?&nbsp;</p>
        </S.MainText>

        <S.SubText>
          <p>회원가입을 하지 않으면&nbsp;</p>
          <p>작성한 방명록을 다시 확인하기 여럽다네</p>
        </S.SubText>

        <S.ButtonWrapper>
          <PrimaryButton onClick={() => navigate('/login')}>로그인 / 회원가입하기</PrimaryButton>
          <PrimaryButton onClick={() => setDoSetup(true)} color="var(--gray400)">
            비회원으로 방명록 남기기
          </PrimaryButton>
        </S.ButtonWrapper>

        <S.CloseIcon src={closeIcon} onClick={() => setIsOpen(false)} alt="모달 닫기 아이콘" />
      </S.Wrapper>
    </ModalTemplate>
  );
};

export default InitBookSetupModal;

const S = {
  Wrapper: styled.div`
    padding: 5rem 4.8rem 3rem;
  `,
  
  MainText: styled.div`
    font-family: 'EBSHunminjeongeum';
    font-weight: 700;
    text-align: center;
    line-height: 150%;
    font-size: 2.8rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    @media ${device.mobile} {
      margin-bottom: 3.8rem;
      flex-direction: column;
    }
  `,

  SubText: styled.div`
    font-family: 'Pretendard';
    text-align: center;
    font-size: 1.6rem;
    margin-top: 1rem;
    margin-bottom: 4rem;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.6rem;
    color: var(--gray800);
    @media ${device.mobile} {
      margin-bottom: 3.8rem;
      flex-direction: column;
    }
  `,

  ButtonWrapper: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media ${device.mobile} {
      font-size: 1.6rem;
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
