import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type SearchState = {
  history: string[];
};

const initialState: SearchState = {
  history: JSON.parse(localStorage.getItem('searchHistory') || '[]'),
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearch(state, action: PayloadAction<string>) {
      const keyword = action.payload.trim();
      if (!keyword) return;

      // 중복 제거 + 맨 앞에 추가 + 최대 10개 유지
      const newHistory = [keyword, ...state.history.filter((item) => item !== keyword)].slice(
        0,
        10,
      );

      state.history = newHistory;
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    },
    clearHistory(state) {
      state.history = [];
      localStorage.removeItem('searchHistory');
    },
  },
});

export const { addSearch, clearHistory } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
