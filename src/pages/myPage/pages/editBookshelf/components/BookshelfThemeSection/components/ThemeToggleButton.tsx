import moonIcon from '@assets/icons/moon.svg';
import sunIcon from '@assets/icons/sun.svg';
import { TTheme } from '@pages/main/types/type';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

const ThemeToggleButton = ({ theme, onClick }: { theme: TTheme; onClick: () => void }) => {
  return (
    <S.Container $theme={theme} onClick={onClick}>
      <S.IConBox $theme={theme}>
        <S.Icon src={theme === 'WHITE' ? sunIcon : moonIcon} alt={'WHITE'} />
      </S.IConBox>
    </S.Container>
  );
};

export default ThemeToggleButton;

const S = {
  Container: styled.div<{ $theme: TTheme }>`
    background-color: ${({ $theme }) => ($theme === 'WHITE' ? '#E7E7E7' : 'var(--gray600)')};
    min-width: 5rem;
    border-radius: 2.7rem;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    cursor: pointer;
    position: relative;

    @media ${device.mobile} {
      min-width: 5.5rem;
    }
  `,
  Icon: styled.img`
    width: 1.4rem;
    height: 1.4rem;

    @media ${device.mobile} {
      width: 1.6rem;
      height: 1.6rem;
    }
  `,
  IConBox: styled.div<{ $theme: TTheme }>`
    background-color: ${({ $theme }) => ($theme === 'WHITE' ? 'var(--white)' : 'var(--gray900)')};
    padding: 0.5rem;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    ${({ $theme }) => $theme !== 'WHITE' && 'transform: translateX(60%)'};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;

    @media ${device.mobile} {
      ${({ $theme }) => $theme !== 'WHITE' && 'transform: translateX(75%)'};
    }
  `,
};
