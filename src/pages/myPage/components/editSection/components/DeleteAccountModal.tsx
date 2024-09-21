import PrimaryButton from '@components/PrimaryButton';
import ModalBaseTemplate from '@components/template/ModalBaseTemplate/ModalBaseTemplate';
import { ModalSubTitle, ModalTitle } from '@components/template/ModalBaseTemplate/style/commonModalStyle';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

const DeleteAccountModal = ({ handleCloseModal }: { handleCloseModal: () => void }) => {
  return (
    <ModalBaseTemplate handleCloseModal={handleCloseModal}>
      <S.Container>
        <S.ModalTitle>정말 탈퇴하겠소?</S.ModalTitle>
        <S.ModalSubTitle>
          탈퇴시 방명록이 전부 삭제됩니다. <br />
          삭제된 방명록은 복구되지 않습니다.
        </S.ModalSubTitle>
      </S.Container>
      <S.ButtonContainer>
        <PrimaryButton onClick={handleCloseModal}>계정 유지하기</PrimaryButton>
        <S.DeleteButton type="button">탈퇴하기</S.DeleteButton>
      </S.ButtonContainer>
    </ModalBaseTemplate>
  );
};

export default DeleteAccountModal;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    margin-bottom: 4rem;
  `,
  ButtonContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  DeleteButton: styled.button`
    font-family: 'EBSHunminjeongeum';
    background-color: var(--gray400);
    cursor: pointer;
    color: white;
    text-align: center;
    width: 100%;
    line-height: 3rem;
    font-size: 2rem;
    padding: 1.4rem 0;
    border-radius: 0.6rem;

    @media ${device.mobile} {
      padding: 1.2rem 0;
      font-size: 1.6rem;
    }
  `,
  ModalTitle,
  ModalSubTitle,
};
