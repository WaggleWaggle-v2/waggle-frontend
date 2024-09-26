import { Dispatch, SetStateAction } from 'react';
import closeIcon from '@assets/icons/modal-close.svg';
import PrimaryButton from '@components/PrimaryButton';
import { ModalTitle } from '@components/template/ModalBaseTemplate/style/commonModalStyle';
import Portal from '@components/template/Portal';
import { useBookshelfBackgroundUpdateMutation } from '@hooks/reactQuery/useQueryBookshelf';
import SetProfile from '@pages/main/components/additionalSetup/SetProfile';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { zIndex } from '@styles/zIndex';
import styled from 'styled-components';

interface TSetProfileModal {
  setProfileImage: Dispatch<SetStateAction<number>>;
  profileImageIdx: number;
  handleCloseModal: () => void;
}

const SetProfileModal = (props: TSetProfileModal) => {
  const { setProfileImage, profileImageIdx, handleCloseModal } = props;
  const fetchImageMutation = useBookshelfBackgroundUpdateMutation();

  const handleImageFile = () => {
    fetchImageMutation.mutate(profileImageIdx);
    handleCloseModal();
  };
  return (
    <Portal>
      <S.ModalBox>
        <S.ModalHeader>
          <S.ModalCloseButton type="button" onClick={handleCloseModal}>
            <img src={closeIcon} alt="모달 닫기" />
          </S.ModalCloseButton>
        </S.ModalHeader>
        <S.ModalBody>
          <div>
            <S.ModalTitle>나를 표현할 삽화를 고르시오</S.ModalTitle>
            <S.ImageContainer>
              <SetProfile setProfile={setProfileImage} profile={profileImageIdx} />
            </S.ImageContainer>
          </div>
          <PrimaryButton onClick={handleImageFile}>저장하기</PrimaryButton>
        </S.ModalBody>
      </S.ModalBox>
      <S.ModalDim />
    </Portal>
  );
};

export default SetProfileModal;

const S = {
  ModalBox: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--background);
    border-radius: 1rem;
    z-index: ${zIndex.modal + 1};

    @media ${device.tablet} {
      position: fixed;
      inset: 0;
      transform: translate(0, 0);
      border-radius: 0;
      display: grid;
      grid-template-rows: ${HEADER_HEIGHT.MOBILE} 1fr;
    }

    @media ${device.mobile} {
    }
  `,
  ModalHeader: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${device.tablet} {
      height: ${HEADER_HEIGHT.MOBILE};
      border-bottom: 0.1rem solid var(--brown100);
    }
  `,
  ModalBody: styled.div`
    padding: 7rem 6.2rem 5rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media ${device.tablet} {
      padding: 8rem 2rem 4rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    @media ${device.mobile} {
      align-items: stretch;
      padding-top: 2rem;
    }
  `,
  ImageContainer: styled.div`
    max-height: 50rem;
    overflow-y: auto;
    padding-right: 2rem;
    margin-right: -2rem;
    margin-top: 1rem;
    &::-webkit-scrollbar {
      width: 0.4rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--brown200);
      height: 30rem;
      border-radius: 0.8rem;
      cursor: pointer;
    }

    &::-webkit-scrollbar-track {
      background-color: var(--gray300);
    }

    @media ${device.tablet} {
      margin-bottom: auto;
    }

    @media ${device.mobile} {
      margin-right: 0;
      max-height: 65rem;
    }
  `,
  ModalDim: styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    inset: 0;
    z-index: ${zIndex.modal};
  `,
  ModalCloseButton: styled.button`
    cursor: pointer;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
  `,
  ModalTitle: styled(ModalTitle)`
    text-align: left;

    @media ${device.tablet} {
      font-size: 3.2rem;
    }

    @media ${device.mobile} {
      font-size: 2.3rem;
    }
  `,
};
