import cloudIcon from '@assets/icons/cloud-green.svg';
import { BOOKSHELF_DATA, USER_DATA } from '@constants/mock';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

interface TBookshelfInfoProps {
  buttonColor: string;
}

const BookshelfInfo = ({ buttonColor }: TBookshelfInfoProps) => {
  // params 의 bookshelf uuid 를통해 user_id 조회 가능
  const { nickname } = USER_DATA;
  const { background_image_url, shelf_introduction } = BOOKSHELF_DATA;

  return (
    <S.BookshelfInfo>
      <S.ProfileImage src={background_image_url} />
      <S.Name>
        <p>{nickname}의&nbsp;</p>
        <p>책장이오</p>
      </S.Name>
      <S.Intro>{shelf_introduction}</S.Intro>
      <S.ShareButton style={{ backgroundColor: buttonColor }}>
        <p>내 책장 널리 알리기</p>
        <img src={cloudIcon} alt="책장 공유 구름 아이콘" />
      </S.ShareButton>
    </S.BookshelfInfo>
  );
};

export default BookshelfInfo;
const S = {
  BookshelfInfo: styled.div`
    position: relative;
    background-color: var(--white);
    font-family: 'Pretendard';
    width: 46.4rem;
    min-width: 46.4rem;
    display: inline-block;

    @media ${device.tablet} {
      width: 100%;
      min-width: 0;
    }
  `,

  ProfileImage: styled.img`
    width: 100%;
    height: calc(100% - 16rem - 8rem);
    object-fit: cover;
    @media ${device.tablet} {
      height: 100%;
      min-width: 0;
    }
  `,

  Name: styled.div`
    font-family: 'EBSHunminjeongeum';
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    color: var(--brown50);
    font-size: 3.8rem;
    top: 11rem;
    left: 4rem;
    line-height: 150%;

    @media ${device.tablet} {
      flex-direction: row;
      font-size: 2.8rem;
      line-height: 3.2rem;
      top: 9rem;
      left: 2rem;
      right: 2rem;
    }
  `,

  Intro: styled.div`
    height: 16rem;
    padding: 1rem;
    font-size: 1.6rem;
    border-bottom: 0.1rem solid #316920;
    white-space: wrap;
    display: flex;
    align-items: center;
    padding: 0 3.2rem;
    line-height: 170%;

    @media ${device.tablet} {
      height: fit-content;
      position: absolute;
      top: 0;
      border: none;
      color: var(--brown50);
      padding: 0 2rem;
      top: 14rem;
      left: 0rem;
      right: 0rem;
    }
  `,

  ShareButton: styled.button`
    z-index: 0;
    background-color: var(--white);
    border-top-right-radius: 1.4rem;
    cursor: pointer;
    color: #316920;
    position: fixed;
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    padding: 0 3rem;
    width: calc(46.4rem - 3rem * 2);
    img {
      @media ${device.tablet} {
        width: 2.8rem;
      }
    }

    @media ${device.tablet} {
      display: none;
    }
  `,
};
