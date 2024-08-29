/* eslint-disable no-unused-vars */

import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import { PUBLICITY_SELECT } from '../constants/publicitySelect';
import { TPublicity } from '../types/type';

interface TSetPublicityProps {
  setPublicity: (value: TPublicity) => void;
  publicity: TPublicity;
}

const SetPublicity = ({ setPublicity, publicity }: TSetPublicityProps) => {
  const handleSelectorClick = (value: TPublicity) => {
    setPublicity(value);
  };

  return (
    <S.Container>
      <S.SelectorWrapper>
        {PUBLICITY_SELECT.map(pub => (
          <S.PublicitySelector
            key={pub.value}
            onClick={() => handleSelectorClick(pub.value as TPublicity)}
            $isSelected={publicity === pub.value}
            $hasSelected={!!publicity}>
            <S.ImageWrapper>
              <img src={pub.image} />
            </S.ImageWrapper>
            <p>
              {pub.text}
              <br />
              공개 하겠소
            </p>
          </S.PublicitySelector>
        ))}
      </S.SelectorWrapper>

      {publicity === 'public' && (
        <S.PublicityGuideText>
          <p>와글와글 메인에 랜덤으로 공개 됩니다.</p>
          <p>모든 사람이 방명록 갯수랑 공개된 방명록을 볼 수 있어요.</p>
        </S.PublicityGuideText>
      )}

      {publicity === 'friendsOnly' && (
        <S.PublicityGuideText>
          <p>링크로 초대된 사람만 볼 수 있습니다</p>
          <p>초대된 사람만 방명록 갯수랑 공개된 방명록을 볼 수 있어요.</p>
        </S.PublicityGuideText>
      )}
    </S.Container>
  );
};

export default SetPublicity;

const S = {
  Container: styled.div`
    margin: 4rem 0 6rem;
  `,

  SelectorWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
    cursor: pointer;
    @media ${device.mobile} {
      gap: 1.6rem;
    }
  `,

  PublicitySelector: styled.div<{ $isSelected: boolean; $hasSelected: boolean }>`
    opacity: ${({ $isSelected, $hasSelected }) => ($hasSelected ? ($isSelected ? 1 : 0.4) : 1)};
    padding: 3.3rem 1.9rem;
    border: 1px solid var(--green600);
    border-radius: 2px;
    @media ${device.mobile} {
      padding: 1.6rem 1.1rem 2.8rem;
    }

    p {
      text-align: center;
      line-height: 150%;
      font-size: 1.8rem;
      font-weight: 900;
      @media ${device.mobile} {
        font-size: 1.6rem;
      }
    }
  `,

  ImageWrapper: styled.div`
    width: 18rem;
    height: 10rem;
    margin-bottom: 2.4rem;
    @media ${device.mobile} {
      width: 13rem;
      height: 7.4rem;
    }
  `,

  PublicityGuideText: styled.div`
    font-family: 'Pretendard';
    margin-top: 3rem;
    p {
      &:first-child {
        font-size: 2.4rem;
        font-weight: 600;
        color: var(--green700);
        margin-bottom: 1.2rem;
        @media ${device.mobile} {
          font-size: 1.6rem;
        }
      }
      &:last-child {
        font-size: 2rem;
        color: var(--gray700);
        @media ${device.mobile} {
          font-size: 1.3rem;
        }
      }
    }
  `,
};
