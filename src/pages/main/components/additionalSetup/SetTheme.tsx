/* eslint-disable no-unused-vars */
import React, { SetStateAction } from 'react';
import { TTheme } from '@pages/main/types/type';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import { THEME } from '../../constants/theme';

interface TSetThemeProps {
  setTheme: React.Dispatch<SetStateAction<TTheme>>;
  theme: TTheme;
}

const SetTheme = ({ theme, setTheme }: TSetThemeProps) => {
  const handleThemeClick = (theme: TTheme) => {
    setTheme(theme);
  };

  return (
    <S.Container>
      <S.ThemeWrapper>
        {THEME.map(themeItem => (
          <S.ThemeItem
            key={themeItem.value}
            onClick={() => handleThemeClick(themeItem.value)}
            $isSelected={theme === themeItem.value}
            $hasSelected={!!theme}>
            <img src={themeItem.imageUrl} />
            <p>{themeItem.title}</p>
          </S.ThemeItem>
        ))}
      </S.ThemeWrapper>
    </S.Container>
  );
};

export default SetTheme;

const S = {
  Container: styled.div`
    --theme-padding: 4.8rem;

    width: calc(76.8rem - var(--theme-padding) * 2);
    margin: 6rem 0 8.4rem;
    @media ${device.mobile} {
      width: 100%;
    }
  `,

  ThemeWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
    @media ${device.mobile} {
      gap: 1.6rem;
    }
  `,

  ThemeItem: styled.li<{ $isSelected: boolean; $hasSelected: boolean }>`
    opacity: ${({ $isSelected, $hasSelected }) => ($hasSelected ? ($isSelected ? 1 : 0.4) : 1)};
    cursor: pointer;
    img {
      border-radius: 0.2rem;
      border: ${({ $isSelected, $hasSelected }) => $hasSelected && $isSelected && 0.2}rem solid var(--button-active);
      @media ${device.mobile} {
        width: 15.2rem;
      }
    }
    p {
      font-size: 2rem;
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3rem;
      color: ${({ $isSelected, $hasSelected }) => $hasSelected && $isSelected && 'var(--green600)'};
      font-weight: ${({ $isSelected, $hasSelected }) => $hasSelected && $isSelected && 900};
    }
  `,
};
