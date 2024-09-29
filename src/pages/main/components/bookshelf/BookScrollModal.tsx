import React, { SetStateAction, useState } from 'react';
import { TBookItem } from '@api/book/bookRequest.type';
import closeIcon from '@assets/icons/modal-close-white.svg';
import { device } from '@styles/breakpoints';
import { zIndex } from '@styles/zIndex';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import BookScollPaper from './BookScollPaper';

interface TBookScrollModalProps {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  data: TBookItem;
  ownerName: string;
}

const BookScrollModal = ({ setIsOpen, data, ownerName }: TBookScrollModalProps) => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <S.StyledModal
      isOpen={modalOpen}
      onRequestClose={() => {
        setModalOpen(false);
        setIsOpen(false);
      }}
      ariaHideApp={false}
      style={customModalStyles}>
      <BookScollPaper ownerName={ownerName} content={data.description} sender={data.nickname} />

      <S.ModalCloseButton onClick={() => setIsOpen(false)}>
        <img src={closeIcon} alt="모달 닫기 아이콘" />
      </S.ModalCloseButton>
    </S.StyledModal>
  );
};

export default BookScrollModal;

const customModalStyles: ReactModal.Styles = {
  overlay: {
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: zIndex.modal,
    inset: '0',
    backdropFilter: 'blur(0.2rem)',
  },
  content: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    maxHeight: '64rem',
    transform: 'translate(-50%, -50%)',
    alignItems: 'center',
    width: '65rem',
  },
};

const S = {
  StyledModal: styled(ReactModal)`
    overflow: auto;
    outline: none;

    @media ${device.tablet} {
      width: 100%;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  `,

  ModalCloseButton: styled.button`
    background-color: var(--button-active);
    cursor: pointer;
    width: 7.2rem;
    height: 7.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-top: 4rem;
    img {
      width: 2.6rem;
    }
  `,
};
