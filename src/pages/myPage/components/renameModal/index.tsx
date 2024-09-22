import { useEffect } from 'react';
import PrimaryButton from '@components/PrimaryButton';
import PrimaryInput from '@components/PrimaryInput';
import ModalBaseTemplate from '@components/template/ModalBaseTemplate/ModalBaseTemplate';
import { ModalTitle } from '@components/template/ModalBaseTemplate/style/commonModalStyle';
import { useUserNicknameUpdateMutation } from '@hooks/reactQuery/useQueryUser';
import useChangeNickName from '@hooks/useChangeNickName';
import styled from 'styled-components';

interface TRenameModal {
  handleCloseModal: () => void;
  beforeNickName: string;
}

const RenameModal = (props: TRenameModal) => {
  const { handleCloseModal, beforeNickName } = props;
  const { value: nickNameValue, handleInputChange, handleSetNickName, isDisabled, errorMessage } = useChangeNickName();
  const reNameMutation = useUserNicknameUpdateMutation();

  useEffect(() => {
    if (beforeNickName) {
      handleSetNickName(beforeNickName);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRename = () => {
    reNameMutation.mutate(nickNameValue);
    handleCloseModal();
  };

  return (
    <ModalBaseTemplate handleCloseModal={handleCloseModal}>
      <S.Container>
        <div style={{ marginTop: '1.6rem' }}>
          <S.ModalTitle>이름을 바꾸겠소?</S.ModalTitle>
        </div>
        <PrimaryInput
          placeholder="새로운 이름을 입력해주세요."
          onChange={handleInputChange}
          invalidMsg={errorMessage}
          value={nickNameValue}
        />
        <div style={{ marginTop: '4rem' }}>
          <PrimaryButton onClick={handleRename} disabled={beforeNickName === nickNameValue || isDisabled}>
            변경하기
          </PrimaryButton>
        </div>
      </S.Container>
    </ModalBaseTemplate>
  );
};

export default RenameModal;

const S = {
  Container: styled.div`
    height: 50rem;
  `,
  ModalTitle,
};
