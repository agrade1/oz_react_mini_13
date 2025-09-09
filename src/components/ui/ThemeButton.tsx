import type { RootState } from '@/RTK/store';
import { changeTheme } from '@/RTK/themeSlice';
import { MoonIcon, SunDimIcon } from '@phosphor-icons/react';
import { useSelector, useDispatch } from 'react-redux';

export default function ThemeButton() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(changeTheme(theme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className={`'bg-black flex items-center gap-2 rounded-md p-4 text-white transition-colors`}
    >
      {theme === 'dark' ? <SunDimIcon size={20} /> : <MoonIcon size={20} />}
    </button>
  );
}
