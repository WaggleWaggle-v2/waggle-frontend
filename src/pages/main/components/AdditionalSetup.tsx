import React, { useState } from 'react';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import AdditionalSetupModal from './AdditionalSetupModal';
import InitAdditionalSetupModal from './InitAdditionalSetupModal';

const AdditionalSetup = () => {
  const [doSetup, setDoSetup] = useState(false); //추가 꾸미기 진행 여부

  return (
    <React.Fragment>
      {!doSetup ? (
        <S.InitWrapper>
          <InitAdditionalSetupModal setDoSetup={setDoSetup} />
        </S.InitWrapper>
      ) : (
        <S.AdditionalSetupWrapper>
          <AdditionalSetupModal />
        </S.AdditionalSetupWrapper>
      )}
    </React.Fragment>
  );
};

export default AdditionalSetup;

const S = {
  Container: styled.div``,

  InitWrapper: styled.div`
    background-color: var(--background);
    @media ${device.mobile} {
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
    @media ${device.mobile} {
      background-color: var(--background);
    }
  `,
};
