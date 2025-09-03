export type MovieListData = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
};

export type MovieDetailData = MovieListData & {
  backdrop_path: string;
  overview: string;
  release_date: string;
  runtime?: number;
  genres?: { id: number; name: string }[];
};
