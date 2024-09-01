/* eslint-disable no-unused-vars */
import { ReactNode, useEffect, useState } from 'react';
import closeIcon from '@assets/icons/modal-close.svg';
import { device, size } from '@styles/breakpoints';
import { zIndex } from '@styles/zIndex';
import ReactModal from 'react-modal';
import styled from 'styled-components';

interface TModalTemplateProps {
  children: ReactNode;
  setIsOpen: (value: boolean) => void;
  isInit?: boolean;
}

const ModalTemplate = ({ children, setIsOpen, isInit }: TModalTemplateProps) => {
  const [modalOpen, setModalOpen] = useState(true);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const newPageWidth = window.innerWidth;
      if (newPageWidth !== pageWidth) setPageWidth(newPageWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {pageWidth > size.mobile && (
        <S.StyledModal
          isOpen={modalOpen}
          onRequestClose={() => {
            setModalOpen(false);
            setIsOpen(false);
          }}
          ariaHideApp={false}
          style={customModalStyles}>
          <button onClick={() => setIsOpen(false)}>
            <S.CloseIcon src={closeIcon} $isInit={isInit as boolean} alt="모달 닫기 아이콘" />
          </button>
          {children}
        </S.StyledModal>
      )}
      {pageWidth <= size.mobile && (
        <>
          <button onClick={() => setIsOpen(false)}>
            <S.CloseIcon src={closeIcon} $isInit={isInit as boolean} alt="모달 닫기 아이콘" />
          </button>
          {children}
        </>
      )}
    </>
  );
};

export default ModalTemplate;

const customModalStyles: ReactModal.Styles = {
  overlay: {
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: zIndex.modal,
    inset: '0',
    backdropFilter: 'blur(0.3rem)',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: 'fit-content',
    minHeight: '28.4rem',
    maxHeight: '64rem',
    transform: 'translate(-50%, -50%)',
    borderRadius: '1rem',
    backgroundColor: 'var(--background)',
    justifyContent: 'center',
    padding: '5rem 4.8rem 3rem',
    minWidth: '46.4rem',
    maxWidth: '76.8rem',
  },
};

const S = {
  StyledModal: styled(ReactModal)`
    overflow: auto;
    outline: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `,

  CloseIcon: styled.img<{ $isInit: boolean }>`
    cursor: pointer;
    width: 3.6rem;
    position: absolute;

    top: ${({ $isInit }) => ($isInit ? '1.2rem' : '4rem')};
    right: ${({ $isInit }) => ($isInit ? '1.2rem' : '4.6rem')};

    @media ${device.mobile} {
      width: 2.4rem;
      top: ${({ $isInit }) => ($isInit ? '2rem' : '1.5rem')};
      right: ${({ $isInit }) => ($isInit ? '2rem' : '1.5rem')};
    }
  `,
};
