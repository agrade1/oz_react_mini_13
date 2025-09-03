import type { MovieListData } from '@/types/movieDataTypes';
import { NavLink } from 'react-router-dom';
import { TMDB_IMAGE_BASE_URL } from '@/constants/tmdb';

type MovieCardProps = {
  movie: MovieListData;
  withScale?: boolean;
  disableClick?: boolean;
};

export default function MovieCard({
  movie,
  withScale = false,
  disableClick = false,
}: MovieCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (disableClick) {
      e.preventDefault(); // 드래그 중이면 NavLink 이동 차단
    }
  };

  return (
    <div
      className={`group relative h-full cursor-pointer overflow-hidden rounded-md transition-transform duration-300 ${
        withScale ? 'hover:scale-105' : ''
      }`}
    >
      <NavLink to={`/movie/${movie.id}`} className="h-full" onClick={handleClick}>
        <img
          src={`${TMDB_IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="h-full w-full object-cover"
          draggable={false} // 이미지 자체 드래그 방지
        />
        {/* 오버레이 */}
        <div className="absolute inset-0 flex flex-col justify-end bg-black/60 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="truncate text-sm font-semibold">{movie.title}</h3>
          <p className="text-xs">⭐ {movie.vote_average}</p>
        </div>
      </NavLink>
    </div>
  );
}
