import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type Theme = 'light' | 'dark';
type ThemeState = { theme: Theme };

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored === 'light' || stored === 'dark') return stored;
  }
  return 'dark';
};

const initialState: ThemeState = {
  theme: getInitialTheme(),
};

if (typeof window !== 'undefined') {
  const root = window.document.documentElement;
  if (initialState.theme === 'dark') root.classList.add('dark');
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<Theme>) {
      const newTheme = action.payload;
      state.theme = newTheme;

      localStorage.setItem('theme', newTheme);

      const root = window.document.documentElement;
      if (newTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
