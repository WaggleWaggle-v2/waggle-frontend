import styled from 'styled-components';

const Nav = () => {
  return (
    <S.GNB>
      <S.GNB_BODY>
        <S.Button>
          <img src={'/src/assets/icons/kebab.svg'} alt="메뉴 열기" />
        </S.Button>
      </S.GNB_BODY>
    </S.GNB>
  );
};

export default Nav;

const S = {
  GNB: styled.nav`
    display: flex;
    flex-direction: column;
    width: 16.2rem;
    overflow: visible;

    &::after {
      content: '';
      height: 3rem;
      width: 100%;
      background-color: #071a34;
      clip-path: polygon(0 0, 100% 0, 100% 20%, 50% 100%, 0 20%);
    }
  `,
  GNB_BODY: styled.div`
    height: 6rem;
    background-color: #071a34;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Button: styled.button`
    cursor: pointer;
  `,
};
