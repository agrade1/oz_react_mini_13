import { SwitchCase } from '@toss/react';
import MovieList from './MovieList';
import MovieCarousel from './MovieCarousel';
import { useFetchQuery } from '@/hooks/useFetchQuery';
import type { MovieListData } from '@/types/movieDataTypes';

export default function MovieSection() {
  const {
    data: movies,
    status,
    error,
  } = useFetchQuery<MovieListData[]>(['movies'], 'http://localhost:4000/results', 1000 * 60);

  return (
    <SwitchCase
      value={status}
      caseBy={{
        pending: <div>로딩중...</div>,
        error: <div>{error ? (error as Error).message : '오류 발생'}</div>,
        success: (
          <section className="space-y-12">
            <MovieList movies={movies ?? []} />
            <MovieCarousel movies={movies ?? []} />
          </section>
        ),
      }}
    />
  );
}
