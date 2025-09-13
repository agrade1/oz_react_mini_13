import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type AlertPayload = {
  type: 'success' | 'error' | 'info';
  message: string;
};

export type AlertState = AlertPayload | null;

const initialState: AlertState = null as AlertState;

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (_state, action: PayloadAction<AlertPayload>) => action.payload,
    clearAlert: () => null,
  },
});

export const { showAlert, clearAlert } = alertSlice.actions;
export const alertReducer = alertSlice.reducer;
