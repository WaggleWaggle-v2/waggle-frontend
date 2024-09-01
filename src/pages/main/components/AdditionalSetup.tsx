import { useState } from 'react';
import { device } from '@styles/breakpoints';
import { zIndex } from '@styles/zIndex';
import styled, { keyframes } from 'styled-components';
import AdditionalSetupModal from './AdditionalSetupModal';
import InitAdditionalSetupModal from './InitAdditionalSetupModal';

const AdditionalSetup = () => {
  const [doSetup, setDoSetup] = useState(false); //추가 꾸미기 진행 여부
  const [isOpen, setIsOpen] = useState(true); // 전체 모달 열림 여부

  return (
    <>
      {isOpen &&
        (!doSetup ? (
          <>
            <S.InitBackground></S.InitBackground> {/* 모달 배경과 설정 동기화 해야 함 */}
            <S.InitWrapper>
              <InitAdditionalSetupModal setDoSetup={setDoSetup} setIsOpen={setIsOpen} />
            </S.InitWrapper>
          </>
        ) : (
          <S.AdditionalSetupWrapper>
            <AdditionalSetupModal setIsOpen={setIsOpen} />
          </S.AdditionalSetupWrapper>
        ))}
    </>
  );
};

export default AdditionalSetup;

export const popup = keyframes`
  0%{
    transform: translateY(32rem)
  }

  100%{
    transform: translateY(0)
    }
`;

const S = {
  InitBackground: styled.div`
    --nav-width: -9.6rem;
    position: absolute;
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

  AdditionalSetupWrapper: styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    @media ${device.tablet} {
      background-color: var(--background);
    }
  `,
};
