/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { Dispatch, useRef, useState } from 'react';
import ModalTemplate from '@components/template/ModalTemplate';
import ProgressBar from '@components/template/ProgressBar';
import SettingTemplate from '@components/template/SettingTemplate';
import { BOOK_SETUP_TOTAL_STEP } from '@constants/setupTotalStep';
import { useBookCreateMutation } from '@hooks/reactQuery/useQueryBook';
import { useBookshelfQuery } from '@hooks/reactQuery/useQueryBookshelf';
import usePageWidth from '@hooks/usePageWidth';
import { TBookType } from '@pages/main/types/type';
import { device, size } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { getFormattedDate } from '@utils/getFormattedDate';
import html2canvas from 'html2canvas';
import { useParams } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import Canvas from './Canvas';
import Preview from './Preview';
import SetCanvas from './SetupStep/SetCanvas';
import SetPost from './SetupStep/SetPost';
import SetPublicity from './SetupStep/SetPublicity';
import SetSender from './SetupStep/SetSender';
import SetType from './SetupStep/SetType';
import BookScollPaper from '../bookshelf/BookScollPaper';

interface TAdditionalSetupModalProps {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

const BookSetupModal = ({ setIsOpen }: TAdditionalSetupModalProps) => {
  const { id } = useParams();
  const theme = useTheme();
  const { data } = useBookshelfQuery(id);
  const isSejong = id === '세종대왕ID';

  const canvasRef = useRef<any>(null);
  const pageWidth = usePageWidth();
  const [step, setStep] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);

  const [type, setType] = useState<TBookType>('SHORT');
  const [canvas, setCanvas] = useState<File | null>(null);
  const [post, setPost] = useState<string>('');
  const [sender, setSender] = useState<string>('');
  const [publicity, setPublicity] = useState<boolean>(true);

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const mutation = useBookCreateMutation();

  const handleMoveToNextStep = () => {
    setStep(prev => prev + 1);
  };

  const handleFinalStep = async () => {
    const formData = {
      file: canvas as File,
      nickname: sender,
      isOpen: publicity,
      bookshelfId: id as string,
      description: post,
      bookType: type,
    };

    await mutation.mutateAsync(formData);

    setIsOpen(false);
    location.reload();
  };

  const handleCanvasUpdateClick = async () => {
    if (canvasRef.current) {
      canvasRef.current.onFocusOut();
    }

    const canvasElement = document.getElementById('container') as HTMLDivElement;
    if (canvasElement) {
      const removeButton = document.getElementById('remove-button');
      if (removeButton) {
        removeButton.style.display = 'none';
      }

      try {
        const canvasSnapshot = await html2canvas(canvasElement, { backgroundColor: null });
        const dataUrl = canvasSnapshot.toDataURL('image/png');
        const response = await fetch(dataUrl);
        const blob = await response.blob();
        const file = new File([blob], 'canvas-image.png', { type: 'image/png' });

        setCanvas(file);
        const imageUrl = URL.createObjectURL(file);
        setImagePreview(imageUrl);

        handleMoveToNextStep();
      } catch (error) {
        console.error('Error generating image from canvas:', error);
      }
    }
  };

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
  };

  return (
    <S.Container>
      <ModalTemplate setIsOpen={setIsOpen} setStep={setStep} step={step}>
        {pageWidth > size.tablet && step !== 1 && (
          <S.GoBackIcon
            src={theme.backBtn}
            onClick={() => {
              step === 1 ? setIsOpen(false) : setStep?.(prev => prev - 1);
            }}
            alt="뒤로 가기"
          />
        )}
        {step === 1 && (
          <SettingTemplate
            step={step}
            titleTop="책장 크기를&nbsp;"
            titleBottom="선택해주시오."
            handleButtonClick={handleMoveToNextStep}
            isDisabled={false}>
            <SetType type={type} setType={setType} />
          </SettingTemplate>
        )}

        {step === 2 && (
          <S.SettingWrapper>
            {pageWidth > size.mobile && (
              <Preview>
                <Canvas
                  ref={canvasRef}
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                  type={type}
                  pageWidth={pageWidth}
                />
              </Preview>
            )}
            <SettingTemplate
              step={step}
              titleTop="책장을 꾸며주시오."
              ButtonSubText="해당 단계에서 다음으로 넘어가게 되면, 수정이 불가합니다."
              handleButtonClick={handleCanvasUpdateClick}
              isDisabled={false}
              isPreview>
              <SetCanvas handleImageClick={handleImageClick} />
              {pageWidth <= size.mobile && (
                <Preview>
                  <Canvas
                    ref={canvasRef}
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                    type={type}
                    pageWidth={pageWidth}
                  />
                </Preview>
              )}
            </SettingTemplate>
          </S.SettingWrapper>
        )}

        {step === 3 && (
          <S.SettingWrapper>
            <Preview noTablet>
              {imagePreview && <S.PreviewImg src={imagePreview} $type={type} alt="Canvas Preview" />}
            </Preview>
            <SettingTemplate
              step={step}
              titleTop="마음을 전하시오."
              handleButtonClick={handleMoveToNextStep}
              isDisabled={isDisabled}>
              <SetPost setPost={setPost} setIsDisabled={setIsDisabled} post={post} />
            </SettingTemplate>
          </S.SettingWrapper>
        )}

        {step === 4 && (
          <S.SettingWrapper>
            <Preview noTablet>{data && <BookScollPaper isPreview ownerName={data.nickname} content={post} />}</Preview>
            <SettingTemplate
              step={step}
              titleTop="이름을 남겨주시오."
              handleButtonClick={isSejong ? handleFinalStep : handleMoveToNextStep}
              isDisabled={isDisabled}
              buttonText={isSejong ? '방명록 남기기' : undefined}>
              <SetSender sender={sender} setSender={setSender} setIsDisabled={setIsDisabled} />
            </SettingTemplate>
          </S.SettingWrapper>
        )}

        {step === 5 && (
          <S.SettingWrapper>
            <Preview noTablet>
              {data && (
                <BookScollPaper
                  isPreview
                  ownerName={data?.nickname}
                  content={post}
                  createdAt={getFormattedDate(undefined)}
                  sender={sender}
                />
              )}
            </Preview>
            <SettingTemplate
              step={step}
              titleTop="방명록을 공개하겠소?"
              handleButtonClick={handleFinalStep}
              isDisabled={isDisabled}
              buttonText="방명록 남기기">
              <SetPublicity publicity={publicity} setPublicity={setPublicity} />
            </SettingTemplate>
          </S.SettingWrapper>
        )}
      </ModalTemplate>
      <ProgressBar totalStep={BOOK_SETUP_TOTAL_STEP} currentStep={step} />
    </S.Container>
  );
};

export default BookSetupModal;

const S = {
  Container: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    @media ${device.tablet} {
      margin-top: ${HEADER_HEIGHT.MOBILE};
    }
  `,

  GoBackIcon: styled.img`
    width: 2.1rem;
    height: 2.1rem;
    cursor: pointer;
    position: absolute;
    top: 4.4rem;
    left: 4.6rem;
    z-index: 9999;
  `,

  SettingWrapper: styled.div`
    display: flex;
    width: 100%;
  `,

  PreviewImg: styled.img<{ $type: TBookType }>`
    height: ${({ $type }) => ($type === 'SHORT' ? '40rem' : '54.4rem')};
  `,
};
