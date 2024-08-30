import testMainImage from '@assets/images/test-main.jpg';
import styled from 'styled-components';
import AdditionalSetup from './components/AdditionalSetup';

const Main = () => {
  const isNewUser = true;

  return (
    <S.Container style={{ backgroundImage: `url(${testMainImage})` }}>{isNewUser && <AdditionalSetup />}</S.Container>
  );
};

export default Main;

const S = {
  Container: styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left;
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: var(--green100);
  `,
};
