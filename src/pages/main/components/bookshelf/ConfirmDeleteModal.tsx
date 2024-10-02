import { SetStateAction } from 'react';
import closeIcon from '@assets/icons/modal-close.svg';
import PrimaryButton from '@components/PrimaryButton';
import ModalTemplate from '@components/template/ModalTemplate';
import { useBookDeleteMutation } from '@hooks/reactQuery/useQueryBook';
import { device } from '@styles/breakpoints';
import styled, { useTheme } from 'styled-components';

interface TConfirmDeleteModalProps {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  bookId: number;
}

const ConfirmDeleteModal = ({ setIsOpen, bookId }: TConfirmDeleteModalProps) => {
  const theme = useTheme();
  const mutation = useBookDeleteMutation();

  const handleDeleteButtonClick = async () => {
    await mutation.mutateAsync(bookId);
    location.reload();
  };

  return (
    <ModalTemplate setIsOpen={setIsOpen} isInit>
      <S.Wrapper>
        <S.MainText>
          <p>정말 삭제하겠소?</p>
        </S.MainText>

        <S.SubText>
          <p>삭제된 방명록은 복구되지 않습니다.</p>
        </S.SubText>

        <S.ButtonWrapper>
          <PrimaryButton onClick={() => setIsOpen(false)}>방명록 유지하기</PrimaryButton>
          <PrimaryButton onClick={() => handleDeleteButtonClick()} color={theme.invalidBtn}>
            삭제하기
          </PrimaryButton>
        </S.ButtonWrapper>

        <S.CloseIcon src={closeIcon} onClick={() => setIsOpen(false)} alt="모달 닫기 아이콘" />
      </S.Wrapper>
    </ModalTemplate>
  );
};

export default ConfirmDeleteModal;

const S = {
  Wrapper: styled.div`
    padding: 5rem 4.8rem 3rem;
    @media ${device.tablet} {
      padding: 0;
    }
  `,

  MainText: styled.div`
    font-family: 'EBSHunminjeongeum';
    font-weight: 700;
    text-align: center;
    line-height: 150%;
    font-size: 2.8rem;
    margin-top: 1rem;
    margin-bottom: 3.6rem;
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.text};
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.6rem;
    color: ${({ theme }) => theme.subText};
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
