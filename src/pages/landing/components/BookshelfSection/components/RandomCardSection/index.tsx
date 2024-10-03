import { ReactNode, useCallback } from 'react';
import restore from '@assets/icons/restore.svg';
import { QueryObserverResult } from '@tanstack/react-query';
import _ from 'lodash';
import styled from 'styled-components';
import { BookShelfSection, BookShelfTitle, FigureContainer } from '../../style/commonStyle';

interface TRandomCardSectionLayout {
  children: ReactNode;
  refetch: () => Promise<QueryObserverResult<Error>>;
}

const RandomCardSectionLayout = (props: TRandomCardSectionLayout) => {
  const { children, refetch } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttledRefetch = useCallback(
    _.throttle(() => {
      refetch();
    }, 1000), // 1초 안에 연타해도 1번

    [refetch],
  );
  return (
    <S.BookShelfSection className="anyone">
      <div className="title">
        <S.BookShelfTitle>누구나 오시오~!</S.BookShelfTitle>
        <span>공개된 책상이오. 매일 무작위로 공개되오.</span>
      </div>
      <S.FigureContainer>{children}</S.FigureContainer>
      <S.RestoreButton type="button" onClick={throttledRefetch}>
        다른 책장 추천받겠소
        <img src={restore} alt="새로고침" />
      </S.RestoreButton>
    </S.BookShelfSection>
  );
};

export default RandomCardSectionLayout;

const S = {
  RestoreButton: styled.button`
    cursor: pointer;
    border-radius: 0.6rem;
    border: 1px solid var(--green600);
    color: var(--green600);
    padding: 1.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
  `,
  BookShelfSection,
  BookShelfTitle,
  FigureContainer,
};
