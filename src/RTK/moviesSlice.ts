import type { MovieListData } from '@/types/movieDataTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMovies = createAsyncThunk<
  MovieListData[], // 성공 시 payload 타입
  void, // thunk에 전달되는 인자 타입
  { rejectValue: string } // 실패 시 반환할 값 타입
>('movie/fetch', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch('http://localhost:4000/results');
    if (!res.ok) {
      throw new Error('네트워크 오류 발생');
    }
    return (await res.json()) as MovieListData[];
  } catch (error) {
    return rejectWithValue((error as Error).message || '영화 데이터를 불러오지 못했습니다.');
  }
});

interface MoviesState {
  list: MovieListData[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
const initialState: MoviesState = {
  list: [],
  status: 'idle',
  error: null,
};
const moviesSlise = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? '알 수 없는 에러';
      });
  },
});

export default moviesSlise.reducer;
