import { useTmdbQuery } from '@/hooks/useTmdbQuery';
import type { MovieApiResponse, MovieListData } from '@/types/movieDataTypes';
import { MovieList } from '../movie';

type SearchResultsProps = { query: string };
export default function SearchResults({ query }: SearchResultsProps) {
  const { data } = useTmdbQuery<MovieApiResponse<MovieListData>>(
    ['movies', 'search'],
    '/search/movie',
    {
      page: 1,
      include_adult: false,
      certification_country: 'US',
      'certification.lte': 'PG-13',
      query,
    },
  );

  return (
    <>
      <MovieList movies={data?.results ?? []} />
    </>
  );
}
