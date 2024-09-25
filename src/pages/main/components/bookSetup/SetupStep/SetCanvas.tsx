/* eslint-disable no-unused-vars */
import usePageWidth from '@hooks/usePageWidth';
import { size } from '@styles/breakpoints';
import ImageList from './ImageList';
import ImageListMobile from './ImageListMobile';

interface SetCanvas {
  handleImageClick: (url: string) => void;
}

const SetCanvas = ({ handleImageClick }: SetCanvas) => {
  const pageWidth = usePageWidth();
  return (
    <>
      {pageWidth > size.mobile ? (
        <ImageList handleImageClick={handleImageClick} />
      ) : (
        <ImageListMobile handleImageClick={handleImageClick} />
      )}
    </>
  );
};

export default SetCanvas;
