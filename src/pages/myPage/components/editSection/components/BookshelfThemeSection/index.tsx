import { useEffect, useState } from 'react';
import { useBookshelfThemeUpdateMutation } from '@hooks/reactQuery/useQueryBookshelf';
import { TTheme } from '@pages/main/types/type';
import styled from 'styled-components';
import ThemeToggleButton from './components/ThemeToggleButton';
import { Description, SettingOne, SettingTitle } from '../../style/commStyle';

const BookshelfThemeSection = ({ bookshelfType }: { bookshelfType: TTheme }) => {
  const [theme, setTheme] = useState<TTheme>('WHITE');
  const themeUpdateMutation = useBookshelfThemeUpdateMutation();

  const handleToggleTheme = () => {
    const newTheme = theme === 'WHITE' ? 'BLACK' : 'WHITE';

    setTheme(prevTheme => {
      themeUpdateMutation.mutate(newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    setTheme(bookshelfType);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.SettingOne style={{ marginTop: '-3rem' }}>
      <S.SettingLayout>
        <S.SettingTitle>낮과 밤</S.SettingTitle>
        <ThemeToggleButton theme={theme} onClick={handleToggleTheme} />
      </S.SettingLayout>
      <S.Description>밝은 화면과 어두운 화면을 선택할 수 있습니다.</S.Description>
    </S.SettingOne>
  );
};

export default BookshelfThemeSection;

const S = {
  SettingLayout: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  SettingOne,
  SettingTitle,
  Description,
};
