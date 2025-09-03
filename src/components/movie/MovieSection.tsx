import type { AppDispatch, RootState } from '@/RTK/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMovies } from '@/RTK/moviesSlice';
import { SwitchCase } from '@toss/react';
import MovieList from './MovieList';
import MovieCarousel from './MovieCarousel';

export default function MovieSection() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, status, error } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <SwitchCase
      value={status}
      caseBy={{
        loading: <div>로딩중</div>,
        failed: <div>{error}</div>,
        succeeded: (
          <section className="space-y-12">
            <MovieList movies={list} />
            <MovieCarousel movies={list} />
          </section>
        ),
      }}
    />
  );
}
