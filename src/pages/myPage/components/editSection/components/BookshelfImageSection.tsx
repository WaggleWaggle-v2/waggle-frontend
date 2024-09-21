import editIcon from '@assets/icons/rewrite.svg';
import styled from 'styled-components';

interface TBookshelfImageSection {
  backgroundImageUrl: string;
  nickname: string;
}

const BookshelfImageSection = (props: TBookshelfImageSection) => {
  const { backgroundImageUrl, nickname } = props;
  return (
    <div style={{ position: 'relative', flexShrink: '0' }}>
      <S.EditImgButton type="button">
        <S.EditIcon src={editIcon} alt="책장 배경사진 변경" />
      </S.EditImgButton>
      <S.ImageBox>
        <S.BackgroundImg src={backgroundImageUrl} alt={`${nickname}의 책장 이미지`} />
      </S.ImageBox>
    </div>
  );
};

export default BookshelfImageSection;

const S = {
  ImageBox: styled.div`
    height: 100%;
    aspect-ratio: 1 /1;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
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
};
