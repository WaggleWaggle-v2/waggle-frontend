import messageIcon from '@assets/icons/message.svg';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

type Size = 'normal' | 'large';

const TotalCount = ({ totalBookCount, size }: { totalBookCount: number; size?: Size }) => {
  return (
    <S.TotalCountBox>
      <S.MessageIcon src={messageIcon} alt="메시지 아이콘" $size={size} />
      <S.TotalCount $size={size}>{totalBookCount > 9999 ? '+9,999' : totalBookCount.toLocaleString()} 개</S.TotalCount>
    </S.TotalCountBox>
  );
};

export default TotalCount;

const S = {
  TotalCountBox: styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-left: auto;
    margin-top: auto;

    @media ${device.mobile} {
    }
  `,
  TotalCount: styled.p<{ $size?: Size }>`
    color: #2b6a1b;
    font-family: 'Pretendard';
    font-size: ${({ $size }) => ($size === 'large' ? '2rem' : '1.2rem')};
    font-weight: 600;
    line-height: 2rem;
  `,
  //Element
  MessageIcon: styled.img<{ $size?: Size }>`
    aspect-ratio: 1 /1;
    width: ${({ $size }) => ($size === 'large' ? '2.2rem' : '1.5rem')};
  `,
};
