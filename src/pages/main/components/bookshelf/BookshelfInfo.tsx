import { TBookshelfFetchRes } from '@api/bookshelf/bookshelfRequest.type';
import profileColudImage from '@assets/icons/profile-cloud.svg';
import { useUserQuery } from '@hooks/reactQuery/useQueryUser';
import { device } from '@styles/breakpoints';
import styled, { useTheme } from 'styled-components';
interface TBookshelfInfoProps {
  buttonColor: string;
  data: TBookshelfFetchRes;
  handleOpenShare: () => void;
}

const BookshelfInfo = ({ buttonColor, data, handleOpenShare }: TBookshelfInfoProps) => {
  const { backgroundImageUrl, introduction, nickname } = data;
  const { data: userData } = useUserQuery();
  const theme = useTheme();
  const isOwner = userData?.id === data.id;

  return (
    <S.BookshelfInfo>
      <S.Profile>
        <S.ProfileImage src={backgroundImageUrl} alt="프로필 이미지" />
        <img src={profileColudImage} alt="프로필 구름 이미지" />
        <img src={profileColudImage} alt="프로필 구름 이미지" />
      </S.Profile>
      <S.Name>
        <p>{nickname}의&nbsp;</p>
        <p>책장이오</p>
      </S.Name>
      <S.Intro $introduction={introduction}>{introduction || '아직 책장 소개를 작성하지 않았소'}</S.Intro>
      <S.ShareButton onClick={handleOpenShare} style={{ backgroundColor: buttonColor }}>
        <p>{isOwner ? '내' : '이'} 책장 널리 알리기</p>
        <img src={theme.pcCloud} alt="책장 공유 구름 아이콘" />
      </S.ShareButton>
    </S.BookshelfInfo>
  );
};

export default BookshelfInfo;
const S = {
  BookshelfInfo: styled.div`
    position: relative;
    background-color: ${props => props.theme.introBg};
    font-family: 'Pretendard';
    width: 46.4rem;
    min-width: 46.4rem;
    display: inline-block;

    @media ${device.tablet} {
      width: 100%;
      min-width: 0;
    }
  `,

  Profile: styled.div`
    height: calc(100% - 16rem - 8rem);
    position: relative;

    & img:nth-child(2) {
      position: absolute;
      left: -5rem;
      bottom: 40%;
    }

    & img:nth-child(3) {
      position: absolute;
      right: 3rem;
      top: 25%;
    }

    @media ${device.tablet} {
      height: calc(100vh - 13rem);
      min-width: 0;

      & img:nth-child(2) {
        left: -3rem;
        bottom: 36%;
        width: 10rem;
      }

      & img:nth-child(3) {
        right: -1rem;
        top: 44%;
        width: 10rem;
      }
    }
  `,

  ProfileImage: styled.img`
    width: 100%;
    height: 100%;
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

  Intro: styled.div<{ $introduction: string | null }>`
    height: 16rem;
    padding: 1rem;
    border-bottom: 0.1rem solid ${props => props.theme.introBorder};
    color: ${({ $introduction, theme }) => ($introduction ? theme.text : theme.subText)};
    white-space: wrap;
    display: flex;
    align-items: center;
    padding: 0 3.2rem;
    line-height: 170%;

    @media ${device.tablet} {
      font-size: 1.4rem;
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
    background-color: ${props => props.theme.introBg};
    border-top-right-radius: 1.4rem;
    cursor: pointer;
    color: ${props => props.theme.shareBtnText};
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
