import { Dispatch, SetStateAction } from 'react';
import lockerImage from '@assets/icons/locker-red.svg';
import { BOOK_PUBLICITY } from '@constants/publicity';
import { device } from '@styles/breakpoints';
import { getCookie } from '@utils/cookie';
import styled from 'styled-components';

interface TSetPublicityProps {
  publicity: boolean;
  setPublicity: Dispatch<SetStateAction<boolean>>;
}

const SetPublicity = ({ publicity, setPublicity }: TSetPublicityProps) => {
  const token = getCookie('accessToken');

  const handlePublicityClick = (publicity: boolean) => {
    if (!token && publicity === false) return;
    setPublicity(publicity);
  };

  const selectedPublicity = BOOK_PUBLICITY.find(pub => pub.value === publicity);

  return (
    <S.Container>
      {!token && (
        <S.NoTokenUserText>
          <img src={lockerImage} />
          <p>
            비회원은 <u>방명록 삭제 / 비공개 기능</u>을 <br />
            제공하지 않습니다!
          </p>
        </S.NoTokenUserText>
      )}
      {/* 버튼 리스트 */}
      <S.ButtonListWrapper>
        {BOOK_PUBLICITY.map(pub => (
          <S.PublicityButton
            key={pub.text}
            onClick={() => handlePublicityClick(pub.value)}
            $isSelected={publicity === pub.value}
            $hasSelected={!!publicity}
            $isDisabled={!token && pub.value === false}>
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
    position: relative;
    margin: 5rem 0;
    height: 40rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;

    @media ${device.tablet} {
      width: fit-content;
      height: 40dvh;
    }

    @media ${device.mobile} {
      width: 100%;
    }
  `,

  NoTokenUserText: styled.div`
    color: ${({ theme }) => theme.subText};
    font-family: 'Pretendard';
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    line-height: 140%;
    img {
      width: 2.6rem;
    }
  `,

  ButtonListWrapper: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    @media ${device.tablet} {
      flex-direction: row;
    }
    @media ${device.mobile} {
      flex-direction: column;
    }
  `,

  PublicityButton: styled.li<{ $isSelected: boolean; $hasSelected: boolean; $isDisabled: boolean }>`
    font-family: 'EBSHunminjeongeum';
    cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};
    opacity: ${({ $isDisabled }) => ($isDisabled ? 0.4 : 1)};
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
    font-weight: 600;
    color: var(--green700);
    margin-bottom: 1rem;
    @media ${device.mobile} {
      font-size: 2rem;
    }
  `,

  DescriptionSub: styled.div`
    font-size: 1.8rem;
    color: gray;
    @media ${device.mobile} {
      font-size: 1.6rem;
    }
  `,
};
