/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { EQUIPMENT_IMAGES, LETTER_IMAGES, PROP_IMAGES } from '@pages/main/constants/book-sticker-images';
import styled from 'styled-components';

interface TImageListMobileProps {
  handleImageClick: (url: string) => void;
}

const ImageListMobile = ({ handleImageClick }: TImageListMobileProps) => {
  const [selectedList, setSelectedList] = useState<string>('letter');

  const handleTitleClick = (listName: string) => {
    setSelectedList(listName);
  };

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.ImageListTitle $selected={selectedList === 'letter'} onClick={() => handleTitleClick('letter')}>
          {LETTER_IMAGES.title}
        </S.ImageListTitle>
        <S.ImageListTitle $selected={selectedList === 'prop'} onClick={() => handleTitleClick('prop')}>
          {PROP_IMAGES.title}
        </S.ImageListTitle>
        <S.ImageListTitle $selected={selectedList === 'equipment'} onClick={() => handleTitleClick('equipment')}>
          {EQUIPMENT_IMAGES.title}
        </S.ImageListTitle>
      </S.TitleWrapper>

      {selectedList === 'letter' && (
        <S.ImageList>
          {LETTER_IMAGES.imageList.map(url => (
            <img draggable={false} key={url} src={url} alt={`image-${url}`} onClick={() => handleImageClick(url)} />
          ))}
        </S.ImageList>
      )}

      {selectedList === 'prop' && (
        <S.ImageList>
          {PROP_IMAGES.imageList.map(url => (
            <img draggable={false} key={url} src={url} alt={`image-${url}`} onClick={() => handleImageClick(url)} />
          ))}
        </S.ImageList>
      )}

      {selectedList === 'equipment' && (
        <S.ImageList>
          {EQUIPMENT_IMAGES.imageList.map(url => (
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
  `,

  TitleWrapper: styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    overflow-x: auto;
    white-space: nowrap;
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
      border-radius: 0.4rem;
    }
  `,
};
