import Header from '@components/header';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Root = () => {
  const location = useLocation();

  const nonSubSectionArray = ['/login', '/auth', '/setup'];
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
  Container: styled.div``,

  Main: styled.main``,
};
