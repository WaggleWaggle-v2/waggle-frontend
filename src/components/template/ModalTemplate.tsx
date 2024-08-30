/* eslint-disable no-unused-vars */
import { ReactNode, useEffect, useState } from 'react';
import { size } from '@styles/breakpoints';
import ReactModal from 'react-modal';
import styled from 'styled-components';

interface TModalTemplateProps {
  children: ReactNode;
}

const ModalTemplate = ({ children }: TModalTemplateProps) => {
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
          onRequestClose={() => setModalOpen(false)}
          ariaHideApp={false}
          style={customModalStyles}>
          {children}
        </S.StyledModal>
      )}
      {pageWidth <= size.mobile && children}
    </>
  );
};

export default ModalTemplate;

const customModalStyles: ReactModal.Styles = {
  overlay: {
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: '10',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backdropFilter: 'blur(4px)',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: 'fit-content',
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

//768 464

const S = {
  StyledModal: styled(ReactModal)`
    overflow: auto;
    outline: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};
