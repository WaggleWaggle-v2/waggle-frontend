import { useState } from 'react';
import { TBookItem } from '@api/book/bookRequest.type';
import nameTagImage from '@assets/images/bookshelf/name-tag.png';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import BookScrollModal from './BookScrollModal';

interface TBookItemprops {
  data: TBookItem;
  ownerName: string;
}

const BookItem = ({ data, ownerName }: TBookItemprops) => {
  const [isOpen, setIsOpen] = useState(false);
  const { bookType, bookImageUrl, nickname } = data;

  return (
    <>
      {isOpen && <BookScrollModal setIsOpen={setIsOpen} data={data} ownerName={ownerName} />}
      <S.Book onClick={() => setIsOpen(true)}>
        <img src={bookImageUrl} alt={`${nickname}-${bookType}`} />
        <S.NameTag>
          <img src={nameTagImage} alt="sender-nametag" />
          <p>{nickname}</p>
        </S.NameTag>
      </S.Book>
    </>
  );
};

export default BookItem;
const S = {
  Book: styled.div`
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 22rem;
    z-index: 1;

    @media ${device.tablet} {
      position: absolute;
      width: calc(100% / 3);
      img {
        width: 100%;
        height: auto;
      }
    }

    @media ${device.mobile} {
      width: calc(100% / 2);
    }
  `,

  NameTag: styled.div`
    border: 0.1rem solid var(--brown500);
    color: var(--brown500);
    background-color: rgba(244, 221, 172, 0.5);
    backdrop-filter: blur(0.3rem);
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    gap: 0.8rem;
    padding: 0.9rem 1.5rem;
    border-radius: 10rem;
    position: absolute;
    font-weight: 600;
    top: 1rem;
    right: 1rem;
    img {
      width: 1.8rem;
    }
    @media ${device.tablet} {
      font-size: 1.5rem;
      gap: 0.6rem;
      padding: 0.7rem 1rem;
      img {
        width: 1.4rem;
      }
    }
  `,
};
