/* eslint-disable no-unused-vars */
import { ReactNode, useEffect, useState } from 'react';
import goBackIcon from '@assets/icons/left-arrow.svg';
import closeIcon from '@assets/icons/modal-close.svg';
import { device, size } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
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
      {pageWidth > size.tablet && (
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
      {pageWidth <= size.tablet && (
        <>
          {!isInit && (
            <S.TabletNavWrapper>
              <S.GoBackIcon src={goBackIcon} alt="뒤로 가기" />
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

  TabletNavWrapper: styled.div`
    position: fixed;
    top: 0;
    background-color: var(--background);
    height: ${HEADER_HEIGHT.MOBILE};
    width: 100%;
    z-index: ${zIndex.header + 9999};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.6rem;
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
    width: 2.9rem;
    height: 2.9rem;
    cursor: pointer;

    @media ${device.mobile} {
    }
  `,
};
