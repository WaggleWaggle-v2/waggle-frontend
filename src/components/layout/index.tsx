import styled from 'styled-components';
import Body from './body';
import Header from './header';

const Layout = () => {
  return (
    <S.Container>
      <Header />
      <Body />
    </S.Container>
  );
};

export default Layout;

const S = {
  Container: styled.div`
    background-color: #f6f4ee;
    height: 100vh;
    display: grid;
    grid-template-rows: 9.6rem 1fr;
    grid-template-areas:
      'a'
      'b';
  `,
};
