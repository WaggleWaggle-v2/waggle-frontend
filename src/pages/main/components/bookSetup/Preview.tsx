import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import styled from 'styled-components';

const Preview = () => {
  return <S.Container>미리보기</S.Container>;
};

export default Preview;

const S = {
  Container: styled.div`
    background-color: #e5ddcf;
    width: 464px;
    height: 100%;

    @media ${device.tablet} {
      margin-top: calc(${HEADER_HEIGHT.MOBILE} + 5px);
    }
    @media ${device.mobile} {
      margin-top: 0;
      height: 40rem;
    }
  `,
};
