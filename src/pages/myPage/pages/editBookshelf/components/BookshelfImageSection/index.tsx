import { HTMLAttributes, useState } from 'react';
import editIcon from '@assets/icons/rewrite.svg';
import useToggle from '@hooks/useToggle';
import { skeletonAnimation } from '@styles/animation/skeletonAnimation';
import styled from 'styled-components';
import SetProfileModal from './components/SetProfileModal';

interface TBookshelfImageSection extends HTMLAttributes<HTMLDivElement> {
  backgroundimageurl: string | undefined;
  ishover: boolean;
}

const BookshelfImageSection = ({ backgroundimageurl, ishover, ...rest }: TBookshelfImageSection) => {
  const [profileImage, setProfileImage] = useState(1);
  const { isTrue: isOpen, handleSetTrue: handleOpenModal, handleSetFalse: handleCloseModal } = useToggle();

  return (
    <>
      {isOpen && (
        <SetProfileModal
          handleCloseModal={handleCloseModal}
          profileImageIdx={profileImage}
          setProfileImage={setProfileImage}
        />
      )}
      <div style={{ position: 'relative', flexShrink: '0' }} {...rest}>
        <S.EditImgButton type="button" onClick={handleOpenModal}>
          <S.EditIcon src={editIcon} alt="책장 배경사진 변경" />
        </S.EditImgButton>
        <S.ImageBox as="button" type="button" onClick={handleOpenModal}>
          <S.EditImageText $isHover={ishover}>삽화 수정하기</S.EditImageText>
          <S.HoverBackground $isHover={ishover} />
          <S.BackgroundImg src={backgroundimageurl} alt={backgroundimageurl ? '책장 배경 사진' : ''} />
        </S.ImageBox>
      </div>
    </>
  );
};

export default BookshelfImageSection;

const S = {
  ImageBox: styled.div`
    min-height: 100%;
    aspect-ratio: 1 /1;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    ${skeletonAnimation}
  `,
  EditImgButton: styled.button`
    background-color: var(--white);
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 5;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0.2rem 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: var(--gray100);
    }
  `,
  EditIcon: styled.img`
    width: 1.8rem;
    height: 1.8rem;
  `,
  BackgroundImg: styled.img`
    width: 18rem;
    height: 18rem;
    object-fit: cover;
  `,
  HoverBackground: styled.div<{ $isHover: boolean }>`
    position: absolute;
    inset: 0;
    background-color: var(--gray600);
    opacity: 0.6;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ $isHover }) => ($isHover ? '' : 'display : none;')};
    cursor: pointer;
  `,
  EditImageText: styled.div<{ $isHover: boolean }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Pretendard';
    font-size: 1.6rem;
    color: var(--white);
    font-weight: 500;
    z-index: 1;
    ${({ $isHover }) => ($isHover ? '' : 'display : none;')};
  `,
};
