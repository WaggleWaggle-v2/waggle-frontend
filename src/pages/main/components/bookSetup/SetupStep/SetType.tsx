import { SetStateAction } from 'react';
import { BOOK } from '@pages/main/constants/book';
import { TBookType } from '@pages/main/types/type';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

interface TSetTypeProps {
  setType: React.Dispatch<SetStateAction<'SMALL' | 'BIG'>>;
  type: 'SMALL' | 'BIG';
}

const SetType = ({ type, setType }: TSetTypeProps) => {
  const handleBookClick = (type: 'SMALL' | 'BIG') => {
    setType(type);
  };

  return (
    <S.Container>
      {BOOK.map(bookItem => (
        <S.BookItem
          key={bookItem.type}
          onClick={() => handleBookClick(bookItem.type as TBookType)}
          $isSelected={type === bookItem.type}
          $hasSelected={!!type}>
          <img src={bookItem.image} />
          <S.Text>{bookItem.text}</S.Text>
        </S.BookItem>
      ))}
    </S.Container>
  );
};

export default SetType;

const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    margin: 5.5rem 0 8.5rem;
    gap: 5rem;
    width: 100%;
    @media ${device.mobile} {
      gap: 2rem;
    }
  `,

  BookItem: styled.li<{ $isSelected: boolean; $hasSelected: boolean }>`
    opacity: ${({ $isSelected, $hasSelected }) => ($hasSelected ? ($isSelected ? 1 : 0.4) : 1)};
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 17rem;
    height: 36rem;
    position: relative;
    img {
      border: ${({ $isSelected, $hasSelected }) => $hasSelected && $isSelected && 0.4}rem solid var(--green600);
    }
    @media ${device.mobile} {
      width: 13rem;
    }
  `,

  Text: styled.p`
    position: absolute;
    font-family: 'ChosunCentennial';
    font-size: 8rem;
    color: var(--green600);
    left: calc(50% - 3.6rem);
  `,
};
