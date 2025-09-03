import type { AppDispatch, RootState } from '@/RTK/store';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { SwitchCase } from '@toss/react';
import { useEffect } from 'react';
import { fetchMovies } from '@/RTK/moviesSlice';

export default function MovieList() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, status, error } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <>
      <SwitchCase
        value={status}
        caseBy={{
          loading: <div>로딩중</div>,
          failed: <div>{error}</div>,
          succeeded: (
            <ul className="grid grid-cols-2 justify-items-center gap-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {list.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          ),
        }}
      ></SwitchCase>
    </>
  );
}
