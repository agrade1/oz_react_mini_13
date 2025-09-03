import type { MovieData } from '@/types/movieDataTypes';
import { NavLink } from 'react-router-dom';
import { TMDB_IMAGE_BASE_URL } from '@/constants/tmdb';

type MovieCardProps = { movie: MovieData };

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <li className="group relative cursor-pointer overflow-hidden rounded-md transition-transform duration-300 hover:scale-105">
      <NavLink to={`/movie/${movie.id}`} className="h-full">
        <img
          src={`${TMDB_IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="h-full w-full object-cover"
        />
        {/* 오버레이 */}
        <div className="absolute inset-0 flex flex-col justify-end bg-black/60 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="truncate text-sm font-semibold">{movie.title}</h3>
          <p className="text-xs">⭐ {movie.vote_average}</p>
        </div>
      </NavLink>
    </li>
  );
}
