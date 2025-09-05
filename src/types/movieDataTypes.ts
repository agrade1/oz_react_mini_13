export type MovieListData = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  adult: boolean;
};

export type MovieDetailData = MovieListData & {
  runtime?: number;
  genres?: { id: number; name: string }[];
};

export type MovieApiResponse<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};
