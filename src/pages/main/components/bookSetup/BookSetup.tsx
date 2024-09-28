import React, { SetStateAction, useState } from 'react';
import usePageWidth from '@hooks/usePageWidth';
import { device, size } from '@styles/breakpoints';
import { zIndex } from '@styles/zIndex';
import { getCookie } from '@utils/cookie';
import styled from 'styled-components';
import BookSetupModal from './BookSetupModal';
import InitBookSetupModal from './InitBookSetupModal';
import { popup } from '../additionalSetup/AdditionalSetup';

interface TBookSetupProps {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

// 비로그인 유저일 시 init 모달 먼저 보여주기
//      - 로그인 선택 -> 로그인 페이지로 redirect
//      - 그냥 작성 선택 -> setup 모달 보여주기
// 로그인 유저일 시 setup 모달 바로 보여주기

const BookSetup = ({ setIsOpen }: TBookSetupProps) => {
  const accessToken = getCookie('accessToken');
  const pageWidth = usePageWidth();
  const [doSetup, setDoSetup] = useState(false); // 비로그인 유저의 setup 진행 여부
  const isLoginUser = !!accessToken; // init 모달 출현 여부

  if (isLoginUser) {
    return (
      <S.BookSetupWrapper>
        <BookSetupModal setIsOpen={setIsOpen} />
      </S.BookSetupWrapper>
    );
  }

  return (
    <>
      {doSetup ? (
        <S.BookSetupWrapper>
          <BookSetupModal setIsOpen={setIsOpen} />
        </S.BookSetupWrapper>
      ) : (
        <>
          {pageWidth <= size.tablet && <S.InitBackground></S.InitBackground>}
          <S.InitWrapper>
            <InitBookSetupModal setDoSetup={setDoSetup} setIsOpen={setIsOpen} />
          </S.InitWrapper>
        </>
      )}
    </>
  );
};

export default BookSetup;

const S = {
  InitBackground: styled.div`
    --nav-width: -9.6rem;
    position: fixed;
    z-index: calc(${zIndex.header});
    top: calc(var(--nav-width));
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(0.2rem);
  `,

  InitWrapper: styled.div`
    background-color: var(--background);
    z-index: calc(${zIndex.header} + 1);
    @media ${device.tablet} {
      animation: ${popup} 0.5s forwards;
      padding: 6.4rem 2rem 4rem 2rem;
      border-radius: 1rem 1rem 0 0;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  `,

  BookSetupWrapper: styled.div`
    z-index: ${zIndex.modal + 300};
    @media ${device.tablet} {
      position: absolute;
      inset: 0;
      background-color: ${props => props.theme.modalBg};
    }
  `,
};
