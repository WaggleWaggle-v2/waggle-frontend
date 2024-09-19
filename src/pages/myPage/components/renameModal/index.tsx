import { useEffect, useRef } from 'react';
import closeIcon from '@assets/icons/modal-close.svg';
import PrimaryButton from '@components/PrimaryButton';
import PrimaryInput from '@components/PrimaryInput';
import useInputValue from '@hooks/useInputText';
import useOutsideClick from '@hooks/useOutsideClick';
import { device } from '@styles/breakpoints';
import { zIndex } from '@styles/zIndex';
import styled from 'styled-components';

interface TRenameModal {
  handleCloseModal: () => void;
  beforeNickName: string | null;
}

const RenameModal = (props: TRenameModal) => {
  const { handleCloseModal, beforeNickName } = props;
  const { value: nickNameValue, handleSetValue } = useInputValue();
  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modalRef, handleCloseModal);

  useEffect(() => {
    if (beforeNickName) {
      handleSetValue(beforeNickName);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <S.ModalBox ref={modalRef}>
        <S.ModalCloseButton type="button" onClick={handleCloseModal}>
          <S.ModalClose src={closeIcon} alt="모달 닫기" />
        </S.ModalCloseButton>
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
      </S.ModalBox>
      <S.DimContainer />
    </>
  );
};

export default RenameModal;

const S = {
  DimContainer: styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    inset: 0;
    z-index: ${zIndex.modal};
  `,
  ModalBox: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: ${zIndex.modal + 1};
    background-color: var(--background);
    padding: 7rem 6.2rem 6rem;
    border-radius: 1rem;
    width: 48rem;

    @media ${device.mobile} {
      bottom: 0;
      left: 0;
      right: 0;
      transform: none;
      width: 100%;
      padding: 6rem 2rem 4rem;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  `,

  // Typography
  ModalTitle: styled.h1`
    color: var(--gray900);
    text-align: center;
    font-family: 'EBSHMJESaeron';
    font-size: 2.8rem;
    font-weight: 700;
  `,

  // icon
  ModalClose: styled.img``,

  // button
  ModalCloseButton: styled.button`
    cursor: pointer;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
  `,
};
