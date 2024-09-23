/* eslint-disable no-unused-vars */
import { EQUIPMENT_IMAGES, LETTER_IMAGES, PROP_IMAGES } from '@pages/main/constants/book-sticker-images';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
interface SetCanvas {
  handleImageClick: (url: string) => void;
}

const SetCanvas = ({ handleImageClick }: SetCanvas) => {
  return (
    <S.Container>
      <S.ImageListTitle>한글</S.ImageListTitle>
      <S.ImageList>
        {LETTER_IMAGES.map(url => (
          <img draggable={false} key={url} src={url} alt={`image-${url}`} onClick={() => handleImageClick(url)} />
        ))}
      </S.ImageList>

      <S.ImageListTitle>아기자기한 소품</S.ImageListTitle>
      <S.ImageList>
        {PROP_IMAGES.map(url => (
          <img draggable={false} key={url} src={url} alt={`image-${url}`} onClick={() => handleImageClick(url)} />
        ))}
      </S.ImageList>

      <S.ImageListTitle>멋스러운 소품</S.ImageListTitle>
      <S.ImageList>
        {EQUIPMENT_IMAGES.map(url => (
          <img draggable={false} key={url} src={url} alt={`image-${url}`} onClick={() => handleImageClick(url)} />
        ))}
      </S.ImageList>

      <S.ImageListTitle>멋스러운 소품</S.ImageListTitle>
      <S.ImageList>
        {EQUIPMENT_IMAGES.map(url => (
          <img draggable={false} key={url} src={url} alt={`image-${url}`} onClick={() => handleImageClick(url)} />
        ))}
      </S.ImageList>
    </S.Container>
  );
};

export default SetCanvas;

const S = {
  Container: styled.div`
    margin: 3rem 0 4rem;
    height: 43rem;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0.4rem;
    }
    &::-webkit-scrollbar-track {
      background-color: var(--gray200);
      border-radius: 0.2rem;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 0.2rem;
      background-color: var(--brown200);
    }
    @media ${device.tablet} {
      height: calc(100vh - 28rem);
    }
    @media ${device.mobile} {
      margin: 3rem 0 7rem;
      height: 100%;
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
    width: 40rem;

    &::-webkit-scrollbar {
      height: 0.4rem;
    }
    &::-webkit-scrollbar-track {
      background-color: var(--gray200);
      border-radius: 0.2rem;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 0.2rem;
      background-color: var(--brown200);
    }

    img {
      cursor: pointer;
      width: 8rem;
      background-color: var(--gray300);
    }
    @media ${device.tablet} {
      width: 40vw;
    }
    @media ${device.mobile} {
      width: 100vw;
    }
  `,
};
