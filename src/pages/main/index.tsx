import testMainImage from '@assets/images/test-main.jpg';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import styled from 'styled-components';
import AdditionalSetup from './components/AdditionalSetup';

const Main = () => {
  const isNewUser = true;

  return (
    <S.Container style={{ backgroundImage: `url(${testMainImage})` }}>{isNewUser && <AdditionalSetup />}</S.Container>
  );
};

export default Main;

const S = {
  Container: styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left;
    position: relative;
    height: calc(100vh - ${HEADER_HEIGHT.PC});
    background-color: var(--green100);
    @media ${device.tablet} {
      height: calc(100vh - ${HEADER_HEIGHT.MOBILE});
    }
    @media ${device.mobile} {
      height: calc(100vh - ${HEADER_HEIGHT.MOBILE});
    }
  `,
};
