import { useState } from 'react';
import styled from 'styled-components';

const Nav = ({ isLogin, nickName }: { isLogin: boolean; nickName?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuToggle() {
    setIsOpen(isOpen => !isOpen);
  }

  return (
    <S.Label>
      <S.LabelTop>
        {isOpen ? (
          <S.Container>
            <S.Item>
              <S.CloseIcon onClick={handleMenuToggle} src="/src/assets/icons/cross-line.svg" alt="네비게이션 바 닫기" />
            </S.Item>
            {isLogin ? (
              <S.Item
                position={`
              display : flex;
              flex-direction : column;
              gap : 1rem;
            `}>
                <S.TitleText>안녕하신가~!</S.TitleText>
                <S.TitleText color={'#E75852'}>
                  {nickName} <S.TitleText>님</S.TitleText>
                </S.TitleText>
              </S.Item>
            ) : (
              <S.Item>
                <S.NavTitleBox as="div">
                  로그인하세요
                  <img src="/src/assets/icons/right-arrow.svg" alt="로그인 하기" />
                </S.NavTitleBox>
              </S.Item>
            )}
            <S.Item>
              <S.MenuBox>
                <S.MenuTitle as="button" type="button" disabled={isLogin ? false : true}>
                  마이페이지
                </S.MenuTitle>
                <S.MenuTitle as="button" type="button">
                  유니어스
                </S.MenuTitle>
                <S.MenuTitle as="button" type="button">
                  문의하기
                </S.MenuTitle>
              </S.MenuBox>
            </S.Item>
          </S.Container>
        ) : (
          <S.KebabIcon onClick={handleMenuToggle} src="/src/assets/icons/kebab.svg" alt="메뉴 열기" />
        )}
      </S.LabelTop>
      <S.LabelBottom />
    </S.Label>
  );
};

export default Nav;

const Item = styled.li<{ position?: string }>`
  padding: 2rem 1rem;
  list-style: none;

  ${({ position }) => position}

  &:not(:last-child) {
    border-bottom: 0.1rem solid #304055;
  }
`;

const TitleText = styled.p<{ color?: string }>`
  color: ${({ color }) => (color ? color : '#fff')};
  font-family: 'EBSHMJESaeron';
  font-size: 1.8rem;
  font-weight: 400;
  display: inline;
`;

const S = {
  Label: styled.div`
    position: relative;
  `,

  LabelTop: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 20rem;
    z-index: 1;
    background-color: #071b34;
    min-height: 7rem;
    &:before {
      content: '';
      position: absolute;
      bottom: calc(-4rem);
      border-width: 4rem 10rem 0 10rem;
      border-style: solid;
      border-color: #071b34 transparent transparent;
    }
  `,

  LabelBottom: styled.div`
    position: absolute;
    width: 20rem;
    background-color: #486080;
    height: 1rem;
    &:before {
      content: '';
      position: absolute;
      bottom: calc(-4rem);
      border-width: 4rem 10rem 0 10rem;
      border-style: solid;
      border-color: #486080 transparent transparent;
    }
  `,

  Container: styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #071a34;
    padding: 0 1.3rem;
  `,

  KebabIcon: styled.img`
    width: 2.4rem;
    height: 1.8rem;
    cursor: pointer;
  `,

  CloseIcon: styled.img`
    width: 2.4rem;
    aspect-ratio: 1 / 1;
    margin: 0 auto;
    cursor: pointer;
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

  NavTitleBox: styled(TitleText)`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `,

  MenuTitle: styled.p`
    color: #fff;
    font-family: 'Pretendard';
    font-size: 1.6rem;
    font-weight: 700;
    margin: 2rem 0;
    display: inline;

    cursor: pointer;

    &:disabled {
      color: #455263;
    }
  `,

  MenuBox: styled.div`
    display: flex;
    flex-direction: column;
  `,

  OpenMenuBox: styled.div`
    display: flex;
    flex-direction: column;
  `,

  Item,
  TitleText,
};
