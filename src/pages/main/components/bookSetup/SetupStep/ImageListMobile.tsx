/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { DECORATION_IMAGES } from '@pages/main/constants/book-sticker-images';
import styled from 'styled-components';

interface TImageListMobileProps {
  handleImageClick: (url: string) => void;
}

const ImageListMobile = ({ handleImageClick }: TImageListMobileProps) => {
  const [selectedList, setSelectedList] = useState<string>(DECORATION_IMAGES[0].title);

  const handleTitleClick = (listName: string) => {
    setSelectedList(listName);
  };

  const selectedImages = DECORATION_IMAGES.find(category => category.title === selectedList);

  return (
    <S.Container>
      <S.TitleWrapper>
        {DECORATION_IMAGES.map(category => (
          <S.ImageListTitle
            key={category.title}
            $selected={selectedList === category.title}
            onClick={() => handleTitleClick(category.title)}>
            {category.title}
          </S.ImageListTitle>
        ))}
      </S.TitleWrapper>

      {selectedImages && (
        <S.ImageList>
          {selectedImages.imageList.map(url => (
            <img draggable={false} key={url} src={url} alt={`image-${url}`} onClick={() => handleImageClick(url)} />
          ))}
        </S.ImageList>
      )}
    </S.Container>
  );
};

export default ImageListMobile;

const S = {
  Container: styled.div`
    margin: 3rem 0 7rem;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    width: 100%;
  `,

  TitleWrapper: styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    overflow-x: auto;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
  `,

  ImageListTitle: styled.p<{ $selected: boolean }>`
    font-family: 'Pretendard';
    background-color: ${({ $selected }) => ($selected ? 'var(--green600)' : '#ECECEC')};
    color: ${({ $selected }) => ($selected ? 'var(--white)' : '#938E87')};
    padding: 0.7rem 1.6rem;
    cursor: pointer;
    border-radius: 0.6rem;
  `,

  ImageList: styled.div`
    margin-bottom: 3rem;
    padding-bottom: 1rem;
    display: flex;
    gap: 0.6rem;
    overflow-x: auto;

    &::-webkit-scrollbar {
      height: 0.8rem;
    }
    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.scollBar};
      border-radius: 0.2rem;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 0.2rem;
      background-color: var(--brown200);
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
