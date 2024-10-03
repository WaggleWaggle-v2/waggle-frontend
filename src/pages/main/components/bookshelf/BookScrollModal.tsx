import React, { SetStateAction, useState } from 'react';
import lockerGreenIcon from '@assets/icons/locker-green.svg';
import closeIcon from '@assets/icons/modal-close-white.svg';
import { useBookDetail } from '@hooks/reactQuery/useQueryBook';
import { useUserQuery } from '@hooks/reactQuery/useQueryUser';
import usePageWidth from '@hooks/usePageWidth';
import { useToast } from '@hooks/useToast';
import { device, size } from '@styles/breakpoints';
import { zIndex } from '@styles/zIndex';
import { getFormattedDate } from '@utils/getFormattedDate';
import ReactModal from 'react-modal';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BookScollPaper from './BookScollPaper';
import ConfirmDeleteModal from './ConfirmDeleteModal';

interface TBookScrollModalProps {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  bookId: number;
}

const BookScrollModal = ({ setIsOpen, bookId }: TBookScrollModalProps) => {
  const pageWidth = usePageWidth();
  const [modalOpen, setModalOpen] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const { data: bookContentData } = useBookDetail(bookId);
  const { data: userData } = useUserQuery();
  const { id: bookshelfId } = useParams();

  const handleCloseModal = () => {
    setModalOpen(false);
    setIsOpen(false);
  };
  // console.log(bookContentData?.lock);

  if (!bookContentData) return null;

  return (
    <S.StyledModal isOpen={modalOpen} onRequestClose={handleCloseModal} ariaHideApp={false} style={customModalStyles}>
      {bookContentData.lock === false ? (
        <>
          <BookScollPaper
            ownerName={bookContentData?.receiverNickname}
            content={bookContentData?.description}
            sender={bookContentData?.senderNickname}
            createdAt={getFormattedDate(bookContentData?.createdAt)}
          />
          {(bookshelfId === userData?.id || bookContentData?.mine) && (
            <S.BookDeleteButton onClick={() => setDeleteModalOpen(true)}>방명록 삭제하기</S.BookDeleteButton>
          )}
          <S.ModalCloseButton onClick={() => setIsOpen(false)}>
            <img src={closeIcon} alt="모달 닫기 아이콘" />
          </S.ModalCloseButton>

          {deleteModalOpen && (
            <>
              {pageWidth <= size.tablet && <S.InitBackground></S.InitBackground>}
              <S.ModalWrapper>
                <ConfirmDeleteModal setIsOpen={setDeleteModalOpen} bookId={bookId} />
              </S.ModalWrapper>
            </>
          )}
        </>
      ) : (
        <S.LockedBookModal>
          <S.LockBookModalContent>
            <img src={lockerGreenIcon} alt="비공개 방명록 자물쇠 아이콘" />
            <p>비공개 방명록 입니다.</p>
          </S.LockBookModalContent>
          <S.CloseButton onClick={() => setIsOpen(false)}>확인</S.CloseButton>
        </S.LockedBookModal>
      )}
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
    position: 'fixed',
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
  InitBackground: styled.div`
    position: fixed;
    z-index: calc(${zIndex.header});
    top: -50vh;
    bottom: 0;
    left: -50vh;
    right: -50vh;
    height: 150vh;
    backdrop-filter: blur(0.1rem);
    background-color: rgba(0, 0, 0, 0.4);
  `,

  ModalWrapper: styled.div`
    background-color: ${({ theme }) => theme.subModalBg};
    z-index: 1000;
    @media ${device.tablet} {
      padding: 4rem 2rem 3rem;
      width: 86vw;
      border-radius: 1rem;
      position: absolute;
      top: calc(50% - 16rem);
    }
  `,

  StyledModal: styled(ReactModal)`
    outline: none;
    position: relative;
    width: 65rem;

    @media ${device.mobile} {
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

  LockedBookModal: styled.div`
    font-family: 'Pretendard';
    overflow: hidden;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.subModalBg};
    border-radius: 0.6rem;
    width: 34rem;

    @media ${device.mobile} {
      width: 86vw;
    }
  `,

  LockBookModalContent: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 3.2rem 0;
    img {
      width: 3.2;
    }
  `,

  CloseButton: styled.button`
    font-family: 'EBSHunminjeongeum';
    cursor: pointer;
    font-size: 2rem;
    padding: 1.4rem 0;
    color: var(--green600);
    width: 100%;
    text-align: center;
    border-top: 1px solid ${({ theme }) => theme.buttonBorder};
  `,
};
