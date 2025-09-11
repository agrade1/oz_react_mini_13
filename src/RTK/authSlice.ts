import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@supabase/supabase-js';

type AuthState = {
  user: User | null;
  loading: boolean;
};

const initialState: AuthState = {
  user: null,
  loading: true, // 앱 처음 켜질 때 세션 확인용
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.loading = false;
    },
    clearUser: (state) => {
      state.user = null;
      state.loading = false;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
