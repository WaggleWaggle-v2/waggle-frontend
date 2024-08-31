import Header from '@components/header';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Root = () => {
  const location = useLocation();

  const nonSubSectionArray = ['/login'];
  const isSubSection = !nonSubSectionArray.includes(location.pathname);

  return (
    <S.Container>
      {isSubSection && <Header />}

      <S.Main>
        <Outlet />
      </S.Main>
    </S.Container>
  );
};

export default Root;

const S = {
  Container: styled.div`
    background-color: #f6f4ee;
    height: 100%;
    display: grid;
    grid-template-rows: 9.6rem 1fr;
    grid-template-areas:
      'a'
      'b';
  `,

  Main: styled.main`
    grid-area: 'b';
  `,
};
