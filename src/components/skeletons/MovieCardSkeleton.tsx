import SkeletonBox from './SkeletonBox';

export default function MovieCardSkeleton() {
  return (
    <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md">
      {/* 포스터 영역 */}
      <SkeletonBox className="h-full w-full" />
      {/* 텍스트 영역 */}
      <div className="absolute right-0 bottom-0 left-0 bg-black/50 p-2">
        <SkeletonBox className="mb-2 h-4 w-3/4" />
        <SkeletonBox className="h-3 w-1/4" />
      </div>
    </div>
  );
}
