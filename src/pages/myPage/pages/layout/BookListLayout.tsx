import { ReactNode, RefObject } from 'react';
import RightArrowIcon from '@components/icons/RightArrowIcon';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import SortingBox from '@pages/myPage/components/bookListSection/components/sortingBox';
import GoBackButton from '@pages/myPage/components/profileSection/components/GoBackButton';
import { TSetting } from '@pages/myPage/constant/settingList';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TSortingOption } from './sendBookList';

interface TBookListLayout {
  children: ReactNode;
  nickName: string;
  sortingOption: TSortingOption;
  handleSelectOption: (option: TSortingOption) => void;
  lastCardRef: RefObject<HTMLDivElement>;
  totalCount: number;
  bookType: TSetting;
}

const BookListLayout = (props: TBookListLayout) => {
  const { children, nickName, lastCardRef, sortingOption, bookType, handleSelectOption, totalCount } = props;
  const navigate = useNavigate();
  const { isVisible: isFirstVisible, targetRef: scrollRef } = useIntersectionObserver<HTMLDivElement>({ threshold: 0 });

  return (
    <S.PageContainer>
      <S.Container>
        <S.ProfileContainer>
          <div>
            <S.TitleText>
              <S.NickNameText>{nickName}</S.NickNameText> 님,
            </S.TitleText>
            <S.TitleText>
              방명록을 이만큼 <br />
              {bookType === 'send' ? '보냈다오' : '받았다오.'}
            </S.TitleText>
            <S.SubText>
              총 <S.Count>{totalCount}</S.Count>개를 {bookType === 'send' ? '보냈소.' : '받았소.'}
            </S.SubText>
          </div>
          <GoBackButton
            onClick={() => {
              navigate('/myPage');
            }}
          />
        </S.ProfileContainer>
        <S.EditContainer>
          <S.Header>
            <S.HeaderTextContainer>
              마이페이지 <RightArrowIcon width={10} height={9} color={'#999999'} />
              {bookType === 'send' ? '남긴 방명록' : '받은 방명록'}
            </S.HeaderTextContainer>
            <SortingBox handleSelectOption={handleSelectOption} selectOption={sortingOption} />
          </S.Header>
          <S.ListContainer $isScroll={!isFirstVisible}>
            <S.BookObserver ref={scrollRef} />
            {children}
            <S.LastBookObserver ref={lastCardRef} />
          </S.ListContainer>
        </S.EditContainer>
      </S.Container>
    </S.PageContainer>
  );
};

export default BookListLayout;

const S = {
  PageContainer: styled.div`
    width: 100dvw;
    height: calc(100dvh - ${HEADER_HEIGHT.PC});
    margin-top: ${HEADER_HEIGHT.PC};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${device.tablet} {
      height: calc(100dvh - ${HEADER_HEIGHT.MOBILE});
      margin-top: ${HEADER_HEIGHT.MOBILE};
      align-items: flex-start;
    }
  `,
  Container: styled.div`
    max-width: 110rem;
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    padding: 0 2rem;
    width: 100%;

    @media ${device.tablet} {
      max-width: 59rem;
      flex-direction: column;
      justify-content: center;
      gap: 4rem;
      align-items: flex-start;
      padding: 4rem 2rem;
    }

    @media ${device.mobile} {
      width: 100%;
      gap: 2.7rem;
    }
  `,

  // Profile
  ProfileContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4rem;
    min-width: 40rem;
    position: relative;

    @media ${device.tablet} {
      width: 100%;
    }

    @media ${device.mobile} {
      min-width: 100%;
    }
  `,
  TitleText: styled.p`
    color: var(--gray900);
    font-family: 'EBSHunminjeongeum';
    font-size: 4.6rem;
    line-height: 6rem;
    font-weight: 700;

    @media ${device.mobile} {
      font-size: 2.4rem;
      line-height: 3.5rem;
    }
  `,
  NickNameText: styled.span`
    color: var(--green600);
  `,
  SubText: styled.p`
    color: #000;
    font-family: 'EBSHunminjeongeum';
    font-size: 2.4rem;
    margin-top: 2rem;

    @media ${device.tablet} {
      margin-top: 2rem;
    }
    @media ${device.mobile} {
      margin-top: 1.4rem;
    }
  `,
  Count: styled.span`
    color: var(--red500);
    text-decoration: underline;
  `,

  // Eidt
  EditContainer: styled.div`
    max-width: 58.2rem;
    width: 100%;
    position: relative;
    min-height: 55.5rem;
    max-height: 55.5rem;
    display: grid;
    grid-template-rows: 3.2rem 1fr;
    row-gap: 2rem;

    @media ${device.mobile} {
      row-gap: 1rem;
    }
  `,
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  HeaderTextContainer: styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    color: #616161;
    font-family: Pretendard;
    font-size: 1.8rem;
    font-weight: 500;
    @media ${device.mobile} {
      font-size: 1rem;
      gap: 0.5rem;
    }
  `,
  ListContainer: styled.ul<{ $isScroll: boolean }>`
    display: flex;
    flex-direction: column;
    min-width: 0;
    overflow-y: scroll;
    padding-right: 2.4rem;
    border-bottom: 0.1rem solid var(--gray300);
    position: relative;

    &::-webkit-scrollbar {
      width: 0.4rem;
      ${({ $isScroll }) => !$isScroll && 'display : none'}
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--brown200);
      height: 30rem;
      border-radius: 0.8rem;
      cursor: pointer;
    }

    &::-webkit-scrollbar-track {
      background-color: var(--gray300);
    }
  `,
  BookObserver: styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    min-height: 10rem;
    z-index: -1;

    @media ${device.mobile} {
      min-height: 8.2rem;
    }
  `,
  LastBookObserver: styled.div`
    min-height: 0.01rem;
    @media ${device.mobile} {
      min-height: 0.01rem;
    }
  `,
};
