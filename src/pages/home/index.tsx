import styled from 'styled-components';

const Home = () => {
  return (
    <S.Container>
      <S.TestText>여기는 홈 페이지입니다.</S.TestText>
    </S.Container>
  );
};

export default Home;

const S = {
  Container: styled.div``,
  TestText: styled.p`
    font-size: 1.8rem;
  `,
};
