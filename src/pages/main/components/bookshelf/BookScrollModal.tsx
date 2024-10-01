import React, { SetStateAction, useState } from 'react';
import { TBookItem } from '@api/book/bookRequest.type';
import closeIcon from '@assets/icons/modal-close-white.svg';
import { useBookDeleteMutation, useBookDetail } from '@hooks/reactQuery/useQueryBook';
import { useUserQuery } from '@hooks/reactQuery/useQueryUser';
import { device } from '@styles/breakpoints';
import { zIndex } from '@styles/zIndex';
import { getFormattedDate } from '@utils/getFormattedDate';
import ReactModal from 'react-modal';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BookScollPaper from './BookScollPaper';

interface TBookScrollModalProps {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  bookId: number;
  ownerName: string;
}

const BookScrollModal = ({ setIsOpen, bookId, ownerName }: TBookScrollModalProps) => {
  const [modalOpen, setModalOpen] = useState(true);
  const { data: bookContentData } = useBookDetail(bookId);
  const { data: userData } = useUserQuery();
  const { id: bookshelfId } = useParams();

  const mutation = useBookDeleteMutation();

  const handleDeleteButtonClick = async () => {
    await mutation.mutateAsync(bookId);
    location.reload();
  };

  return (
    <S.StyledModal
      isOpen={modalOpen}
      onRequestClose={() => {
        setModalOpen(false);
        setIsOpen(false);
      }}
      ariaHideApp={false}
      style={customModalStyles}>
      <BookScollPaper
        ownerName={ownerName}
        content={bookContentData?.description}
        sender={bookContentData?.senderNickname}
        createdAt={getFormattedDate(bookContentData?.createdAt)}
      />
      {bookshelfId === userData?.id && (
        <S.BookDeleteButton onClick={handleDeleteButtonClick}>방명록 삭제하기</S.BookDeleteButton>
      )}

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
  },
};

const S = {
  StyledModal: styled(ReactModal)`
    outline: none;
    position: relative;
    width: 65rem;

    @media ${device.tablet} {
      width: 100%;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  `,

  BookDeleteButton: styled.button`
    font-family: 'Pretendard';
    color: var(--gray500);
    text-decoration: underline;
    font-size: 1.4rem;
    cursor: pointer;
    position: absolute;
    bottom: 16rem;
    left: 5rem;
    z-index: 1;
    @media ${device.mobile} {
      left: 6rem;
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
