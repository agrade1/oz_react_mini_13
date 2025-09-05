import { SwitchCase } from '@toss/react';
import MovieList from './MovieList';
import MovieCarousel from './MovieCarousel';
import type { MovieApiResponse, MovieListData } from '@/types/movieDataTypes';
import { useTmdbQuery } from '@/hooks/useTmdbQuery';

export default function MovieSection() {
  const { data, status, error } = useTmdbQuery<MovieApiResponse<MovieListData>>(
    ['movies', 'discover'],
    '/discover/movie',
    {
      page: 1,
      include_adult: false,
      include_video: false,
      certification_country: 'US',
      'certification.lte': 'PG-13',
    },
  );

  return (
    <SwitchCase
      value={status}
      caseBy={{
        pending: <div>로딩중...</div>,
        error: <div>{error ? (error as Error).message : '오류 발생'}</div>,
        success: (
          <section className="space-y-12">
            <MovieList movies={data?.results ?? []} />
            <MovieCarousel movies={data?.results ?? []} />
          </section>
        ),
      }}
    />
  );
}
