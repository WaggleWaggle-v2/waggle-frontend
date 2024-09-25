/* eslint-disable no-unused-vars */
import { EQUIPMENT_IMAGES, LETTER_IMAGES, PROP_IMAGES } from '@pages/main/constants/book-sticker-images';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

interface TImageListProps {
  handleImageClick: (url: string) => void;
}

const ImageList = ({ handleImageClick }: TImageListProps) => {
  return (
    <S.Container>
      <S.ImageListTitle>{LETTER_IMAGES.title}</S.ImageListTitle>
      <S.ImageList>
        {LETTER_IMAGES.imageList.map(url => (
          <img draggable={false} key={url} src={url} alt={`image-${url}`} onClick={() => handleImageClick(url)} />
        ))}
      </S.ImageList>

      <S.ImageListTitle>{PROP_IMAGES.title}</S.ImageListTitle>
      <S.ImageList>
        {PROP_IMAGES.imageList.map(url => (
          <img draggable={false} key={url} src={url} alt={`image-${url}`} onClick={() => handleImageClick(url)} />
        ))}
      </S.ImageList>

      <S.ImageListTitle>{EQUIPMENT_IMAGES.title}</S.ImageListTitle>
      <S.ImageList>
        {EQUIPMENT_IMAGES.imageList.map(url => (
          <img draggable={false} key={url} src={url} alt={`image-${url}`} onClick={() => handleImageClick(url)} />
        ))}
      </S.ImageList>
    </S.Container>
  );
};

export default ImageList;

const S = {
  Container: styled.div`
    margin: 3rem 0 1cap;
    height: 43rem;
    overflow-y: auto;
    overflow-x: hidden;
    width: 40rem;
    &::-webkit-scrollbar {
      width: 0.6rem;
    }
    &::-webkit-scrollbar-track {
      background-color: var(--gray200);
      border-radius: 0.2rem;
    }
    &::-webkit-scrollbar-thumb {
      cursor: pointer;
      border-radius: 0.2rem;
      background-color: var(--brown200);
    }
    @media ${device.tablet} {
      height: calc(100vh - 28rem);
    }
  `,

  ImageListTitle: styled.p`
    margin-bottom: 1rem;
    font-weight: 600;
  `,

  ImageList: styled.div`
    margin-bottom: 3rem;
    padding-bottom: 1rem;
    display: flex;
    gap: 0.6rem;
    overflow-x: auto;

    &::-webkit-scrollbar {
      height: 0.4rem;
    }
    &::-webkit-scrollbar-track {
      background-color: var(--gray200);
      border-radius: 0.2rem;
    }
    &::-webkit-scrollbar-thumb {
      cursor: pointer;
      border-radius: 0.2rem;
      background-color: var(--brown200);
    }

    img {
      cursor: pointer;
      width: 8rem;
      background-color: var(--gray300);
      border-radius: 0.4rem;
    }
    @media ${device.tablet} {
      width: 40vw;
    }
  `,
};
