/* eslint-disable no-unused-vars */
import React, {
  forwardRef,
  SetStateAction,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import bookShelfLongImage from '@assets/images/bookshelf/bookshelf-long.png';
import bookShelfShortImage from '@assets/images/bookshelf/bookshelf-short.png';
import { TBookType } from '@pages/main/types/type';
import { size } from '@styles/breakpoints';
import Konva from 'konva';
import { Layer } from 'konva/lib/Layer';
import { Transformer } from 'konva/lib/shapes/Transformer';
import { Stage } from 'konva/lib/Stage';
import styled from 'styled-components';

interface TCanvasProps {
  selectedImage: string | null;
  setSelectedImage: React.Dispatch<SetStateAction<string | null>>;
  type: TBookType;
  pageWidth: number;
}

const Canvas = forwardRef(({ selectedImage, setSelectedImage, type, pageWidth }: TCanvasProps, ref) => {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<Stage | null>(null);
  const layerRef = useRef<Layer | null>(null);
  const transformerRef = useRef<Transformer | null>(null);
  const [activeImage, setActiveImage] = useState<Konva.Image | null>(null);
  const [isPC, setIsPC] = useState(false);

  useEffect(() => {
    setIsPC(pageWidth > size.tablet);
  }, [pageWidth]);

  const CANVAS =
    type === 'SHORT'
      ? { width: isPC ? 400 : 316, height: isPC ? 398 : 316, background: bookShelfShortImage }
      : { width: isPC ? 258 : 220, height: isPC ? 544 : 464, background: bookShelfLongImage };

  function onFocusOut() {
    setActiveImage(null);
    if (!transformerRef.current) return;
    transformerRef.current.nodes([]);
    layerRef.current?.draw();
  }

  useImperativeHandle(ref, () => ({ onFocusOut }));

  /* 1. Stage와 Layer를 생성 */
  const initialize = useCallback(() => {
    if (stageRef.current) {
      stageRef.current.destroy(); // Destroy existing stage
      stageRef.current = null;
    }

    const stage = new Konva.Stage({
      container: 'container', // <div id='container'></div>의 id와 연결
      width: CANVAS.width,
      height: CANVAS.height,
    });
    stageRef.current = stage;

    const layer = new Konva.Layer();
    layerRef.current = layer;
    stage.add(layer);

    // 바운딩박스 커스터마이징
    const transformer = new Konva.Transformer({
      borderStroke: '#ac885b',
      borderStrokeWidth: 1,
      anchorSize: 8,
      anchorStroke: '#ac885b',
      anchorFill: '#ac885b',
      anchorCornerRadius: 50,
      rotateAnchorOffset: 40,
      padding: 8,
    });
    transformerRef.current = transformer;
    layer.add(transformer);
  }, [CANVAS.height, CANVAS.width]);

  /* 2. 생성한 Layer위에 선택한 이미지 객체를 올려주기. */
  const drawImage = useCallback(async () => {
    if (!selectedImage || !layerRef.current) return;

    const imageObj = new Image();
    imageObj.src = selectedImage;

    try {
      await new Promise((resolve, reject) => {
        imageObj.onload = resolve;
        imageObj.onerror = reject;
      });

      const scaleFactor = 1.4;
      const konvaImage = new Konva.Image({
        width: imageObj.width / scaleFactor,
        height: imageObj.height / scaleFactor,
        x: (CANVAS.width - imageObj.width / scaleFactor) / 2,
        y: (CANVAS.height - imageObj.height / scaleFactor) / 2,
        image: imageObj,
        draggable: true,
      });

      layerRef.current.add(konvaImage);
      transformerRef.current?.nodes([konvaImage]);
      konvaImage.moveToTop();
      transformerRef.current?.moveToTop();
      layerRef.current.draw();

      setActiveImage(konvaImage);

      // 각 이미지에 클릭 이벤트 넣기(바운딩 박스 마운트 위해)
      konvaImage.on('click touchend', () => {
        transformerRef.current?.nodes([konvaImage]);
        konvaImage.moveToTop();
        transformerRef.current?.moveToTop();
        layerRef?.current?.draw();
        setActiveImage(konvaImage);
      });

      setSelectedImage(null);
    } catch (error) {
      alert('Failed to load the image!');
    }
  }, [CANVAS.height, CANVAS.width, selectedImage, setSelectedImage]);

  /* 3. DOM이 렌더 된 뒤에 실행되어야 하므로 useEffect안에서 initialize, drawImage를 순서대로 실행해준다. */
  useEffect(() => {
    initialize();
  }, [initialize]);

  // 이미지 선택될때마다 canvas 에 그리기
  useEffect(() => {
    drawImage();
  }, [selectedImage, drawImage]);

  // 이미지 외부 클릭 시 바운딩박스 해제
  useEffect(() => {
    const stage = stageRef.current;
    if (stage) {
      const handleClickOutside = (e: Konva.KonvaEventObject<Event>) => {
        if (e.target === stage) {
          onFocusOut();
          setActiveImage(null);
        }
      };
      stage.on('click', handleClickOutside);

      return () => {
        stage.off('click', handleClickOutside);
      };
    }
  }, [activeImage]);

  const removeImage = () => {
    if (activeImage) {
      activeImage.destroy();
      transformerRef.current?.nodes([]);
      layerRef?.current?.draw();
      setActiveImage(null);
      setSelectedImage(null);
    }
  };

  const removeAllImages = () => {
    if (layerRef.current) {
      const children = layerRef.current.getChildren();
      const imagesToRemove: Konva.Image[] = [];

      children.forEach(child => {
        if (child instanceof Konva.Image) {
          imagesToRemove.push(child);
        }
      });

      imagesToRemove.forEach(image => {
        image.destroy();
      });

      transformerRef.current?.nodes([]);
      layerRef.current.batchDraw();

      setActiveImage(null);
      setSelectedImage(null);
    }
  };

  return (
    <>
      <S.Container>
        <S.RemoveAllButton onClick={removeAllImages}>처음부터 다시하기 ↺</S.RemoveAllButton>
        <S.Canvas id="container" ref={canvasRef} $background={CANVAS.background}>
          {activeImage && (
            <S.RemoveButton id="remove-button" onClick={removeImage}>
              이미지 제거
            </S.RemoveButton>
          )}
        </S.Canvas>
      </S.Container>
    </>
  );
});

export default Canvas;

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    position: relative;
    gap: 6rem;
    height: fit-content;
  `,

  RemoveAllButton: styled.button`
    position: absolute;
    top: -3rem;
    left: calc(50% - 16rem / 2);
    cursor: pointer;
    width: fit-content;
    color: #938e87;
    font-weight: 800;
  `,

  Canvas: styled.div<{ $background: string }>`
    position: relative;
    background-image: ${({ $background }) => `url(${$background})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  `,

  ImageList: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  `,

  RemoveButton: styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: var(--brown700);
    opacity: 0.6;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
  `,

  DownloadButton: styled.button`
    background-color: var(--green600);
    color: white;
    padding: 12px 10px;
    cursor: pointer;
    border-radius: 5px;
  `,
};
