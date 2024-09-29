import { TBookshelfFetchRes } from '@api/bookshelf/bookshelfRequest.type';
import TotalCount from '@pages/landing/components/BookshelfCard/components/TotalCount';
import styled from 'styled-components';

interface TKingSejongCard {
  kingData: TBookshelfFetchRes;
}

const KingSejongCard = (props: TKingSejongCard) => {
  const {
    kingData: { count, introduction, nickname, backgroundImageUrl },
  } = props;
  return (
    <S.KingSeJongCard>
      <S.BookCountLayout>
        <TotalCount totalBookCount={count} size={'large'} />
      </S.BookCountLayout>
      <S.DescriptionText className="hover-card">{introduction}</S.DescriptionText>
      <S.CardHover className="hover-card" />
      <S.KinSeJongImg src={backgroundImageUrl} alt={nickname} />
    </S.KingSeJongCard>
  );
};

export default KingSejongCard;

const S = {
  KingSeJongCard: styled.div`
    height: 55rem;
    aspect-ratio: 1 / 1.3;
    border-radius: 0.6rem;
    overflow: hidden;
    position: relative;

    &:hover .hover-card {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  `,
  CardHover: styled.div`
    position: absolute;
    width: 46.4rem;
    height: 26rem;
    bottom: 0;
    z-index: 1;
    opacity: 0;
    background: linear-gradient(180deg, rgba(34, 34, 34, 0) 15.85%, rgba(34, 34, 34, 0.44) 37.17%, #222 100%);
    mix-blend-mode: multiply;
    transition: opacity 0.3s ease-in-out;
  `,
  KinSeJongImg: styled.img`
    width: 100%;
    height: 100%;
  `,
  DescriptionText: styled.p`
    color: var(--white);
    font-family: 'Pretendard';
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 150%;
    position: absolute;
    bottom: 4rem;
    left: 4rem;
    right: 4rem;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  `,
  BookCountLayout: styled.div`
    position: absolute;
    right: 2rem;
    top: 2rem;
  `,
};
