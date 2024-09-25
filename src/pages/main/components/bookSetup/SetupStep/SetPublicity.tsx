import { Dispatch, SetStateAction } from 'react';
import { BOOK_PUBLICITY } from '@constants/publicity';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

interface TSetPublicityProps {
  publicity: boolean;
  setPublicity: Dispatch<SetStateAction<boolean>>;
}

const SetPublicity = ({ publicity, setPublicity }: TSetPublicityProps) => {
  const handlePublicityClick = (publicity: boolean) => {
    setPublicity(publicity);
  };

  const selectedPublicity = BOOK_PUBLICITY.find(pub => pub.value === publicity);

  return (
    <S.Container>
      {/* 버튼 리스트 */}
      <S.ButtonListWrapper>
        {BOOK_PUBLICITY.map(pub => (
          <S.PublicityButton
            key={pub.text}
            onClick={() => handlePublicityClick(pub.value)}
            $isSelected={publicity === pub.value}
            $hasSelected={!!publicity}>
            {pub.text}
          </S.PublicityButton>
        ))}
      </S.ButtonListWrapper>

      {/* 설명 */}
      {selectedPublicity && (
        <S.DescriptionWrapper>
          <S.DescriptionMain>{selectedPublicity.description_main}</S.DescriptionMain>
          <S.DescriptionSub>{selectedPublicity.description_sub}</S.DescriptionSub>
        </S.DescriptionWrapper>
      )}
    </S.Container>
  );
};

export default SetPublicity;

const S = {
  Container: styled.div`
    margin: 5rem 0;
    height: 40rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;

    @media ${device.tablet} {
      justify-content: start;
    }
  `,

  ButtonListWrapper: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  `,

  PublicityButton: styled.li<{ $isSelected: boolean; $hasSelected: boolean }>`
    font-family: 'EBSHunminjeongeum';
    cursor: pointer;
    padding: 1.2rem 2rem;
    border-radius: 10rem;
    width: fit-content;
    font-size: 1.8rem;
    font-weight: 600;

    background-color: ${({ $isSelected }) => ($isSelected ? 'var(--green600)' : '#E5E5E5')};
    color: ${({ $isSelected }) => ($isSelected ? 'var(--white)' : 'var(--gray700)')};
  `,

  DescriptionWrapper: styled.div`
    font-family: 'Pretendard';
  `,

  DescriptionMain: styled.div`
    font-size: 2.2rem;
    color: var(--green700);
    margin-bottom: 1rem;
  `,

  DescriptionSub: styled.div`
    font-size: 1.8rem;
    color: gray;
  `,
};
