import MovieDetail from '@/components/movie/MovieDetail';
import MovieDetailSkeleton from '@/components/skeletons/MovieDetailSkeleton';
import { ErrorBoundary, Suspense } from '@suspensive/react';

export default function Detail() {
  return (
    <>
      <ErrorBoundary fallback={<p>에러 발생</p>}>
        <Suspense fallback={<MovieDetailSkeleton />}>
          <MovieDetail />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
