import { TSendBookListRes } from '@api/book/bookRequest.type';
import RightArrowIcon from '@components/icons/RightArrowIcon';
import { TSetting } from '@pages/myPage/constant/settingList';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

interface TBookInfo {
  bookData: TSendBookListRes;
  settingType: TSetting;
}

const BookInfo = ({ bookData, settingType }: TBookInfo) => {
  return (
    <S.Container>
      {settingType === 'send' && (
        <S.BookImg src={bookData ? bookData.backgroundImageUrl : ''} alt={`${bookData}의 책장`} />
      )}
      <S.TextContainer>
        <S.Title>
          {bookData.nickname}
          {settingType === 'send' && '에게'}
        </S.Title>
        <S.Content>{bookData.description}</S.Content>
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
