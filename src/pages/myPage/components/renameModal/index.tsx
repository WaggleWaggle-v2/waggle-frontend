import { useEffect } from 'react';
import PrimaryButton from '@components/PrimaryButton';
import PrimaryInput from '@components/PrimaryInput';
import ModalBaseTemplate from '@components/template/ModalBaseTemplate/ModalBaseTemplate';
import { ModalTitle } from '@components/template/ModalBaseTemplate/style/commonModalStyle';
import Portal from '@components/template/Portal';
import useInputValue from '@hooks/useInputText';

interface TRenameModal {
  handleCloseModal: () => void;
  beforeNickName: string | null;
}

const RenameModal = (props: TRenameModal) => {
  const { handleCloseModal, beforeNickName } = props;
  const { value: nickNameValue, handleSetValue } = useInputValue();

  useEffect(() => {
    if (beforeNickName) {
      handleSetValue(beforeNickName);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Portal>
      <ModalBaseTemplate handleCloseModal={handleCloseModal}>
        <div style={{ marginTop: '1.6rem' }}>
          <S.ModalTitle>이름을 바꾸겠소?</S.ModalTitle>
        </div>
        <PrimaryInput
          placeholder="새로운 이름을 입력해주세요."
          onChange={handleSetValue}
          invalidMsg=""
          value={nickNameValue}
        />
        <div style={{ marginTop: '4rem' }}>
          <PrimaryButton>변경하기</PrimaryButton>
        </div>
      </ModalBaseTemplate>
    </Portal>
  );
};

export default RenameModal;

const S = {
  ModalTitle,
};
