import { TMDB_IMAGE_500_URL, TMDB_IMAGE_ORIGINAL_URL } from '@/constants/tmdb';
import { useTmdbQuery } from '@/hooks/useTmdbQuery';
import type { MovieDetailData } from '@/types/movieDataTypes';
import { useParams } from 'react-router-dom';

export default function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: movie } = useTmdbQuery<MovieDetailData>(['movies', 'detail', id!], `/movie/${id}`, {
    page: 1,
  });

  if (!movie) return <p>로딩중...</p>;

  return (
    <section className="cont-wrap min-h-dvh">
      {/* 배경 */}
      <img
        src={`${TMDB_IMAGE_ORIGINAL_URL}${movie?.backdrop_path}`}
        alt={`${movie?.title} 배경`}
        className="t-0 absolute inset-0 h-full w-full object-cover"
      />

      {/* 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />

      <div className="flex-between relative z-10 mx-auto w-full gap-10 py-10">
        {/* 포스터 */}
        <img
          src={`${TMDB_IMAGE_500_URL}${movie.poster_path}`}
          alt={movie.title}
          className="w-80 rounded shadow-lg"
        />

        {/* 정보 */}
        <div className="flex flex-1 flex-col gap-2.5 text-white">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <div className="my-4 flex gap-3">
            {movie.genres?.map((g, idx) => {
              const colors = [
                'bg-rose-500',
                'bg-emerald-500',
                'bg-sky-500',
                'bg-violet-500',
                'bg-amber-500',
              ];
              const color = colors[idx % colors.length]; // 순환
              return (
                <span
                  key={g.id}
                  className={`inline-block rounded-full px-3 py-1 text-sm font-medium text-white ${color}`}
                >
                  {g.name}
                </span>
              );
            })}
          </div>
          <p className="my-4 max-w-2/3">{movie.overview}</p>
          <p>평점: {movie.vote_average.toFixed(1)}</p>
          <p>개봉일: {movie.release_date}</p>
        </div>
      </div>
    </section>
  );
}
