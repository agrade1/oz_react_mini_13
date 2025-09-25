import MovieCardSkeleton from './MovieCardSkeleton';
import SkeletonBox from './SkeletonBox';

export function MovieCarouselSkeleton({ count = 5 }: { count?: number }) {
  return (
    <section className="mb-8">
      {/* 제목 스켈레톤 */}
      <SkeletonBox className="my-3 h-9 w-48" />
      <div className="flex gap-4 overflow-hidden">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex-1">
            <MovieCardSkeleton />
          </div>
        ))}
      </div>
    </section>
  );
}
