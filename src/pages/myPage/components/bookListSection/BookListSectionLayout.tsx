import { ReactNode } from 'react';
import RightArrowIcon from '@components/icons/RightArrowIcon';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { TSetting } from '@pages/myPage/constant/settingList';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import { TSortingOption } from '.';
import SortingBox from './components/sortingBox';

interface TBookListSectionLayout {
  settingType: TSetting;
  children: ReactNode;
  handleSelectOption: (option: TSortingOption) => void;
  selectOption: TSortingOption;
}

const BookListSectionLayout = (props: TBookListSectionLayout) => {
  const { settingType, children, handleSelectOption, selectOption } = props;
  const { targetRef, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });

  return (
    <S.Container>
      <S.Header>
        <S.HeaderTextContainer>
          마이페이지 <RightArrowIcon width={10} height={9} color={'#999999'} />
          {settingType === 'receive' ? '받은 방명록' : '남긴 방명록'}
        </S.HeaderTextContainer>
        <SortingBox handleSelectOption={handleSelectOption} selectOption={selectOption} />
      </S.Header>
      <S.ListContainer $isScroll={!isVisible}>
        <S.BookObserver ref={targetRef} />
        {children}
      </S.ListContainer>
    </S.Container>
  );
};

export default BookListSectionLayout;

const S = {
  Container: styled.div`
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
};
