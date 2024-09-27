import RightArrowIcon from '@components/icons/RightArrowIcon';
import { TSetting } from '@pages/myPage/constant/settingList';
import { TBook } from '@pages/myPage/mockData';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

interface TBookInfo {
  bookData: TBook;
  settingType: TSetting;
}

const BookInfo = ({ bookData, settingType }: TBookInfo) => {
  return (
    <S.Container>
      <S.BookImg src={bookData.bookImageUrl} alt={`${bookData.writter}의 책장`} />
      <S.TextContainer>
        <S.Title>
          {bookData.writter}
          {settingType === 'present' && '에게'}
        </S.Title>
        <S.Content>{bookData.letterContent}</S.Content>
      </S.TextContainer>
      <RightArrowIcon width={11} color={'#222'} style={`flex-shrink : 0; margin-left : auto;`} />
    </S.Container>
  );
};

export default BookInfo;

const S = {
  Container: styled.div`
    padding: 1.8rem 1.3rem;
    display: flex;
    gap: 1.3rem;
    align-items: center;

    &:not(:last-child) {
      border-bottom: 0.1rem solid var(--gray300);
    }
  `,
  TextContainer: styled.div`
    min-width: 0;
  `,

  // typography
  Title: styled.h4`
    color: var(--gray900);
    font-family: 'EBSHunminjeongeum';
    font-size: 2.8rem;
    font-weight: 600;
    margin-bottom: 1rem;

    @media ${device.mobile} {
      font-size: 1.8rem;
      font-weight: 700;
    }
  `,
  Content: styled.p`
    color: #535353;
    font-family: Pretendard;
    font-size: 1.4rem;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media ${device.mobile} {
      font-size: 1.2rem;
    }
  `,

  // img
  BookImg: styled.img`
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 1rem;
    object-fit: cover;
    flex-shrink: 0;

    @media ${device.mobile} {
      width: 4.6rem;
      height: 4.6rem;
      border-radius: 0.8rem;
    }
  `,
};
