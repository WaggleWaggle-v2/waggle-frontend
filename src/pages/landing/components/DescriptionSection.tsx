import { device } from '@styles/breakpoints';
import styled from 'styled-components';

const DescriptionSection = () => {
  return (
    <S.Container>
      <S.SubText>와글와글의 사전적 의미는</S.SubText>
      <S.HighlightText>'사람이 한곳에 많이 모여 잇따라 떠들거나 &nbsp; 움직이는 소리 또는 그 모양'</S.HighlightText>
      <S.SubText>
        이라는 의미를 담고있어 이곳에서 많은 사람들이 &nbsp; 한글날을 기억하며, '와글와글' 떠들기 바랍니다.
      </S.SubText>
    </S.Container>
  );
};

export default DescriptionSection;

const S = {
  // Layout
  Container: styled.div`
    @media ${device.tablet} {
      text-align: center;
      max-width: 43rem;
      width: 100%;
    }
  `,
  // Typography
  SubText: styled.p`
    color: #222;
    font-family: 'Pretendard';
    font-size: 2.2rem;
    line-height: 170%;
  `,
  HighlightText: styled.span`
    color: #222;
    font-family: 'EBSHMJESaeron';
    font-size: 2.2rem;
    line-height: 170%;
    font-weight: bold;
  `,
};
