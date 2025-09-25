import { MovieBanner, MovieCarousel } from '@/components/movie';
import { ErrorBoundary, Suspense } from '@suspensive/react';
import MovieBannerSkeleton from '@/components/skeletons/MovieBannerSkeleton';
import { MovieCarouselSkeleton } from '@/components/skeletons/MovieCarouselSkeleton';

const categories = [
  { key: 'popular', title: '인기 영화' },
  { key: 'now_playing', title: '현재 상영중' },
  { key: 'upcoming', title: '개봉 예정' },
  { key: 'top_rated', title: '평점 높은 영화' },
] as const;

export default function Main() {
  return (
    <div className="-mt-24">
      {/* Hero 배너 */}
      <ErrorBoundary fallback={<p className="p-10 text-red-500">에러 발생</p>}>
        <Suspense fallback={<MovieBannerSkeleton />}>
          <MovieBanner />
        </Suspense>
      </ErrorBoundary>

      {/* 카테고리 섹션 */}
      <section className="cont-wrap py-16">
        {categories.map(({ key, title }) => (
          <ErrorBoundary key={key} fallback={<p>{title} 로딩 실패</p>}>
            <Suspense fallback={<MovieCarouselSkeleton count={5} />}>
              <MovieCarousel category={key} title={title} />
            </Suspense>
          </ErrorBoundary>
        ))}
      </section>
    </div>
  );
}
