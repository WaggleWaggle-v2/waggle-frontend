import styled from 'styled-components';

const LoginNavBody = () => {
  return (
    <S.Container>
      <S.Item>
        <S.CloseIcon src="/src/assets/icons/cross-line.svg" />
      </S.Item>
      <S.LoginButton>
        <S.TitleText>로그인하세요</S.TitleText>
        <S.ArrowIcon src="/src/assets/icons/right-arrow.svg" />
      </S.LoginButton>
      <S.MenuTitle as="button">마이페이지</S.MenuTitle>
      <S.MenuTitle as="button">유니어스</S.MenuTitle>
      <S.MenuTitle as="button">문의하기</S.MenuTitle>
    </S.Container>
  );
};

export default LoginNavBody;

const Item = styled.li`
  padding: 2rem 1rem;

  &:not(:last-child) {
    border-bottom: 0.1rem solid #304055;
  }
`;

const S = {
  Container: styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #071a34;
    padding: 0 1.3rem;
  `,
  CloseIcon: styled.img`
    width: 2.4rem;
    aspect-ratio: 1 / 1;
    margin: 0 auto;
  `,
  ArrowIcon: styled.img`
    width: 1.5rem;
    aspect-ratio: 1 /1;
  `,
  LoginButton: styled(Item)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `,
  TitleText: styled.p`
    color: #fff;
    font-family: 'EBSHMJESaeron';
    font-size: 1.8rem;
    font-weight: 400;
  `,
  MenuTitle: styled(Item)`
    color: #fff;
    font-family: 'Pretendard';
    font-size: 1.6rem;
    font-weight: 700;

    &:disabled {
      color: #455263;
    }
  `,
  Item,
};
