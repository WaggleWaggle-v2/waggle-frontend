/* eslint-disable no-unused-vars */
import { DECORATION_IMAGES } from '@pages/main/constants/book-sticker-images';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

interface TImageListProps {
  handleImageClick: (url: string) => void;
}

const ImageList = ({ handleImageClick }: TImageListProps) => {
  return (
    <S.Container>
      {DECORATION_IMAGES.map(category => (
        <li key={category.title}>
          <S.ImageListTitle>{category.title}</S.ImageListTitle>
          <S.ImageList>
            {category.imageList.map(url => (
              <img draggable={false} key={url} src={url} alt={`image-${url}`} onClick={() => handleImageClick(url)} />
            ))}
          </S.ImageList>
        </li>
      ))}
    </S.Container>
  );
};

export default ImageList;

const S = {
  Container: styled.ul`
    margin: 2rem 0;
    height: 42rem;
    overflow-y: auto;
    overflow-x: hidden;
    width: 40rem;
    &::-webkit-scrollbar {
      display: none;
    }

    @media ${device.tablet} {
      height: calc(100dvh - 28rem);
    }
  `,

  ImageListTitle: styled.p`
    margin-bottom: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.subText};
  `,

  ImageList: styled.ul`
    margin-bottom: 3rem;
    padding-bottom: 1rem;
    display: flex;
    gap: 0.8rem;
    overflow-x: auto;

    &::-webkit-scrollbar {
      height: 0.8rem;
    }
    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.scollBar};
      border-radius: 0.2rem;
    }
    &::-webkit-scrollbar-thumb {
      cursor: pointer;
      border-radius: 0.2rem;
      background-color: var(--brown200);
    }

    @media ${device.tablet} {
      width: 40vw;
    }
    img {
      cursor: pointer;
      width: 8rem;
      padding: 0.6rem;
      background-color: ${({ theme }) => theme.stickerBg};
      border-radius: 0.4rem;
    }
  `,
};
