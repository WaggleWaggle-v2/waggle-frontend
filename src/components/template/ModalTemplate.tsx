/* eslint-disable no-unused-vars */
import { Dispatch, ReactNode, useState } from 'react';
import goBackIcon from '@assets/icons/left-arrow.svg';
import closeIcon from '@assets/icons/modal-close.svg';
import usePageWidth from '@hooks/usePageWidth';
import { device, size } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { zIndex } from '@styles/zIndex';
import ReactModal from 'react-modal';
import styled, { useTheme } from 'styled-components';

interface TModalTemplateProps {
  children: ReactNode;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  setStep?: Dispatch<React.SetStateAction<number>>;
  step?: number;
  isInit?: boolean;
}

const ModalTemplate = ({ children, setIsOpen, setStep, step, isInit }: TModalTemplateProps) => {
  const [modalOpen, setModalOpen] = useState(true);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const pageWidth = usePageWidth();
  const theme = useTheme();

  const handleCloseButtonClick = () => {
    setConfirmModalOpen(true);
  };

  const customModalStyles: ReactModal.Styles = {
    overlay: {
      position: 'fixed',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: zIndex.modal,
      inset: '0',
      backdropFilter: 'blur(0.2rem)',
    },
    content: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      height: 'fit-content',
      minHeight: '28.4rem',
      maxHeight: '70rem',
      transform: 'translate(-50%, -50%)',
      borderRadius: '1rem',
      backgroundColor: theme.modalBg,
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: '46.4rem',
      maxWidth: '95.8rem',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 0px 25px',
    },
  };

  const ConfirmModalStyles: ReactModal.Styles = {
    overlay: {
      position: 'fixed',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 9999,
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
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 0px 25px',
    },
  };

  return (
    <>
      {confirmModalOpen && (
        <S.StyledModal isOpen={modalOpen} ariaHideApp={false} style={ConfirmModalStyles}>
          <S.LockedBookModal>
            <S.LockBookModalContent>
              <p>방명록 작성중입니다.</p>
              <p>나가시겠습니까?</p>
              <S.Subtext>페이지를 벗어날 경우 작성중인 방명록 내용은 사라집니다.</S.Subtext>
            </S.LockBookModalContent>

            <S.ButtonWrapper>
              <S.CloseButton onClick={() => setIsOpen(false)}>예</S.CloseButton>
              <S.CloseButton onClick={() => setConfirmModalOpen(false)}>아니오</S.CloseButton>
            </S.ButtonWrapper>
          </S.LockedBookModal>
        </S.StyledModal>
      )}

      {pageWidth > size.tablet && (
        <S.StyledModal
          isOpen={modalOpen}
          onRequestClose={() => {
            setModalOpen(false);
            setIsOpen(false);
          }}
          ariaHideApp={false}
          style={customModalStyles}>
          <S.CloseIcon
            src={closeIcon}
            onClick={handleCloseButtonClick}
            $isInit={isInit as boolean}
            alt="모달 닫기 아이콘"
          />
          {children}
        </S.StyledModal>
      )}
      {pageWidth <= size.tablet && (
        <>
          {!isInit && (
            <S.TabletNavWrapper>
              <S.GoBackIcon
                src={goBackIcon}
                onClick={() => {
                  step === 1 ? handleCloseButtonClick() : setStep?.(prev => prev - 1);
                }}
                alt="뒤로 가기"
              />
              <S.CloseIcon
                src={closeIcon}
                onClick={handleCloseButtonClick}
                $isInit={isInit as boolean}
                alt="모달 닫기 아이콘"
              />
            </S.TabletNavWrapper>
          )}
          {children}
        </>
      )}
    </>
  );
};

export default ModalTemplate;

const S = {
  StyledModal: styled(ReactModal)`
    overflow: auto;
    outline: none;

    &::-webkit-scrollbar {
      display: none;
    }
  `,

  TabletNavWrapper: styled.div`
    position: fixed;
    top: 0;
    background-color: var(--background);
    background-color: ${props => props.theme.modalBg};
    height: ${HEADER_HEIGHT.MOBILE};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.6rem;
    z-index: 100;
  `,

  GoBackIcon: styled.img`
    width: 2.1rem;
    height: 2.1rem;
    cursor: pointer;
    @media ${device.mobile} {
      width: 2.4rem;
    }
  `,

  CloseIcon: styled.img<{ $isInit: boolean }>`
    cursor: pointer;
    width: 2.9rem;
    height: 2.9rem;
    position: absolute;
    top: 4rem;
    right: 4.6rem;
    display: ${({ $isInit }) => $isInit && 'none'};
    z-index: calc(${zIndex.modal} + 1);

    @media ${device.tablet} {
      position: static;
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
    padding: 2.6rem 2rem 1.8rem;
  `,

  Subtext: styled.p`
    font-size: 1.2rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.subText};
  `,

  ButtonWrapper: styled.div`
    display: flex;

    & button:nth-child(2) {
      border-left: 1px solid ${({ theme }) => theme.buttonBorder};
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
