import nameTagImage from '@assets/images/bookshelf/name-tag.png';
import { TBookItem } from '@constants/mock';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

interface TBookItemprops {
  data: TBookItem;
}

const BookItem = ({ data }: TBookItemprops) => {
  const { type, image, nickname } = data;
  return (
    <S.Book>
      <img src={image} alt={`${nickname}-${type}`} />
      <S.NameTag>
        <img src={nameTagImage} alt="sender-nametag" />
        <p>{nickname}</p>
      </S.NameTag>
    </S.Book>
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
