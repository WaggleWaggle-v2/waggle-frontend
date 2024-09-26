import { ReactNode, useRef } from 'react';
import closeIcon from '@assets/icons/modal-close.svg';
import useOutsideClick from '@hooks/useOutsideClick';
import { device } from '@styles/breakpoints';
import { zIndex } from '@styles/zIndex';
import styled from 'styled-components';
import Portal from '../Portal';

interface TModalBaseTemplate {
  children: ReactNode;
  handleCloseModal: () => void;
}

const ModalBaseTemplate = ({ children, handleCloseModal }: TModalBaseTemplate) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modalRef, handleCloseModal);

  return (
    <Portal>
      <S.ModalBox ref={modalRef}>
        <S.ModalCloseButton type="button" onClick={handleCloseModal}>
          <img src={closeIcon} alt="모달 닫기" />
        </S.ModalCloseButton>
        {children}
      </S.ModalBox>
      <S.DimContainer />
    </Portal>
  );
};

export default ModalBaseTemplate;

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
    min-width: 46.4rem;

    @media ${device.mobile} {
      transform: translate(0, 0);
      top: auto;
      left: 0;
      bottom: 0;
      width: 100%;
      transform: none;
      padding: 4rem 2rem 1rem;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      min-width: 0;
    }
  `,
  ModalCloseButton: styled.button`
    cursor: pointer;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
  `,
};
