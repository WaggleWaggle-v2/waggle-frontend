import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import { scrollerAnimation } from '../style/scrollAnimatioin';

const Scroller = () => {
  return (
    <S.ScrollContainer>
      <S.Mouse>
        <S.Scroller />
      </S.Mouse>
      <S.ScrollText>Scroll</S.ScrollText>
    </S.ScrollContainer>
  );
};

export default Scroller;

const S = {
  ScrollContainer: styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 2%;
    right: 2%;
    transform: translate(0, -35%);
    z-index: 30;
    display: none;

    @media ${device.tablet} {
      display: block;
    }
  `,
  Mouse: styled.div`
    width: 0.3rem;
    padding: 0.8rem 1.2rem;
    height: 4rem;
    border: 0.2rem solid var(--button-active);
    border-radius: 2.5rem;
    opacity: 0.75;
  `,
  Scroller: styled.div`
    width: 0.3rem;
    height: 1rem;
    border-radius: 25%;
    background-color: var(--button-active);
    animation: ${scrollerAnimation} 2.25s cubic-bezier(0.15, 0.41, 0.69, 0.94) infinite;
  `,
  ScrollText: styled.p`
    display: block;
    margin-top: 0.8rem;
    text-align: center;
    color: var(--button-active);
  `,
};
