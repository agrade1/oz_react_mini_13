import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from './searchSlice';
import { themeReducer } from './themeSlice';
import { alertReducer } from './alertSlice';
import { authReducer } from './authSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    theme: themeReducer,
    alert: alertReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
