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
  `,
};
