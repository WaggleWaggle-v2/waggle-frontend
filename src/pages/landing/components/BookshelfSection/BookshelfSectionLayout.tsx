import { ReactNode } from 'react';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

interface TBookshelfSection {
  children: ReactNode;
}

const BookshelfSectionLayout = (props: TBookshelfSection) => {
  const { children } = props;
  return <S.SectionContainer>{children}</S.SectionContainer>;
};

export default BookshelfSectionLayout;

const S = {
  SectionContainer: styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 2rem 4rem;
    max-width: 40rem;
    margin: 0 auto;
    min-width: min-content;
    gap: 7rem;

    @media ${device.mobile} {
      max-width: 100%;
    }
  `,
};
