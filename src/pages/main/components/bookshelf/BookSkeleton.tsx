import styled from 'styled-components';

interface TBookSkeletonProps {
  totalNum: number;
}

const BookSkeleton = ({ totalNum }: TBookSkeletonProps) => {
  const totalColumns = Math.floor(totalNum); // 총 6번 반복 (1번 3번, 2번 3번)

  return (
    <S.GuestBookWrapper>
      {[...Array(totalColumns)].map((_, index) =>
        index % 2 === 0 ? ( // 짝수 인덱스일 때 1번 ColumnWrapper
          <S.ColumnWrapper key={index}>
            <S.Column>
              <S.ShortBookItem></S.ShortBookItem>
              <S.ShortBookItem></S.ShortBookItem>
            </S.Column>
          </S.ColumnWrapper>
        ) : (
          // 홀수 인덱스일 때 2번 ColumnWrapper
          <S.ColumnWrapper key={index}>
            <S.Column>
              <S.LongBookItem></S.LongBookItem>
            </S.Column>
          </S.ColumnWrapper>
        ),
      )}
    </S.GuestBookWrapper>
  );
};

export default BookSkeleton;

const S = {
  GuestBookWrapper: styled.div`
    display: flex;
    gap: 2rem;
  `,

  ColumnWrapper: styled.div`
    position: relative;
    width: 100%;
  `,

  Column: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 46.4rem;
    gap: 1.3rem;
  `,

  ShortBookItem: styled.div`
    width: 22rem;
    height: 21.6rem;
    ${({ theme }) => theme.skeletonAnimation}
  `,

  LongBookItem: styled.div`
    width: 22rem;
    height: 100%;
    ${({ theme }) => theme.skeletonAnimation}
  `,
};
