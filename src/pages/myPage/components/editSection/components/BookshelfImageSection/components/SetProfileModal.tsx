import { Dispatch, SetStateAction } from 'react';
import PrimaryButton from '@components/PrimaryButton';
import ModalBaseTemplate from '@components/template/ModalBaseTemplate/ModalBaseTemplate';
import { ModalTitle } from '@components/template/ModalBaseTemplate/style/commonModalStyle';
import { useBookshelfBackgroundUpdateMutation } from '@hooks/reactQuery/useQueryBookshelf';
import SetProfile from '@pages/main/components/additionalSetup/SetProfile';
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
    <ModalBaseTemplate handleCloseModal={handleCloseModal}>
      <S.Container>
        <ModalTitle style={{ textAlign: 'left' }}>나를 표현할 삽화를 고르시오</ModalTitle>
        <S.ImageContainer>
          <SetProfile setProfile={setProfileImage} profile={profileImageIdx} />
        </S.ImageContainer>
        <PrimaryButton onClick={handleImageFile}>저장하기</PrimaryButton>
      </S.Container>
    </ModalBaseTemplate>
  );
};

export default SetProfileModal;

const S = {
  Container: styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `,
  ImageContainer: styled.div`
    max-height: 50rem;
    overflow-y: auto;
    padding-right: 2rem;
    margin-right: -2rem;
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
  `,
};
