import RightArrowIcon from '@components/icons/RightArrowIcon';
import styled from 'styled-components';

const DeleteAccountButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <S.DeleteAccountContainer type="button" onClick={onClick}>
      <S.DeleteAccount>탈퇴하기</S.DeleteAccount>
      <RightArrowIcon width={12} height={12} color={'#9F9F9F'} />
    </S.DeleteAccountContainer>
  );
};

export default DeleteAccountButton;

const S = {
  DeleteAccountContainer: styled.button`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer;
    margin-left: auto;
  `,
  DeleteAccount: styled.p`
    color: var(--gray500);
    text-align: center;
    font-family: Pretendard;
    font-size: 1.4rem;
    font-weight: 600;
    text-decoration-line: underline;
  `,
};
