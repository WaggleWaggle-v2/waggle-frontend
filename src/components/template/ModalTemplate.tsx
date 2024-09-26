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
  const pageWidth = usePageWidth();
  const theme = useTheme();

  const customModalStyles: ReactModal.Styles = {
    overlay: {
      position: 'fixed',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: zIndex.modal,
      inset: '0',
      backdropFilter: 'blur(0.2rem)',
    },
    content: {
      position: 'absolute',
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
    },
  };

  return (
    <>
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
            onClick={() => setIsOpen(false)}
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
                  step === 1 ? setIsOpen(false) : setStep?.(prev => prev - 1);
                }}
                alt="뒤로 가기"
              />
              <S.CloseIcon
                src={closeIcon}
                onClick={() => setIsOpen(false)}
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
};
