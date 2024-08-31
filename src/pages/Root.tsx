import Header from '@components/header';
import { device } from '@styles/breakpoints';
import { HEADER_HEIGHT } from '@styles/headerHeight';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Root = () => {
  const location = useLocation();

  const nonSubSectionArray = ['/login', '/auth'];
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
    grid-template-rows: ${HEADER_HEIGHT.PC} 1fr;
    grid-template-areas:
      'a'
      'b';

    @media ${device.tablet} {
      grid-template-rows: ${HEADER_HEIGHT.MOBILE} 1fr;
    }
  `,

  Main: styled.main`
    grid-area: 'b';
  `,
};
