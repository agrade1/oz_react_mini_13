import { useState } from 'react';
import Slider from 'react-slick';
import { useTmdbQuery } from '@/hooks/useTmdbQuery';
import type { MovieApiResponse, MovieListData } from '@/types/movieDataTypes';
import { TMDB_IMAGE_ORIGINAL_URL } from '@/constants/tmdb';
import { NavLink } from 'react-router-dom';

export default function MovieBanner() {
  const { data } = useTmdbQuery<MovieApiResponse<MovieListData>>(
    ['movies', 'trending'],
    '/trending/movie/day',
    { language: 'ko-KR' },
  );

  const movies = data?.results ?? [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (_: number, next: number) => setCurrentIndex(next),
  };

  const currentMovie = movies[currentIndex];

  return (
    <section className="relative h-dvh w-full">
      {/* 슬라이드 (이미지 전용) */}
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id}>
            <div
              className="h-dvh bg-cover bg-center"
              style={{
                backgroundImage: `url(${TMDB_IMAGE_ORIGINAL_URL}${movie.backdrop_path})`,
              }}
            ></div>
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* 고정 콘텐츠 */}
      {currentMovie && (
        <div className="absolute bottom-20 left-10 z-10 max-w-xl text-white">
          <h1 className="text-4xl font-extrabold drop-shadow-lg">{currentMovie.title}</h1>
          <p className="mt-4 line-clamp-3 text-lg opacity-90">{currentMovie.overview}</p>
          <div className="mt-6 flex gap-4">
            <NavLink
              to={`/movie/${currentMovie.id}`}
              className="rounded bg-white px-6 py-2 font-bold text-black hover:bg-gray-200"
            >
              상세정보 확인하기
            </NavLink>
          </div>
        </div>
      )}
    </section>
  );
}
