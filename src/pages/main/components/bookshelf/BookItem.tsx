import { useState } from 'react';
import { TBookItem } from '@api/book/bookRequest.type';
import lockerImage from '@assets/icons/locker.svg';
import nameTagImage from '@assets/images/bookshelf/name-tag.svg';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import BookScrollModal from './BookScrollModal';

interface TBookItemprops {
  data: TBookItem;
}

const BookItem = ({ data }: TBookItemprops) => {
  const [isOpen, setIsOpen] = useState(false);
  const { bookType, bookImageUrl, nickname, open } = data;

  const handleBookClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      {isOpen && <BookScrollModal setIsOpen={setIsOpen} bookId={data.id} />}
      <S.Book onClick={handleBookClick}>
        <img src={bookImageUrl} alt={`${nickname}-${bookType}`} />
        <S.NameTag>
          {open ? <img src={nameTagImage} alt="sender-nametag" /> : <img src={lockerImage} alt="sender-nametag" />}
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
      }
    }

    @media ${device.mobile} {
      width: calc(100% / 2);
    }
  `,

  NameTag: styled.div`
    border: 0.1rem solid var(--brown700);
    color: #6a5444;
    background-color: rgba(240, 232, 217, 0.7);
    backdrop-filter: blur(0.1rem);
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    gap: 0.8rem;
    padding: 0 1.5rem;
    height: 3.6rem;
    border-radius: 10rem;
    position: absolute;
    font-weight: 600;
    top: 1rem;
    right: 1rem;
    img {
      width: 1.8rem;
    }
    @media ${device.tablet} {
      font-size: 1.4rem;
      gap: 0.6rem;
      padding: 0 1rem;
      height: 2.8rem;
      line-height: 150%;
      img {
        width: 1.4rem;
      }
    }
  `,
};
