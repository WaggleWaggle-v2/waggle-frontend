import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import closeIcon from '@assets/icons/modal-close-white.svg';
import { TBookItem, USER_DATA } from '@constants/mock';
import { device } from '@styles/breakpoints';
import { zIndex } from '@styles/zIndex';
import ReactModal from 'react-modal';
import styled, { keyframes } from 'styled-components';

interface TBookScrollModalProps {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  data: TBookItem;
}

const BookScrollModal = ({ setIsOpen, data }: TBookScrollModalProps) => {
  const [modalOpen, setModalOpen] = useState(true);
  const ownerName = USER_DATA.nickname;

  return (
    <>
      <S.StyledModal
        isOpen={modalOpen}
        onRequestClose={() => {
          setModalOpen(false);
          setIsOpen(false);
        }}
        ariaHideApp={false}
        style={customModalStyles}>
        <S.BookScrollBar>
          <div />
          <div />
        </S.BookScrollBar>
        <S.BookContent>
          <S.Receiver>
            <p>{ownerName}</p>
            <p>님 에게</p>
          </S.Receiver>
          <S.Content>{data.content}</S.Content>
          <S.Sender>
            <p>23년 10월 5일</p>
            <p>{data.nickname}</p>
          </S.Sender>
        </S.BookContent>
        <S.BookScrollBar>
          <div />
          <div />
        </S.BookScrollBar>

        <S.ModalCloseButton onClick={() => setIsOpen(false)}>
          <img src={closeIcon} alt="모달 닫기 아이콘" />
        </S.ModalCloseButton>
      </S.StyledModal>
    </>
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
    // width: '100%',
  },
};

export const rollDown = keyframes`
    0%{
    padding: 0 4rem;
    max-height: 0rem;
    }

    16%{
    padding: 0 4rem;
    max-height: 0rem;
    }

  100%{
    max-height: 48rem;
  }
`;

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

  BookScrollBar: styled.div`
    height: 1rem;
    width: 65rem;
    height: 2rem;
    position: relative;

    @media ${device.mobile} {
      width: 94%;
    }

    div:first-child {
      position: absolute;
      display: flex;
      width: 96%;
      background: linear-gradient(to top, #ceb499 0%, #bb9165 100%);
      left: calc(2%);
      height: 100%;
      z-index: 1;
      border-radius: 0.4rem;
    }
    div:last-child {
      position: absolute;
      display: flex;
      top: calc(50% - 0.8rem / 2);
      width: 100%;
      background-color: #513a2a;
      height: 0.8rem;
      z-index: 0;
      border-radius: 0.4rem;
    }
  `,

  BookContent: styled.div`
    overflow: hidden;
    animation: ${rollDown} 0.5s cubic-bezier(0.51, -0.09, 0.51, 1.03);
    background-color: #fffcf9;
    width: calc(65rem - 4rem);
    padding: 5.6rem 4rem;
    @media ${device.mobile} {
      width: calc(94% - 4rem);
      padding: 3.3rem 4rem;
    }
  `,

  Receiver: styled.div`
    display: flex;
    font-size: 2.4rem;
    font-weight: 900;
    p:first-child {
      color: var(--red500);
    }
    @media ${device.mobile} {
      font-size: 1.8rem;
    }
  `,

  Content: styled.div`
    font-family: 'Pretendard';
    font-size: 2rem;
    margin: 2.1rem 0;
    padding-right: 1rem;
    line-height: 150%;
    max-height: 25rem;
    overflow-y: auto;
    @media ${device.mobile} {
      font-size: 1.6rem;
    }

    &::-webkit-scrollbar {
      width: 0.4rem;
    }
    &::-webkit-scrollbar-track {
      background-color: var(--gray200);
      border-radius: 0.2rem;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 0.2rem;
      background-color: var(--brown200);
    }
  `,

  Sender: styled.div`
    text-align: end;
    p:first-child {
      font-size: 1.6rem;
      font-weight: 700;
      margin-bottom: 0.6rem;
    }
    p:last-child {
      font-size: 1.8rem;
      font-weight: 900;
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
