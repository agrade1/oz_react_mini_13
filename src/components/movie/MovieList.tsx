import type { MovieListData } from '@/types/movieDataTypes';
import MovieCard from './MovieCard';

type MovieListProps = {
  movies: MovieListData[];
};

export default function MovieList({ movies }: MovieListProps) {
  return (
    <ul className="grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {movies.map((movie) => (
        <li>
          <MovieCard key={movie.id} movie={movie} withScale />
        </li>
      ))}
    </ul>
  );
}
