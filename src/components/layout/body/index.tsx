import styled from 'styled-components';

const Body = () => {
  return <S.Container></S.Container>;
};

export default Body;

const S = {
  Container: styled.main`
    background-color: blue;
    grid-area: 'b';
  `,
};
