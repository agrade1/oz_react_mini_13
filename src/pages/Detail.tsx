import MovieDetail from '@/components/movie/MovieDetail';
import { ErrorBoundary, Suspense } from '@suspensive/react';

export default function Defail() {
  return (
    <>
      <ErrorBoundary fallback={<p>에러 발생</p>}>
        <Suspense fallback={<p>로딩중...</p>}>
          <MovieDetail />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
